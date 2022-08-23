import { TextField } from '@mui/material'
import React from 'react'
import styles from '../styles/EmailSub.module.scss'

const EmailSub = () => {
  return (
    <section className={styles.emailSubContainer}>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="form__wrapper">
          <TextField
          id='emailSub'
          variant='filled'
          label='Email Adress'
          className='form form_sub'
          />
        <button className='start__button main__button'>Get Started</button>
        </div>
    </section>
  )
}

export default EmailSub