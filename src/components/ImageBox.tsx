import React from 'react';

interface ImageBoxProps {
  image_src: string;
  onClick: () => void;
}

const ImageBox: React.FC<ImageBoxProps> = ({ image_src, onClick }) => {
  return (
    <div 
      className="h-64 border-2 border-black flex justify-center items-center"
      onClick={onClick}
    >
      <img className="max-w-full max-h-full" src={image_src} alt="comapny logo" style={{ maxWidth: '50%', maxHeight: '50%' }} />
    </div>
  );
};

export default ImageBox;