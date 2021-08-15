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
    </div>
  )
}

export default Hero
