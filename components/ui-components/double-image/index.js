// Styles
import styles from './doubleImage.module.css'

// Components
import ImageWrapper from '../image-wrapper'

const DoubleImage = ({ blok }) => {
  const { images } = blok

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.mainWrapper}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageWrapper}>
            <ImageWrapper
              src={image.filename}
              width={600}
              height={350}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoubleImage
