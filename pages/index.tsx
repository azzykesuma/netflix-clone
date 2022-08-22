import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
// component
import Hero from '../Component/Hero/Hero'
import Features from '../Component/Features'
import FAQ from '../Component/FAQ'
import EmailSub from '../Component/EmailSub'
import Footer from '../Component/Footer'
// images
import tvImages from '../public/asset/tv.png'
import mobileImages from '../public/asset/mobile.jpeg'
import downloadGif from '../public/asset/download-icon.gif'
import Devices from '../public/asset/device-pile.png'
import KidsProfile from '../public/asset/kids.png'


export interface compProps {
  title : string
  subtitle : string
  images : any
  subImages? : any
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Netflix-clone</title>
        <link href='/asset/icon.jfif' rel="icon" type ="image/x-icon" />
      </Head>
      <Hero />

      <Features
      title='Enjoy on your TV'
      subtitle='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
      images={tvImages}
      />

      <Features
      title='Download your shows to watch offline.'
      subtitle='Save your favorites easily and always have something to watch.'
      images={mobileImages}
      subImages={downloadGif}
      />

      <Features
      title='Watch everywhere.'
      subtitle='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
      images={Devices}
      />

      <Features
      title='Create profiles for kids.'
      subtitle='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
      images={KidsProfile}
      />

      <FAQ />
      <EmailSub />
      <Footer />
    </>
  )
}

export default Home
