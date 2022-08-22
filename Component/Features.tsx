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
                layout='intrinsic'
                className={styles.image}
                />
               <Box className={styles.download_mock}>
                    <Box
                    sx={{
                        display : 'flex',
                        alignItems : 'center',
                        gap : '20px',
                        textAlign : 'left'
                    }}
                    >
                        <Image 
                        src={BoxShot}
                        height='50px'
                        width='40px'
                        />
                        <div>
                            <h5>Stranger Things</h5>
                            <h5>Downloading...</h5>
                        </div>
                    </Box>
                    <Image
                    src={subImages}
                    height='40px'
                    width='40px'
                    />
               </Box>
            </div>
        ) : (
            <Box className={styles.imageContainer}>
                <Image 
                src={images}
                layout='intrinsic'
                className={styles.image}
                />
            </Box>
        )}
    </section>
  )
}

export default Features