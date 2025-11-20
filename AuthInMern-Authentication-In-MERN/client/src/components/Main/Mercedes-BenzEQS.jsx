import React from 'react';
import image1 from '../assests/44718_Mercedes-Benz EQS_xl-1024-v1-0.png';
import image2 from '../assests/44717_Mercedes-Benz EQS_xl-1024-v1-0.png';
import image3 from '../assests/44716_Mercedes-Benz EQS_xl-1024-v1-0.png';
import './MercedesEClassPage.css'; // Import CSS file for styling

const MercedesEClassPage = () => {
    // Sample data for Mercedes-Benz E-Class
    const carDetails = {
        modelName: "Mercedes-Benz EQS",
        price: "$60,000",
        images: [
            image1,
            image2,
            image3
        ]
    };

    // Handler for Buy Now button click
    const handleBuyClick = () => {
        // Implement the logic for Buy Now button click
        alert("Buy Now button clicked!");
    };

    // Handler for Contact Seller button click
    const handleContactClick = () => {
        // Implement the logic for Contact Seller button click
        alert("Contact Seller button clicked!");
    };

    return (
        <div className="container">
            <div className="twinkling"></div>
            <div className="stars"></div>
            <div className="content">
                <h1>{carDetails.modelName}</h1>
                {/* Display images */}
                <div>
                    {carDetails.images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} style={{ width: "300px", margin: "10px" }} />
                    ))}
                </div>
                {/* Display price */}
                <p>Price: {carDetails.price}</p>
                {/* Buy Now button */}
                <button onClick={handleBuyClick}>Buy Now</button>
                {/* Contact Seller button */}
                <button onClick={handleContactClick}>Contact Seller</button>
            </div>
        </div>
    );
};

export default MercedesEClassPage;
