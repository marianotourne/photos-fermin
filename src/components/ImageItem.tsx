import React from "react";
import { Image } from "../data";

type ImageItemProps = {
  image: Image;
};

export const ImageItem: React.FC<ImageItemProps> = ({ image }) => {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <div className="w-64 h-64 overflow-hidden rounded-2xl">
        <img
          src={image.url}
          alt={image.description}
          className="w-full h-full object-cover object-center"
          onClick={() => {
            alert(`${image.description} (${image.month}-${image.year})`);
          }}
        />
      </div>
      <div>
        <span className="badge bg-green-50 text-green-700 ring-green-600/20">
          {image.month}
        </span>
        <span className="badge bg-blue-50 text-blue-700 ring-blue-700/10">
          {image.year}
        </span>
      </div>
    </div>
  );
};
