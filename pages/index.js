import React, { useState } from 'react'
import Head from 'next/head'

import { getStoryblokData, getCacheVersion } from '../utils/storyblok'

// Components
import ContactForm from '../components/contact-form'
import AltForm from '../components/contact-form/alternative'
import ContactBubble from '../components/contact-bubble'
import DynamicComponent from '../components/dynamic-component'

import styles from '../styles/Home.module.css'

export default function Home({ storyblokData }) {
  const [isContactModalOpen, setContectModal] = useState(false)

  const contactModalHandler = () => {
    setContectModal(!isContactModalOpen)
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
        {storyblokData.data.story.content.body.map((blok) => (
          <DynamicComponent
            key={blok._uid}
            blok={blok}
            onClickHandler={contactModalHandler}
          />
        ))}
        {isContactModalOpen && <AltForm click={contactModalHandler} />}
        {!isContactModalOpen && <ContactBubble click={contactModalHandler} />}
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
