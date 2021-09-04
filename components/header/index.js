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
            <a aria-label='Enlace a la pagina de inicio'>
              <Logo width={205} height={30} />
            </a>
          </Link>
        </div>
        <nav className={styles.navSection}>
          <ul className={styles.ulStyle}>
            <li className={styles.navElements}>
              <Link href='/'>
                <a aria-label='Enlace a la pagina de inicio'>Inicio</a>
              </Link>
            </li>
            <li className={styles.navElements}>
              <Link href='/sobrenosotros'>
                <a aria-label='Enlace a la pagina de sobre nosotros'>
                  Sobre nosotros
                </a>
              </Link>
            </li>
          </ul>
          <ul className={styles.ulStyle}>
            <li className={styles.contactElement}>
              <Link href='/petmanager'>
                <a aria-label='Enlace a la pagina de PET Manager'>
                  PET Manager
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={styles.menuButton}
          aria-label='Abre Menu'
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
            <li onClick={() => setMenuOpen(false)}>
              <Link href='/'>
                <a
                  className={styles.mobileContactElement}
                  aria-label='Enlace a la pagina de inicio'
                >
                  Inicio
                </a>
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link href='/sobrenosotros'>
                <a
                  className={styles.mobileContactElement}
                  aria-label='Enlace a la pagina de sobre nosotros'
                >
                  Sobre nosotros
                </a>
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link href='/petmanager'>
                <a
                  className={styles.mobileContactElement}
                  aria-label='Enlace a la pagina de PET Manager'
                >
                  PET Manager
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={modalBackgroundStyles}></div>
      </Modal>
    </header>
  )
}

export default Header
