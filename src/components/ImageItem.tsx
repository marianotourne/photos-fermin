import React from "react";
import { Image } from "../data";

type ImageItemProps = {
  image: Image;
};

export const ImageItem: React.FC<ImageItemProps> = ({ image }) => {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <div className="w-64 h-64 overflow-hidden  rounded-2xl">
        <img
          src={image.url}
          alt={image.description}
          className="w-full h-full object-cover object-center"
          onClick={() => {
            console.log(`Clic en foto ${image.month}-${image.year}`);
          }}
        />
      </div>
      <div>
        <span className="inline-flex items-center rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {image.month}
        </span>
        <span className="inline-flex items-center rounded-md bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          {image.year}
        </span>
      </div>
    </div>
  );
};
