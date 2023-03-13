import React from 'react';
import plane1 from "../assets/images/plane1.jpg";
import plane2 from "../assets/images/plane2.jpg";
import plane3 from "../assets/images/plane3.jpg";
import plane4 from "../assets/images/plane4.jpg";

function ImagesRoted() {
  const images = [
    { src: {plane1}, alt: 'Image 1' },
    { src: {plane2}, alt: 'Image 2' },
    { src: {plane3}, alt: 'Image 3' }
  ];

  return (
    <div>
      <h1>My React App</h1>
      {images.map(image => (
        <img key={image.src} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default ImagesRoted;
