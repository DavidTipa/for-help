"use client";
import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <section
      id="ods4"
      className="py-20 bg-white text-gray-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:gap-12">
        {/* Imagen ODS */}
        <div className="flex-shrink-0">
          <Image
            src="/images/guias/ods.png" // coloca tu imagen en /public/ods4.png
            alt="ODS 4 Educación de Calidad"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Texto principal */}
        <div className="mt-10 lg:mt-0 lg:w-2/3">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Nuestro compromiso con la Educación de Calidad
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            En For-Help, trabajamos para garantizar que cada estudiante foráneo
            de la BUAP tenga acceso a oportunidades, recursos y apoyo que
            impulsen una educación inclusiva y de excelencia.
          </p>

          {/* Bullets */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </span>
              <span>Recursos y guías prácticas para foráneos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </span>
              <span>Conexión con comunidades de apoyo.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </span>
              <span>Fomento de igualdad y equidad educativa.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
