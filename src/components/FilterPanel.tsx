"use client";

import { FilterMonth } from "./FilterMonth";
import { FilterYear } from "./FilterYear";
import { FilterDescription } from "./FilterDescription";
import { useState } from "react";

type FilterPanelProps = {
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
  onDescriptionChange: (description: string) => void;
};

export const FilterPanel: React.FC<FilterPanelProps> = ({
  onMonthChange,
  onYearChange,
  onDescriptionChange,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div className={`flex px-2 justify-end ${isHidden ? "border-b-2" : ""}`}>
        <div
          onClick={handleClick}
          className="p-1 text-md font-semibold leading-6 cursor-pointer text-gray-900"
        >
          Filtrar &#9776;
        </div>
      </div>
      {!isHidden ? (
        <div
          className={`flex flex-col justify-right align-center bg-slate-200 px-5 ${
            isHidden ? "h-8" : "block"
          }`}
        >
          <FilterMonth onMonthChange={onMonthChange} />
          <FilterYear onYearChange={onYearChange} />
          <FilterDescription onDescriptionChange={onDescriptionChange} />
        </div>
      ) : null}
    </>
    // </div>
  );
};
