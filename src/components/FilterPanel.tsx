import React from "react";

type FilterPanelProps = {
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
};

export const FilterPanel: React.FC<FilterPanelProps> = ({
  onMonthChange,
  onYearChange,
}) => {
  return (
    <div className="flex justify-center items-center mb-4">
      <select onChange={(e) => onMonthChange(parseInt(e.target.value))}>
        <option value={0}>Todos</option>
        <option value={1}>Enero</option>
        <option value={2}>Febrero</option>
        <option value={3}>Marzo</option>
        <option value={4}>Abril</option>
        <option value={5}>Mayo</option>
        <option value={6}>Junio</option>
        <option value={7}>Julio</option>
        <option value={8}>Agosto</option>
        <option value={9}>Septiembre</option>
        <option value={10}>Octubre</option>
        <option value={11}>Noviembre</option>
        <option value={12}>Diciembre</option>
      </select>
      <select onChange={(e) => onYearChange(parseInt(e.target.value))}>
        <option value={0}>Todos</option>
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
      </select>
    </div>
  );
};