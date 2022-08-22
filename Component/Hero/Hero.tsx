import React from 'react'
import styles from '../../styles/Hero.module.scss'
import TopNav from './TopNav'
// material ui
import {TextField, Button} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Hero = () => {
  return (
    <main className={styles.main_container}>
        <TopNav />
        <div className={styles.hero__container}>
            <h1 className={styles.hero__header}>Unlimited movies, TV, shows, and more.</h1>
            <p className={styles.hero__text}>Watch anywhere. Cancel anytime</p>
            <p className={styles.hero__text}>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className={styles.form__wrapper}>
                <TextField
                id="email" 
                label="Email Address" 
                variant="filled"
                className='form'
                />
                <Button className='main__button start__button' variant="contained" endIcon={<ArrowForwardIosIcon />}>
                    Get started
                </Button>
            </div>
        </div>
    </main>
  )
}

export default Hero