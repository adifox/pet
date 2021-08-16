// Styles
import styles from './teaser.module.css'

// Components
import ImageWrapper from '../ui-components/image-wrapper'

const Hero = ({ blok }) => {
  const { headline, subtitle, teaserImage } = blok
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitles}>
            <h1 className={styles.title}>{headline}</h1>
            <h2>{subtitle}</h2>
          </div>
          <div className={styles.heroImageContainer}>
            <ImageWrapper
              src={teaserImage.filename}
              alt='petexcellenttreatment'
              height={200}
              width={450}
              priority={true}
            />
          </div>
        </div>
      </div>
      <svg
        width='500'
        height='80'
        viewBox='0 0 500 80'
        preserveAspectRatio='none'
      >
        <path d='M0,0 L0,40 Q250,80 500,40 L500,0 Z' fill='#095b90' />
      </svg>
    </div>
  )
}

export default Hero
