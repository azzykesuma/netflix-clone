import React from 'react'
import styles from '../styles/Footer.module.scss'
import { Grid, Box } from '@mui/material'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Questions? Call 007-803-321-2130</h3>
        <Box sx={{ marginTop : '3em'}}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={3}><a>FAQ</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Account</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Investor Relations</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Redeem Gift Cards</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Ways to Watch</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Privacy</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Corporate Information</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Speed Test</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Only on NetfGridx</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Help Center</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Media Center</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Jobs</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Buy Gift Cards</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Terms of Use</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Cookie Preference</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Contact Us</a></Grid>
                <Grid item xs={6} sm={4} md={3}><a>Legal Notices</a></Grid>
            </Grid>
        </Box>

        <form className='form_lang_selection form_footer'>
            <select name="lang" id="lang">
                <option value="eng">English</option>
                <option value="id">Bahasa Indonesia</option>
            </select>
        </form>
        <p>Netflix Indonesia</p>
    </footer>
  )
}

export default Footer