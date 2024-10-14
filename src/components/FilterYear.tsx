import { years, Year } from "../data";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

type FilterPanelProps = {
  onYearChange: (year: number) => void;
};

export const FilterYear: React.FC<FilterPanelProps> = ({ onYearChange }) => {
  const [selectedYear, setSelectedYear] = useState<Year>(years[0]);

  const handleYearChange = (year: Year) => {
    setSelectedYear(year);
    onYearChange(year.id);
  };

  return (
    <Listbox value={selectedYear} onChange={handleYearChange}>
      <Label className="block text-sm font-medium leading-6 text-gray-900">
        Año
      </Label>
      <div className="relative mt-2 mb-4">
        <ListboxButton className="filterSelect">
          <span className="block truncate">{selectedYear.year}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {years.map((year: Year) => (
            <ListboxOption
              key={year.id}
              value={year}
              className="group relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[focus]:bg-indigo-300 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {year.year}
              </span>

              <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-300 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};
