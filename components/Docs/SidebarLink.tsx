"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/docs`}
          className={`bg-stroke dark:bg-blackho flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Todas las Propiedades
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Departamentos
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Cuartos Individuales
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Casas Compartidas
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Cerca del Campus
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Amueblado
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Hasta $5,000
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          $5,000 - $10,000
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Más de $10,000
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
