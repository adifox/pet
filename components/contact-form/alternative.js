import React, { useState } from 'react'
import axios from 'axios'
// import { Formik, Form, Field, ErrorMessage } from 'formik'

// Styles
import styles from './contactForm.module.css'

const CONTACT_US = 'Contáctenos'
const SENDING = 'Enviando'

// initialValues={{ email: '', name: '', message: '' }}

const AltForm = ({ click }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    message: '',
  })
  const [positiveResponse, setPositiveResponse] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Obligatorio'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email no valido'
    }
    return errors
  }

  const handleChange = (event) => {
    console.log('EVENT:', event.target.value)
  }
  return (
    <>
      <div className={styles.formContainer}>
        <h2>Estamos aquí para lo que necesites. - ALT</h2>
        <div>
          {positiveResponse && (
            <div className={styles.thanksBox}>
              <h3>
                Muchas gracias, en breve nos pondremos en contacto contigo.
              </h3>
              <button className={styles.thanksButton} onClick={() => click()}>
                Genial
              </button>
            </div>
          )}
          {!positiveResponse && (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                console.log('VALUES:')
                // axios
                //   .post('/api/mailer', values)
                //   .then((response) => {
                //     console.log('RESPONSE:', response)
                //     setSubmitting(false)
                //     resetForm()
                //     setPositiveResponse(true)
                //   })
                //   .catch((err) => console.log('AXIOS POST ERROR', err))
              }}
            >
              <div className={styles.formWrapper}>
                <div className={styles.textFieldWrapper} id='contactForm'>
                  <label htmlFor='message'>Mensaje: </label>
                  <textarea
                    name='message'
                    className={styles.textField}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                <div className={styles.nameMailFields}>
                  <div className={styles.inputFieldWrapper}>
                    <label htmlFor='name'>Nombre: </label>
                    <input
                      type='text'
                      name='name'
                      className={styles.inputField}
                      onChange={(event) => handleChange(event)}
                    />
                    <div name='name' />
                  </div>
                  <div className={styles.inputFieldWrapper}>
                    <label htmlFor='email'>Email: </label>
                    <input
                      type='email'
                      name='email'
                      className={styles.inputField}
                      onChange={(event) => handleChange(event)}
                    />
                    <div name='email' />
                  </div>
                </div>
                <div className={styles.ctButtonWrapper}>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={
                      !isSubmitting
                        ? styles.contactButton
                        : styles.contactButtonSending
                    }
                  >
                    {!isSubmitting ? CONTACT_US : SENDING}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className={styles.backgroundContainer} onClick={() => click()}></div>
    </>
  )
}

export default AltForm
