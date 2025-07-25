"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">

                  Plataforma de Apoyo para Estudiantes Foráneos
                </span>{" "}
                BUAP
              </span>
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                Una solución completa para
                <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  Estudiantes Foráneos
                </span>
              </h2>
              <p>
                Conecta, resuelve dudas, encuentra alojamiento, y accede a
                información útil para adaptarte a la vida universitaria en la
                BUAP.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Apoyo real para tu día a día
                  </h3>
                  <p>
                    Consejos útiles, comunidad activa y recursos que sí
                    importan.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Plataforma personalizable
                  </h3>
                  <p>
                    Tu experiencia mejora con base en lo que necesitas y
                    compartes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="max-w-c-1235 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium text-black uppercase dark:text-white">
                Una nueva etapa en la BUAP
              </h4>
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                Con todas las {"   "}
                <span className="before:bg-titlebg2 dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  herramientas esenciales
                </span>
              </h2>
              <p>
                Desde alojamiento y comida hasta rutas de transporte y grupos
                estudiantiles, te damos lo necesario para que te sientas en
                casa.
              </p>
              <div>
                <a
                  href="#"
                  className="group hover:text-primary dark:hover:text-primary mt-7.5 inline-flex items-center gap-2.5 text-black dark:text-white"
                >
                  <span className="duration-300 group-hover:pr-2">
                     Explorar más
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
