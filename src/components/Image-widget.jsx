import React, { useState, useRef } from "react";
import ImageCard from "./ImageCard";
import ImageUpload from "./ImageUpload";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageWidget = () => {
  const [images, setImages] = useState([]);
  const scrollRef = useRef(null);

  const handleUploadSuccess = (imageUrl) => {
    setImages((prev) => [...prev, imageUrl]);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;
    
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      className="bg-[#363C43] rounded-2xl p-6 text-white shadow-lg w-full h-[330px] flex flex-col"
    >
      
      <div className="flex justify-between items-center mb-4">
      
        <div className="bg-black rounded-2xl px-4 py-2">
          <h3 className="text-base font-semibold">Gallery</h3>
        </div>
        
        
        <div className="flex items-center gap-3">
          <ImageUpload onUploadSuccess={handleUploadSuccess} />
          
          <button 
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-[#272B30] shadow-md hover:bg-[#2F343A] hover:shadow-lg transition-all"
          >
            <ChevronLeft className="text-gray-300" size={20} />
          </button>

          <button 
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-[#272B30] shadow-md hover:bg-[#2F343A] hover:shadow-lg transition-all"
          >
            <ChevronRight className="text-gray-300" size={20} />
          </button>
        </div>
      </div>

      
      <div className="flex-1 flex items-center">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto w-full scrollbar-thin scrollbar-track-black scrollbar-thumb-[#272B30] scrollbar-thumb-rounded px-2"
        >
          {images.length === 0 ? (
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-gray-400 text-sm">No images uploaded yet.</p>
            </div>
          ) : (
            images.map((url, i) => <ImageCard key={i} imageUrl={url} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageWidget;