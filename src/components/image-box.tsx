import React from "react";

interface ImageBoxProps {
  image_src: string;
  onClick?: () => void;
}

const ImageBox: React.FC<ImageBoxProps> = ({ image_src, onClick }) => {
  return (
    <div
      className="h-48 md:h-64 border-2 border-black flex justify-center items-center"
      onClick={onClick}
    >
      <img
        className="w-full h-full object-contain p-4"
        src={image_src}
        alt="company logo"
        style={{
          maxWidth: "min(100%, 300px)",
          maxHeight: "50%",
        }}
      />
    </div>
  );
};

export default ImageBox;
