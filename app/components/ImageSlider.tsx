// components/ImageSlider.js
import React, { useState } from 'react';
import styles from './ImageSlider.module.css'; // Import the CSS module

const ImageSlider = ({ images:any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.slider}>
      <button onClick={prevSlide} className={styles.arrow}>
        &lt;
      </button>
      <div className={styles.imageContainer}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className={styles.image} />
      </div>
      <button onClick={nextSlide} className={styles.arrow}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
