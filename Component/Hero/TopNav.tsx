import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Nav.module.scss'

const TopNav = () => {
  return (
    <nav className={styles.nav}>
        <Image width='80px' height='20px' src={'/asset/logo.png'} />
        <div className={styles.nav__wrapper}>
            <form className='form_lang_selection'>
                <select name="lang" id="lang">
                    <option value="eng">English</option>
                    <option value="id">Bahasa Indonesia</option>
                </select>
            </form>
            <button className='main__button'>Sign In</button>
        </div>
    </nav>
  )
}

export default TopNav