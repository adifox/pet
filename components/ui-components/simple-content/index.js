// Styles
import styles from './simpleContent.module.css'

// Components
import ImageWrapper from '../image-wrapper'

const SimpleContent = ({ blok }) => {
  const { image, mainText, title, leftPosition } = blok

  const content = leftPosition ? (
    <div className={styles.mainWrapper}>
      <div className={styles.imageWrapper}>
        <ImageWrapper
          src={image.filename}
          width={600}
          height={350}
          alt={'an image'}
        />
      </div>
      <div className={styles.textWrapper}>
        <h2>{title}</h2>
        <p>{mainText}</p>
      </div>
    </div>
  ) : (
    <div className={styles.mainWrapper}>
      <div className={styles.textWrapper}>
        <h2>{title}</h2>
        <p>{mainText}</p>
      </div>
      <div className={styles.imageWrapper}>
        <ImageWrapper
          src={image.filename}
          width={600}
          height={350}
          alt={'an image'}
        />
      </div>
    </div>
  )

  return content
}

export default SimpleContent
