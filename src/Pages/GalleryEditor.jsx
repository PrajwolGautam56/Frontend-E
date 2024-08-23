// src/components/GalleryEditor.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const GalleryEditor = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    axios.get('/api/gallery')
      .then(response => setImages(response.data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const handleAddImage = () => {
    const formData = new FormData();
    formData.append('image', newImage);

    axios.post('/api/gallery', formData)
      .then(response => setImages([...images, response.data]))
      .catch(error => console.error('Error adding image:', error));
  };

  const handleRemoveImage = (id) => {
    axios.delete(`/api/gallery/${id}`)
      .then(() => setImages(images.filter(image => image.id !== id)))
      .catch(error => console.error('Error removing image:', error));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedImages = Array.from(images);
    const [movedImage] = updatedImages.splice(result.source.index, 1);
    updatedImages.splice(result.destination.index, 0, movedImage);

    setImages(updatedImages);
    axios.post('/api/gallery/reorder', { images: updatedImages })
      .catch(error => console.error('Error updating image order:', error));
  };

  return (
    <div>
      <h1>Edit Gallery</h1>
      <input type="file" onChange={e => setNewImage(e.target.files[0])} />
      <button onClick={handleAddImage}>Add Image</button>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="gallery">
          {(provided) => (
            <div className="gallery" {...provided.droppableProps} ref={provided.innerRef}>
              {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img src={image.url} alt="gallery" />
                      <button onClick={() => handleRemoveImage(image.id)}>Remove</button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default GalleryEditor;
