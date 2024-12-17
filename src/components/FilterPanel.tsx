"use client";

import { FilterMonth } from "./FilterMonth";
import { FilterYear } from "./FilterYear";
import { FilterDescription } from "./FilterDescription";
import { Header } from "./Header";

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
  return (
    <div className="sticky top-0">
      <Header />
      <div className="flex flex-col md:justify-between md:flex-row align-center bg-slate-200 py-5 px-5 gap-2">
        <FilterMonth onMonthChange={onMonthChange} />
        <FilterYear onYearChange={onYearChange} />
        <FilterDescription onDescriptionChange={onDescriptionChange} />
      </div>
    </div>
  );
};
