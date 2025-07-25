"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
           <div className="md:w-1/2">
            <h4 className="mb-4 text-xl font-semibold text-primary animate-bounce">
              Apoyo real para estudiantes foráneos
            </h4>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-black dark:text-white mb-6 leading-tight">
                Bienvenido a
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

            <div className="mt-6">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-4">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Ingresa tu matrícula BUAP"
                    className="w-full sm:w-auto border-stroke shadow-sm focus:border-primary dark:border-strokedark dark:focus:border-primary rounded-full border px-6 py-3 focus:outline-none dark:bg-black dark:shadow-none"
                  />
                  <button
                    aria-label="get started button"
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full transition duration-300 ease-in-out"
                  >
                    Explorar
                  </button>
                </div>
              </form>

              <p className="mt-5 text-base text-black dark:text-white italic">
                No necesitas registrarte. Accede directamente a la ayuda que necesitas.
              </p>
            </div>
          </div>


            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute top-0 -left-11.5"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="shadow-solid-l hidden dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
