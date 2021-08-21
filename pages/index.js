import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

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

  // const config = {
  //   type: 'bar',
  //   data: data,
  //   options: {
  //     indexAxis: 'y',
  //     // Elements options apply to all of the options unless overridden in a dataset
  //     // In this case, we are setting the border of each horizontal bar to be 2px wide
  //     elements: {
  //       bar: {
  //         borderWidth: 2,
  //       },
  //     },
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'right',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Chart.js Horizontal Bar Chart',
  //       },
  //     },
  //   },
  // }

  const labels1 = [
    '1-2 veces al año',
    '3-6 veces al año',
    'Más de 6 veces al año',
  ]
  const data1 = {
    labels: labels1,
    datasets: [
      {
        label: 'Porcentaje de encuestrados',
        backgroundColor: '#095b90',
        borderColor: 'rgb(255, 99, 132)',
        data: [35, 45, 20, 100],
      },
    ],
  }

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Frecuencia con la que los dueños de perros viajan con ellos en España según una encuesta publicada en julio de 2019',
      },
    },
  }

  const options2 = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Frecuencia con la que los dueños de perros viajan con ellos en España según una encuesta publicada en julio de 2019',
      },
    },
  }

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
        <div className={styles.chartWrapper}>
          {chartDisplayArray.map((el) => (
            <div key={el._uid}>
              <Chart blok={el} />
            </div>
          ))}
        </div>
        <ContactForm />
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
