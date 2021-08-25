// Styles
import styles from './fullImageBox.module.css'

// Components
import ImageWrapper from '../image-wrapper'

const FullImageBox = ({ blok }) => {
  const { image } = blok

  return (
    <div className={styles.mainWrapper}>
      <div key={image.id} className={styles.imageWrapper}>
        <ImageWrapper
          src={image.filename}
          width={1200}
          height={700}
          alt={image.alt}
        />
      </div>
    </div>
  )
}

export default FullImageBox
