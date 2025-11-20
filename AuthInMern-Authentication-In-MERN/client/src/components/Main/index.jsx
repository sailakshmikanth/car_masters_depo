import React, { useState, useEffect, useRef } from 'react';
import styles from "./styles.module.css";
import videoBg from '../assests/home page video.mp4';
import carLogoVideo from '../assests/wallpaperjpg-MyVideo-Convert2video-com.mp4';
import carImage1 from '../assests/BENZ (2).jpg';
import carImage2 from '../assests/Rolls Royce.jpg';
import carImage3 from '../assests/Buggati.jpg';
import carImage4 from '../assests/Lamborgini.jpg';
import carImage5 from '../assests/BMW.jpg';
import carImage6 from '../assests/KOENIGSEGG LOGO WALLPAPER.jpg';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

const Main = () => {
    const handleScrollDown = () => {    
        window.scrollTo({
            top: window.innerHeight, // Scroll to the bottom of the viewport
            behavior: 'smooth', // Add smooth scrolling behavior
        });
    };
    const [loggedIn] = useState(!!localStorage.getItem("token"));
    const [showAbout, setShowAbout] = useState(false);
    const firstVideoRef = useRef(videoBg);
    const secondVideoRef = useRef(null);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const handleSecondVideoEnter = () => {
        if (firstVideoRef.current) {
            firstVideoRef.current.pause();
        }
    };

    useEffect(() => {
        const handleScroll = (event) => {
            // Check if the user is scrolling vertically
            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                // Check if the user has scrolled to the end of the content
                if (window.scrollX >= document.documentElement.scrollWidth - window.innerWidth) {
                    // Prevent further scrolling
                    event.preventDefault();
                } else {
                    // Adjust the horizontal scroll position by multiplying event.deltaY with a factor
                    window.scrollTo({
                        left: window.scrollX + event.deltaY * 3, // Adjust the factor (3 in this case) to make scrolling faster
                        behavior: 'smooth',
                    });
                }
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector(`.${styles.about}`);
            if (aboutSection && window.scrollY >= aboutSection.offsetTop - window.innerHeight / 2) {
                setShowAbout(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.main_container}>
            {loggedIn ? (
                <div className={styles.video_section}>
                    <video ref={firstVideoRef} src={videoBg} autoPlay loop className={styles.background_video} />
                    <div className={styles.content}>
                        <h1>Welcome to CarMasters Depot</h1>
                        <p>"Where Every Ride Tells a Story: Welcome to CarMasters Depot, where automotive dreams find their perfect match. Explore our curated collection of excellence and discover the ride that speaks to you."</p>
                    </div>
                    <nav className={styles.navbar}>
                        <h1>CARMASTER DEPOT</h1>
                        <button className={styles.white_btn} onClick={handleLogout}>
                            Logout
                        </button>
                    </nav>
                </div>
            ) : (
                <div className={styles.main_container}>
                    <nav className={styles.navbar}>
                        <h1>fakebook</h1>
                        <button className={styles.white_btn} onClick={handleLogout}>
                            Logout
                        </button>
                    </nav>
                </div>
            )}
            <div className={styles.car_logo_section} onScroll={handleSecondVideoEnter}>
                <video ref={secondVideoRef} src={carLogoVideo} autoPlay loop muted className={styles.car_logo_video} />
                <div className={styles.car_images_section}>
                    <a href="/Benz"><img src={carImage1} className={styles.car_image} alt="Car Image 1" /></a>
                    <a href="/RollsRoyce"><img src={carImage2} className={styles.car_image} alt="Car Image 2" /></a>
                    <a href="/Bugatti"><img src={carImage3} className={styles.car_image} alt="Car Image 3" /></a>
                    <a href="/Lamborghini"><img src={carImage4} className={styles.car_image} alt="Car Image 4" /></a>
                    <a href="/BMW"><img src={carImage5} className={styles.car_image} alt="Car Image 5" /></a>
                    <a href="/Konenigsegg"><img src={carImage6} className={styles.car_image} alt="Car Image 6" /></a>
                </div>
            </div>
            <div className={styles.about}>
                {showAbout && (
                    <div className={styles.about_section}>
                        <h2 className={styles.about_heading}>ABOUT US</h2>
                        <p className={styles.about_text}>At CarMasters Depot, we pride ourselves on our extensive inventory of cars, catering to every taste, lifestyle, and budget. Whether you're in the market for luxurious sedans, powerful sports cars, rugged SUVs, or efficient hybrids, we have it all. From iconic brands like Mercedes-Benz, Rolls Royce, Bugatti, Lamborghini, BMW, to exotic manufacturers like Koenigsegg, our collection showcases the epitome of automotive excellence.</p>
                        
                        {/* Social media links */}
                        <div className={styles.social_icons}>
                            <a href="https://www.instagram.com/your_instagram_account" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.social_icon} /></a>
                            <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.social_icon} /></a>
                            <a href="https://twitter.com/your_twitter_account" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.social_icon} /></a>
                            <a href="https://www.linkedin.com/company/your_linkedin_page" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.social_icon} /></a>
                            <a href="https://www.youtube.com/user/your_youtube_channel" target="_blank" rel="noopener noreferrer"><FaYoutube className={styles.social_icon} /></a>
                            <a href="https://www.pinterest.com/your_pinterest_account" target="_blank" rel="noopener noreferrer"><FaPinterest className={styles.social_icon} /></a>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.scroll_down}>
  <span className={styles.scroll_text}>SCROLL</span>
  <FaAngleDown className={styles.scroll_icon} />
  <FaAngleDown className={styles.scroll_icon} />
  <FaAngleDown className={styles.scroll_icon} />
</div>


        </div>
    );
};

export default Main;
