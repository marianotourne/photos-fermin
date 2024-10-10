"use client";

import { FilterMonth } from "./FilterMonth";
import { FilterYear } from "./FilterYear";

type FilterPanelProps = {
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
  // onDescriptionChange: (description: string) => void;
};

export const FilterPanel: React.FC<FilterPanelProps> = ({
  onMonthChange,
  onYearChange,
  // onDescriptionChange,
}) => {
  return (
    <div className="flex flex-col justify-center align-center mx-6">
      <FilterMonth onMonthChange={onMonthChange} />
      <FilterYear onYearChange={onYearChange} />
    </div>
  );
};
