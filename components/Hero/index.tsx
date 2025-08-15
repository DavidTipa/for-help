"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="overflow-hidden pt-28 pb-20 md:pt-36 xl:pt-40 xl:pb-24 bg-gradient-to-r from-red-50 via-white to-red-50">
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
          
          {/* Texto */}
          <div className="md:w-1/2 mt-10 lg:mt-0">
            <h4 className="mb-4 text-xl font-semibold text-primary animate-bounce">
              Apoyo real para estudiantes foráneos
            </h4>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-black dark:text-white mb-6 leading-tight">
              Bienvenido a{" "}
              <span className="relative ml-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 drop-shadow-sm uppercase tracking-wider">
                FOR-HELP
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-primary/40 dark:bg-primary/60 -z-10 rounded-sm animate-pulse"></span>
              </span>
              <br />
              tu plataforma de apoyo foráneo BUAP
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
              Una plataforma pensada para facilitar tu llegada, adaptación y
              experiencia universitaria. Recomendaciones útiles, herramientas clave y apoyo real, todo en un solo lugar.
            </p>
          </div>

          {/* Imagen grande */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg h-[400px] lg:h-[500px]">
              <Image
                src="/images/shape/bienvenida.jpg"
                alt="Estudiantes felices"
                fill
                className="rounded-3xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
