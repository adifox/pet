import Link from 'next/link'

// Styles
import styles from './simpleContent.module.css'

// Components
import ImageWrapper from '../image-wrapper'

const SimpleContent = ({ blok, onClickHandler }) => {
  const { image, mainText, title, leftPosition, ctaButton, ctaButtonText } =
    blok

  const content = leftPosition ? (
    <div className={styles.outerContainer}>
      <div className={styles.mainWrapper}>
        <div className={styles.leftImageWrapper}>
          <ImageWrapper
            src={image.filename}
            width={600}
            height={350}
            alt={'an image'}
          />
        </div>
        <div className={styles.leftTextWrapper}>
          <h2>{title}</h2>
          <p>{mainText}</p>
          {ctaButton && (
            <Link href='/petmanager' passHref={true}>
              <button className={styles.ctaLinkButton}>{ctaButtonText}</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.outerContainer}>
      <div className={styles.mainWrapper}>
        <div className={styles.textWrapper}>
          <h2>{title}</h2>
          <p>{mainText}</p>
          {ctaButton && (
            <button
              className={styles.ctaButton}
              onClick={() => onClickHandler()}
            >
              {ctaButtonText}
            </button>
          )}
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
    </div>
  )

  return content
}

export default SimpleContent
