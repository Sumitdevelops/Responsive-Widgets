import React from "react";

const ImageCard = ({ imageUrl }) => {
  return (
    <div className="min-w-[90px] h-[150px] rounded-2xl overflow-hidden bg-[#2E3238] 
                    shadow-[inset_0_0_6px_rgba(255,255,255,0.1)] hover:scale-[1.02] 
                    transition-transform duration-200">
      <img
        src={imageUrl}
        alt="Uploaded"
        className="w-46 h-full object-cover"
      />
    </div>
  );
};

export default ImageCard;
