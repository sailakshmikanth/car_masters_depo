import React from 'react';
import benzImage1 from '../assests/b1.jpg';
import benzImage2 from '../assests/b2.jpg';
import benzImage3 from '../assests/b3.jpg';
import benzImage4 from '../assests/b4.jpg';
import benzImage5 from '../assests/b5.jpg';
import benzLogo from '../assests/BENZ-LOGO.jpg';
import benzVideo from '../assests/Y2meta.app - Mercedes AMG 5.5 L V8 BiTurbo - 3D Blender Animation.mp4';
import styles from './BenzCollectionPage.module.css';

const BenzCollectionPage = () => {
    return (
        <div className={styles.container}>
            {/* Twinkling stars animation */}
            <div className={styles.stars}>
                {[...Array(50)].map((_, index) => (
                    <div key={index} className={styles.star} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                ))}
            </div>

            <img src={benzLogo} alt="Benz Logo" className={styles.logo} />
            <div className={styles.text}>Explore Our Benz Collection</div>
            <div className={styles.videoContainer}>
                <video src={benzVideo} autoPlay loop className={styles.video} />
            </div>
            <div className={styles.imageContainer}>
                <a href="/benz/Mercedes-BenzE-Class" className={styles.imageLink}>
                    <img src={benzImage1} alt="Benz 1" className={styles.image} />
                    <div className={styles.imageText1}>Mercedes-Benz E-Class</div>
                </a>
                <a href="/benz/Mercedes-BenzGLC" className={styles.imageLink}>
                    <img src={benzImage2} alt="Benz 2" className={styles.image} />
                    <div className={styles.imageText2}>Mercedes-Benz GLC</div>
                </a>
                <a href="/benz/Mercedes-BenzS-Class" className={styles.imageLink}>
                    <img src={benzImage3} alt="Benz 3" className={styles.image} />
                    <div className={styles.imageText3}>Mercedes-Benz S-Class</div>
                </a>
                <a href="/benz/Mercedes-BenzEQS" className={styles.imageLink}>
                    <img src={benzImage4} alt="Benz 4" className={styles.image} />
                    <div className={styles.imageText4}>Mercedes-Benz EQS</div>
                </a>
                <a href="/benz/Mercedes-BenzMaybachGLS" className={styles.imageLink}>
                    <img src={benzImage5} alt="Benz 5" className={styles.image} />
                    <div className={styles.imageText5}>Mercedes-Benz Maybach GLS</div>
                </a>
            </div>
        </div>
    );
};

export default BenzCollectionPage;
