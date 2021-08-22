import Logo from '../ui-components/logo'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.outerBox}>
        {/* <div className={styles.mainWrapper}>
          <div>
            <h2>Contacto</h2>
            <ul>
              <li>Nuestros Colaboradores</li>
              <li>Sobre nosotros</li>
              <li>Ayuda</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h2>Siguenos</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div>
            <h2>Más</h2>
            <ul>
              <li>Servicios</li>
              <li>Contáctanos</li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className={styles.finalFooter}>
        <p>&copy; Pet Excellent Treatment</p>
      </div>
    </footer>
  )
}

export default Footer
