// Styles
import styles from './modal.module.css'

const Modal = ({ className, children, onClickHandler }) => {
  return (
    <div className={className}>
      <div className={styles.modalHeader}>
        <button onClick={onClickHandler}>
          <i className='fa fa-close'></i>
        </button>
      </div>
      {children}
    </div>
  )
}

export default Modal
