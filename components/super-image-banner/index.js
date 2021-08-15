// Styles
import styles from './superImageBanner.module.css'

// Components
import ImageWrapper from '../ui-components/image-wrapper'

const SuperImageBanner = ({ blok }) => {
  // const { headline, subtitle, teaserImage } = blok
  return (
    <div className={styles.backgroundDiv}>
      <div className={styles.mainWrapper}>
        {blok.image.map((pic) => (
          <div key={pic.id} className={styles.individualPics}>
            <ImageWrapper
              src={pic.filename}
              alt='petexcellenttreatment'
              height={250}
              width={250}
              priority={true}
            />
          </div>
        ))}
        {/* <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
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
      </div> */}
      </div>
    </div>
  )
}

export default SuperImageBanner
