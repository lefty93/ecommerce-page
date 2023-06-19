import React, { useState } from 'react';
import { thumbNail } from '../constants';
import { closeIcon, nextIcon, previousIcon } from '../assets';

const Product = () => {
  const [hoveredImage, setHoveredImage] = useState(thumbNail[0].image);
  const [hoveredThumbnail, setHoveredThumbnail] = useState(thumbNail[0].id);

  const handleThumbnailHover = (imgSrc, thumbId) => {
    setHoveredImage(imgSrc);
    setHoveredThumbnail(thumbId);
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const handleThumbnailClick = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className='flex max-h-[60%] max-w-[60%]'>
      <div className='flex flex-col '>
        <img src={hoveredImage} alt="" className='rounded-2xl' />
        {/* thumbNail */}
        <div className='flex mt-4 justify-between'>
          {thumbNail.map((thumb) => (
            <img
              key={thumb.id}
              src={thumb.thumbnailImg}
              alt=""
              className={`w-16 h-16 rounded-xl hover:border-2 hover:scale-105 hover:border-primary transition-opacity duration-300 hover:opacity-40 cursor-pointer 
                ${thumb.id === hoveredThumbnail ? 'border-2 scale-105 border-primary opacity-40' : ''}`}
              onMouseEnter={() => handleThumbnailHover(thumb.image, thumb.id)} onClick={handleThumbnailClick}
            />
          ))}
        </div>


      </div>

      {lightboxOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          
          <div className="relative flex flex-col items-center">
            <div className='flex w-[50%] justify-end mt-4'>
              <button
                className=""
                onClick={closeLightbox}
              >
                <img src={closeIcon} alt="" />
              </button>
            </div>
           
            <div className="flex mt-4 justify-center gap-5">
              <button><img src={previousIcon} alt="" /></button>
              <img src={hoveredImage} alt="" className="max-h-[50%] max-w-[50%] rounded-xl" />
              <button><img src={nextIcon} alt="" /></button>
            </div>
            
            <div className="flex mt-4 justify-center gap-5">
              {thumbNail.map((thumb) => (
                <img
                  key={thumb.id}
                  src={thumb.thumbnailImg}
                  alt=""
                  className={`h-[10%] w-[10%] rounded-2xl hover:border-2 hover:scale-105 hover:border-primary cursor-pointer 
            ${thumb.id === hoveredThumbnail ? 'border-2 scale-105 border-primary opacity-75' : ''}`}
                  style={{ opacity: thumb.id === hoveredThumbnail ? 0.75 : 1 }}
                  onMouseEnter={() => handleThumbnailHover(thumb.image, thumb.id)}
                  onClick={handleThumbnailClick}
                />
              ))}

            </div>
          </div>
        </div>

      )}

    </div>
  );
};

export default Product;

// TODO MODIFY THE LIGHTBOX, create new useState so that the hover effect not affect
// TODO Add the arrow, add the function
// TODO For the close icon, add the hover, function
