import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './contactBubble.module.css'

const ContactBubble = ({ click }) => (
  <div className={styles.contactFloater} onClick={() => click()}>
    <div className={styles.envelop}>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  </div>
)

export default ContactBubble
