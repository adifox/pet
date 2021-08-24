import Head from 'next/head'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getStoryblokData, getCacheVersion } from '../utils/storyblok'

// Components
import Teaser from '../components/teaser'
import SimpleContent from '../components/ui-components/simple-content'
import HeroTitle from '../components/ui-components/hero-title'
import SuperImageBanner from '../components/super-image-banner'
import ContactForm from '../components/contact-form'
import Chart from '../components/charts'

import styles from '../styles/Home.module.css'

export default function Home({ storyblokData }) {
  const simpleContentArray = []
  const chartDisplayArray = []

  let teaserContent = null
  let heroTitle = null
  let superImageBanner = null
  storyblokData.data.story.content.body.map((blok) => {
    if (blok.component === 'teaser') {
      teaserContent = <Teaser blok={blok} />
    }
    if (blok.component === 'simpleContent') {
      simpleContentArray.push(blok)
    }
    if (blok.component === 'heroTitle') {
      heroTitle = <HeroTitle blok={blok} />
    }
    if (blok.component === 'superImageBanner') {
      superImageBanner = <SuperImageBanner blok={blok} />
    }
    if (blok.component === 'chartDisplay') {
      chartDisplayArray.push(blok)
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Petexcellenttreatment</title>
        <meta
          name='description'
          content='Innovación del Corazón para tu hotel'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {teaserContent}
        {heroTitle}
        <div className={styles.simpleContentWrapper}>
          {simpleContentArray.map((el) => (
            <div key={el._uid}>
              <SimpleContent blok={el} />
            </div>
          ))}
        </div>
        <div className={styles.chartHeader}>
          <h2>Lo que dicen las encuestas</h2>
        </div>
        <div className={styles.chartWrapper}>
          {chartDisplayArray.map((el) => (
            <div key={el._uid}>
              <Chart blok={el} />
            </div>
          ))}
        </div>
        <ContactForm />
        <div className={styles.contactFloater}>
          <a href='#contactForm'>
            <div className={styles.envelop}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await getCacheVersion()
  const storyblokData = await getStoryblokData('cdn/stories/home', {
    cv: response.data.space.version,
    version: 'published',
  })

  return {
    props: { storyblokData },
  }
}
