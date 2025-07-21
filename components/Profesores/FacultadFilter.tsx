"use client";
import Link from "next/link";

interface FacultadFilterProps {
  selectedFacultad?: string;
}

const FacultadFilter = ({ selectedFacultad }: FacultadFilterProps) => {
  const facultades = [
    "Ingeniería",
    "Ciencias de la computación",
    "Medicina",
    "Derecho",
    "Administración",
    "Psicología",
    "Comunicación",
  ];

  return (
    <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-9">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Filtrar por Facultad
      </h4>

      <ul>
        {facultades.map((facultad, index) => (
          <li
            key={index}
            className="hover:text-primary mb-3 transition-all duration-300 last:mb-0"
          >
            <Link
              href="#"
              className={`${
                selectedFacultad === facultad ? "text-primary font-medium" : ""
              }`}
            >
              {facultad}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultadFilter;
