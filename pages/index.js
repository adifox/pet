import Head from 'next/head'
import Image from 'next/image'

import { getStoryblokData, getCacheVersion } from '../utils/storyblok'

// Components
import Teaser from '../components/teaser'
import SimpleContent from '../components/ui-components/simple-content'
import HeroTitle from '../components/ui-components/hero-title'
import SuperImageBanner from '../components/super-image-banner'
import ContactForm from '../components/contact-form'

import styles from '../styles/Home.module.css'

export default function Home({ storyblokData }) {
  const simpleContentArray = []

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
        <ContactForm />
        {/* <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
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
