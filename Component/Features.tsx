import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { compProps } from '../pages/index'
import styles from '../styles/features.module.scss';
// images
import BoxShot from '../public/asset/boxshot.png'

const Features = ({title,subtitle,images,subImages} :compProps) => {

  return (
    <section className={styles.main_container}>
        <div className={styles.feature__wrapper}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
        {subImages ? (
            <div className={styles.sub__container}>
                <Image 
                src={images}
                width='350px'
                height='300px'
                />
               <Box className={styles.download_mock}>
                    <Image 
                    src={BoxShot}
                    height='50px'
                    width='40px'
                    />
                    <div>
                        <h5>Stranger Things</h5>
                        <h5>Downloading...</h5>
                    </div>
                    <Image
                    src={subImages}
                    height='40px'
                    width='40px'
                    />
               </Box>
            </div>
        ) : (
            <Image 
            src={images}
            width='300px'
            height='200px'
            />
        )}
    </section>
  )
}

export default Features