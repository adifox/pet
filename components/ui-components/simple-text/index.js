// Styles
import styles from './simpleText.module.css'

const SimpleText = ({ blok }) => {
  const { title, text } = blok

  return (
    <div className={styles.background}>
      <div className={styles.outerWrapper}>
        <div className={styles.mainWrapper}>
          <div className={styles.textWrapper}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleText
