import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerMainWrapper}>
      <div className={styles.containerBox}>
        <div className={styles.textWrapper}>
          <h2>Siguenos en</h2>
          <ul>
            <li>
              <a
                href='https://www.facebook.com/PetExcellentTreatment'
                aria-label='Pet Excellent Treatment enlace a Facebook'
                target='_blank'
                rel='noreferrer'
              >
                <div className={styles.faceIconWrapper}>
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/pet_excellent_treatment'
                className={styles.instagramLink}
                aria-label='Pet Excellent Treatment enlace a Instagram'
                target='_blank'
                rel='noreferrer'
              >
                <div className={styles.instaIconWrapper}>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/company/pet-excellent-treatment/'
                className={styles.linkedinLink}
                aria-label='Pet Excellent Treatment enlace a LinkedIn'
                target='_blank'
                rel='noreferrer'
              >
                <div className={styles.linkedIconWrapper}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.finalFooter}>
        <p>
          &copy; Pet Excellent Treatment 2021. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
