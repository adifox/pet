// Styles
import styles from './heroTitle.module.css'

const HeroTitle = ({ blok }) => {
  const { subtitle, title } = blok

  const content = (
    <div className={styles.mainWrapper}>
      <div className={styles.contentWrapper}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  )

  return content
}

export default HeroTitle
