import { useState } from "react";

type FilterPanelProps = {
  onDescriptionChange: (description: string) => void;
};

export const FilterDescription: React.FC<FilterPanelProps> = ({
  onDescriptionChange,
}) => {
  const [description, setDescription] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
    onDescriptionChange(value);
  };

  const handleClearInput = () => {
    setDescription("");
    onDescriptionChange("");
  };

  return (
    <div className="flex items-center md:w-2/3 ">
      <label
        htmlFor="search"
        className="block text-sm font-medium leading-6 text-gray-900 pr-6"
      >
        Descripción
      </label>
      <div className="relative flex items-center w-full">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Ingrese su búsqueda"
          className="relative w-full text-sm rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:leading-6"
          value={description}
          onChange={handleInputChange}
        />

        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd
            className="inline-flex items-center rounded-full border border-gray-200 px-1 font-sans text-xs text-gray-400 cursor-pointer"
            onClick={handleClearInput}
          >
            X
          </kbd>
        </div>
      </div>
    </div>
  );
};
