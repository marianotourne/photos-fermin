import React, { useState } from "react";
import { images } from "./data";
import { ImageGallery } from "./components/ImageGallery";
import { FilterPanel } from "./components/FilterPanel";
import "./index.css";
import Footer from "./Footer";

const App: React.FC = () => {
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const filteredImages = images.filter((image) => {
    const matchesMonth = month === 0 || image.month === month;
    const matchesYear = year === 0 || image.year === year;
    const matchesDescription = image.description
      .toLowerCase()
      .includes(description.toLowerCase());
    return matchesMonth && matchesYear && matchesDescription;
  });

  return (
    <>
      <FilterPanel
        onMonthChange={setMonth}
        onYearChange={setYear}
        onDescriptionChange={setDescription}
      />
      <ImageGallery filteredImages={filteredImages} />
      <Footer />
    </>
  );
};

export default App;
