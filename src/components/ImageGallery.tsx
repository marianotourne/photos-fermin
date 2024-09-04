import { images } from "../data";
import { ImageItem } from "./ImageItem";

export const ImageGallery: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
};
