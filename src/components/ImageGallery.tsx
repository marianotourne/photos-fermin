import { ImageItem } from "./ImageItem";
import { Image } from "../data";
import { useEffect, useState } from "react";

type ImageGalleryProps = {
  filteredImages: Image[];
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  filteredImages,
}) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageClic = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div className="w-96">
            <img
              src={selectedImage.url}
              alt={selectedImage.description}
              className="w-full h-full object-cover object-center"
            />
            <div className="flex flex-col">
              <div className="flex justify-center mt-2 gap-x-1">
                <span className="badge bg-green-50 text-green-700 ring-green-600/20">
                  {selectedImage.month}
                </span>
                <span className="badge bg-blue-50 text-blue-700 ring-blue-700/10">
                  {selectedImage.year}
                </span>
              </div>
              <span className="text-md font-semibold text-balance text-center mt-2 text-white">
                {selectedImage.description}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center">
        {filteredImages.map((image) => (
          <ImageItem
            key={image.id}
            image={image}
            onClick={() => {
              handleImageClic(image);
            }}
          />
        ))}
      </div>
    </>
  );
};
