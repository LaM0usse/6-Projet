import React, { useState } from 'react';
import './carousel.css'

export default function Carousel({ sliderImage }) {
  //Déclare une variable d'état currentSlide avec une valeur initiale de 0. 
  const [currentSlide, setCurrentSlide] = useState(0);
  //Déclare une variable d'état totalSlide avec une valeur initiale égale à la longueur du tableau sliderImage
  const [totalSlide] = useState(sliderImage.length)

  //Modulo (%) permet de faire une boucle de la dernière à la première image
  //Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>(prevSlide + 1) % totalSlide)
  }

  //Fonction pour revenir à l'image précédente
  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide -1 + totalSlide) % totalSlide)
  }

  return (
    <div className="carousel">
      {/* Si il y a plus d'une image affiche les flèches et le compteur d'image sinon n'affiche pas */}
      {sliderImage.length > 1 && (
      <>
      {/* Icône des flèches gauche et droite */}
      <i className="fa-solid fa-chevron-left carousel-arrowleft" onClick={previousSlide}></i>
      <i className="fa-solid fa-chevron-right carousel-arrowright" onClick={nextSlide}></i>
      {/* Affichage du compteur des images actuelles */}
      <p className="carousel-count">{currentSlide + 1}/{totalSlide}</p>
      </>
      )}
      {/* Affichage de l'image actuelle */}
      <img className="carousel-image" src={sliderImage[currentSlide]} alt="logement" />
    </div>
  );
}
