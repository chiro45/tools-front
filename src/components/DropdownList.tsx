import { useEffect, useState } from "react";
import type { IItem } from "../types/IItem";
import { DropdownItem } from "./DropDownItem";

export const DropdownList = () => {
  const [data, setData] = useState<IItem[]>([]);

  const handleGetData = async () => {
    const response = await fetch("/data/data.json");
    const data: { data: IItem[] } = await response.json();
    setData(data.data);
  };
  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Herramientas de Programación
      </h1>
      <div className="w-full max-w-4xl space-y-6">
        {data.map((item, index) => (
          <DropdownItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
