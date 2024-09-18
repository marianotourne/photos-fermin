import React from "react";
import { ImageItem } from "./ImageItem";
import { Image } from "../data";

type ImageGalleryProps = {
  filteredImages: Image[];
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  filteredImages,
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {filteredImages.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
};
