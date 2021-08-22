import { useState } from 'react'
import Link from 'next/link'

// Components
import Logo from '../ui-components/logo'
import Modal from '../ui-components/modal'

import styles from './header.module.css'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const modalStyle = isMenuOpen ? styles.headerModal : styles.closeHeaderModal
  const modalBackgroundStyles = isMenuOpen
    ? styles.modalBackground
    : styles.closeModalBackground
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <Link href='/'>
            <a>
              <Logo
                src={'/images/pet-logo.png'}
                alt='petexcellenttreatment logo'
                width={205}
                height={30}
              />
            </a>
          </Link>
        </div>
        <nav className={styles.navSection}>
          <ul className={styles.ulStyle}>
            <li className={styles.navElements}>
              <Link href='/'>Inicio</Link>
            </li>
            <li className={styles.navElements}>
              <Link href='/blog'>Blog</Link>
            </li>
            <li className={styles.navElements}>
              <Link href='/sobremi'>Sobre nosotros</Link>
            </li>
          </ul>
          <ul className={styles.ulStyle}>
            <li className={styles.contactElement}>
              <Link href='/'>Contáctenos</Link>
            </li>
          </ul>
          {/* <Link href='/blog'>Contáctenos</Link> */}
        </nav>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <i className='fa fa-bars'></i>
          ) : (
            <i className='fa fa-close'></i>
          )}
        </button>
      </div>
      <Modal
        className={modalStyle}
        onClickHandler={() => setMenuOpen(!isMenuOpen)}
      >
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href='/'>Inicio</Link>
            </li>
            <li>
              <Link href='/article'>Blog</Link>
            </li>
            <li>
              <Link href='/sobremi'>Sobre mi</Link>
            </li>
          </ul>
        </div>
        <div className={modalBackgroundStyles}></div>
      </Modal>
    </header>
  )
}

export default Header
