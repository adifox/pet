// Styles
import styles from './teaser.module.css'

// Components
import ImageWrapper from '../ui-components/image-wrapper'

const Hero = ({ blok }) => {
  const {
    headline,
    headline2,
    subtitle,
    subtitle2,
    subtitle3,
    subtitle4,
    teaserImage,
    teaserSubImage,
  } = blok
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitles}>
            <h1 className={styles.title}>{headline}</h1>
            <h2 className={styles.headline2}>{headline2}</h2>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <h2 className={styles.subtitle}>{subtitle2}</h2>
            <h2 className={styles.subtitle}>{subtitle3}</h2>
            <h2 className={styles.subtitle}>{subtitle4}</h2>
          </div>
          <div className={styles.heroImageContainer}>
            <ImageWrapper
              src={teaserImage.filename}
              alt='petexcellenttreatment'
              height={350}
              width={350}
              priority={true}
            />
            <div className={styles.blinkTeaserElement}>
              <ImageWrapper
                src={teaserSubImage.filename}
                alt='petexcellenttreatment'
                height={100}
                width={400}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <svg
        width='500'
        height='80'
        viewBox='0 0 500 80'
        preserveAspectRatio='none'
      >
        <path d='M0,0 L0,40 Q250,80 500,40 L500,0 Z' fill='#3890b4' />
      </svg>
    </div>
  )
}

export default Hero
