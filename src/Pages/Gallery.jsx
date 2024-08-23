// src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/gallery')
      .then(response => setImages(response.data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="gallery">
      {images.map(image => (
        <img key={image.id} src={image.url} alt="gallery" />
      ))}
    </div>
  );
};

export default Gallery;
