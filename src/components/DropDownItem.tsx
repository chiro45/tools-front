import { useState, type FC } from "react";
import type { IItem } from "../types/IItem";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

type Props = {
  item: IItem;
};

export const DropdownItem: FC<Props> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition"
      >
        <span>{item.nombre}</span>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {open && (
        <ul className="px-6 p-4 pb-6 space-y-3 animate-fade-in">
          {item.links.map((herramienta, i) => (
            <li key={i}>
              <a
                href={herramienta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition"
              >
                <ExternalLink size={16} />
                {herramienta.nombre}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
