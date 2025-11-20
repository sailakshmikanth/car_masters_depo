import React from 'react';
import { Link } from 'react-router-dom';
import benzImage1 from '../assests/benz1.webp';
import benzImage2 from '../assests/benz1.webp';
import benzImage3 from '../assests/benz1.webp';
import benzLogo from '../assests/Lambo.jpg';
import benzVideo from '../assests/LB ☆ WORKS Aventador - Unreal Engine cinematic with Raytracing.webm'; // Import the video file
import styles from './BenzCollectionPage.module.css'; // Import CSS file for styling

const RollsRoyceCollectionPage = () => {
    return (
        <div className={styles.container}>
            {/* Twinkling stars animation */}
            <div className={styles.stars}>
                {[...Array(50)].map((_, index) => (
                    <div key={index} className={styles.star} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                ))}
            </div>

            <img src={benzLogo} alt="Benz Logo" className={styles.logo} />
            <div className={styles.text}>Explore Our Lamborghini  Collection</div>
            <div className={styles.videoContainer}>
                <video src={benzVideo} autoPlay loop className={styles.video} />
            </div>
            <div className={styles.imageContainer}>
                <Link to="/benz-info-1">
                    <img src={benzImage1} alt="Benz 1" className={styles.image} />
                </Link>
                <Link to="/benz-info-2">
                    <img src={benzImage2} alt="Benz 2" className={styles.image} />
                </Link>
                <Link to="/benz-info-3">
                    <img src={benzImage3} alt="Benz 3" className={styles.image} />
                </Link>
            </div>
        </div>
    );
};

export default RollsRoyceCollectionPage;
