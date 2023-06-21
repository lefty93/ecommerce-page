import React, { useState } from 'react';
import { thumbNail } from '../constants';



const Product = () => {
  const [hoveredImage, setHoveredImage] = useState(thumbNail[0].image);
  const [hoveredThumbnail, setHoveredThumbnail] = useState(thumbNail[0].id);

  const handleThumbnailHover = (imgSrc, thumbId) => {
    setHoveredImage(imgSrc);
    setHoveredThumbnail(thumbId);
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(thumbNail[0].image)
  const [clickedThumbnail, setClickedThumbnail] = useState(thumbNail[0].id)
  const handleThumbnailClick = (imgSrc, thumbId) => {
    setLightboxOpen(true);
    setClickedImage(imgSrc);
    setClickedThumbnail(thumbId);
  }

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPreviousImage = () => {
    const previousIndex = thumbNail.findIndex((thumb) => thumb.id === clickedThumbnail);
    console.log("previousIndex", previousIndex);
    const currentIndex = (previousIndex - 1 + thumbNail.length) % thumbNail.length;
    console.log("currentIndex", currentIndex);
    const currentThumb = thumbNail[currentIndex];
    console.log("currentThumb", currentThumb)
    setClickedImage(currentThumb.image);
    setClickedThumbnail(currentThumb.id);
  }

  const goToNextImage = () => {
    const previousIndex = thumbNail.findIndex((thumb) => thumb.id === clickedThumbnail);
    console.log("previousIndex", previousIndex);
    const currentIndex = (previousIndex + 1) % thumbNail.length;
    console.log("currentIndex", currentIndex);
    const currentThumb = thumbNail[currentIndex];
    console.log("", currentThumb)
    setClickedImage(currentThumb.image);
    setClickedThumbnail(currentThumb.id);
  }
  

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
                ${thumb.id === hoveredThumbnail ? 'border-2 scale-105 border-primary opacity-40' : ''} `}
              onMouseEnter={() => handleThumbnailHover(thumb.image, thumb.id)} onClick={() => handleThumbnailClick(thumb.image, thumb.id)}
            />
          ))}
        </div>


      </div>

      {lightboxOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">

          <div className="relative flex flex-col items-center">
            <div className='flex w-[50%] justify-end mt-4'>
              <button
                className='text-white hover:text-[#ff7d1a]'
                onClick={closeLightbox}
              >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className="">
                  <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="flex my-4 justify-center items-center gap-5">
              <button className="rounded-full bg-white flex items-center justify-center hover:text-[#ff7d1a] h-10 w-10 z-10 translate-x-10" onClick={goToPreviousImage}>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className="previousButton">
                  <path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd" />
                </svg>
              </button>
              <img src={clickedImage} alt="" className="max-h-[50%] max-w-[50%] rounded-xl" />
              <button className="rounded-full bg-white flex items-center justify-center hover:text-[#ff7d1a] h-10 w-10 z-10 -translate-x-10" onClick={goToNextImage}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className="nextButton">
                  <path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd" />
                </svg>
              </button>
            </div>


            <div className="flex h-full w-full justify-center gap-5">
              {thumbNail.map((thumb) => (
                <img
                  key={thumb.id}
                  src={thumb.thumbnailImg}
                  alt=""
                  className={`h-[10%] w-[10%] rounded-xl hover:border-2 hover:scale-105 hover:border-primary cursor-pointer 
            ${thumb.id === clickedThumbnail ? 'border-2 scale-105 border-primary opacity-75' : ''}`}
                  style={{ opacity: thumb.id === hoveredThumbnail ? 0.75 : 1 }}
                  onClick={() => handleThumbnailClick(thumb.image, thumb.id)}
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




