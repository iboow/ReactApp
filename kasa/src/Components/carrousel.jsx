import '../styles/components.sass/carrousel.scss'
import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Carrousel(props) {
  const { images, currentImageIndex, setCurrentImageIndex } = props;

  const numImages = images.length;

  // fonction pour afficher l'image suivante
  function handleNext() {
    setCurrentImageIndex(currentImageIndex === numImages - 1 ? 0 : currentImageIndex + 1);
  }

  // fonction pour afficher l'image précédente
  function handlePrevious() {
    setCurrentImageIndex(currentImageIndex === 0 ? numImages - 1 : currentImageIndex - 1);
  }

  return (
    <div>
      {numImages > 1 && (
        <div>
          <button className='arrow prev' onClick={handlePrevious}></button>
          <button className='arrow next' onClick={handleNext}></button>
        </div>
      )}
      <div className='container-carrousel'>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <p className='numberOfPictures'>{`${currentImageIndex+1}/${numImages}`}</p>
      </div>
    </div>
  );
}

export default Carrousel;