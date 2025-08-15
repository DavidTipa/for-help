"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaUsers, FaMapMarkedAlt, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* ===== About Start ===== */}
      <section className="overflow-hidden py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
            
            {/* Imagen principal */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-1/2 aspect-[588/526] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about/inicio.jpg"
                alt="Foráneos BUAP"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Texto más resumido y visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Bienvenido a{" "}
                <span className="bg-white text-purple-600 px-2 rounded">
                  For Help BUAP
                </span>
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Tu plataforma para sobrevivir, conectar y disfrutar la vida universitaria como foráneo.
              </p>

              {/* Iconos con puntos clave */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/10 p-5 rounded-xl hover:bg-white/20 transition">
                  <FaUsers className="text-4xl mb-3" />
                  <h3 className="font-semibold">Comunidad</h3>
                  <p className="text-sm opacity-80">Foráneos apoyando foráneos.</p>
                </div>

                <div className="bg-white/10 p-5 rounded-xl hover:bg-white/20 transition">
                  <FaMapMarkedAlt className="text-4xl mb-3" />
                  <h3 className="font-semibold">Guías Locales</h3>
                  <p className="text-sm opacity-80">Mapas, rutas y tips reales.</p>
                </div>

                <div className="bg-white/10 p-5 rounded-xl hover:bg-white/20 transition">
                  <FaLightbulb className="text-4xl mb-3" />
                  <h3 className="font-semibold">Consejos</h3>
                  <p className="text-sm opacity-80">Lo que nos hubiera gustado saber.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
