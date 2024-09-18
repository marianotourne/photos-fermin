import React, { useState } from "react";
import { images } from "./data";
import { ImageGallery } from "./components/ImageGallery";
import { FilterPanel } from "./components/FilterPanel";
import { Header } from "./components/Header";
import "./index.css";

const App: React.FC = () => {
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  const filteredImages = images.filter((image) => {
    const matchesMonth = month === 0 || image.month === month;
    const matchesYear = year === 0 || image.year === year;
    return matchesMonth && matchesYear;
  });

  return (
    <div>
      <Header />
      <FilterPanel onMonthChange={setMonth} onYearChange={setYear} />
      <ImageGallery filteredImages={filteredImages} />
    </div>
  );
};

export default App;
