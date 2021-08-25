import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './contactBubble.module.css'

const ContactBubble = () => (
  <div className={styles.contactFloater}>
    <a href='#contactForm'>
      <div className={styles.envelop}>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </a>
  </div>
)

export default ContactBubble
