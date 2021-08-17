import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// Styles
import styles from './contactForm.module.css'

const ContactForm = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2>Estamos aquí para lo que necesites.</h2>
        <div>
          <Formik
            initialValues={{ email: '', name: '', message: '' }}
            validate={(values) => {
              const errors = {}
              if (!values.email) {
                errors.email = 'Obligatorio'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Email no valido'
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log('VALUES:', values)
              axios
                .post('/api/mailer', values)
                .then((response) => {
                  console.log('RESPONSE:', response)
                  setSubmitting(false)
                  resetForm()
                })
                .catch((err) => console.log('AXIOS POST ERROR', err))
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className={styles.textFieldWrapper}>
                  <label htmlFor='message'>Mensaje: </label>
                  <Field
                    name='message'
                    component='textarea'
                    className={styles.textField}
                  />
                </div>
                <div className={styles.nameMailFields}>
                  <div className={styles.inputFieldWrapper}>
                    <label htmlFor='name'>Nombre: </label>
                    <Field
                      type='text'
                      name='name'
                      className={styles.inputField}
                    />
                    <ErrorMessage name='name' component='div' />
                  </div>
                  <div className={styles.inputFieldWrapper}>
                    <label htmlFor='email'>Email: </label>
                    <Field
                      type='email'
                      name='email'
                      className={styles.inputField}
                    />
                    <ErrorMessage name='email' component='div' />
                  </div>
                </div>
                <div className={styles.ctButtonWrapper}>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={styles.contactButton}
                  >
                    Contáctenos
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ContactForm