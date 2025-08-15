"use client";
import React from "react";
import Image from "next/image";
import { FaBook, FaUsers, FaBalanceScale } from "react-icons/fa";

const Feature = () => {
  return (
    <section
      id="ods4"
      className="py-20 bg-gradient-to-r from-red-50 via-white to-red-50 text-gray-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:gap-12">
        
        {/* Imagen ODS */}
        <div className="flex-shrink-0 relative">
          <Image
            src="/images/guias/ods.png"
            alt="ODS 4 Educación de Calidad"
            width={300}
            height={300}
            className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Texto principal */}
        <div className="mt-10 lg:mt-0 lg:w-2/3">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Nuestro compromiso con{" "}
            <span className="text-red-600">Educación de Calidad</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            En For-Help, trabajamos para garantizar que cada estudiante foráneo
            de la BUAP tenga acceso a oportunidades, recursos y apoyo que
            impulsen una educación inclusiva y de excelencia.
          </p>

          {/* Bullets */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <FaBook className="text-red-600 text-xl flex-shrink-0" />
              <span>Recursos y guías prácticas para foráneos.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaUsers className="text-red-600 text-xl flex-shrink-0" />
              <span>Conexión con comunidades de apoyo.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaBalanceScale className="text-red-600 text-xl flex-shrink-0" />
              <span>Fomento de igualdad y equidad educativa.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
