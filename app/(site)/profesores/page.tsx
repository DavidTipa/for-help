import SharePost from "@/components/Blog/SharePost";
import FacultadFilter from "@/components/Profesores/FacultadFilter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buscar Profesores - For Help",

  // other metadata
  description: "Encuentra y evalúa profesores por facultad y materia",
};

const ProfesoresPage = async () => {
  return (
    <>
      <section className="pt-35 pb-20 lg:pt-45 lg:pb-25 xl:pt-50 xl:pb-30">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-3.5">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar por nombre del profesor..."
                      className="border-stroke shadow-solid-12 focus:border-primary dark:border-strokedark dark:focus:border-primary w-full rounded-lg border px-6 py-4 focus:outline-hidden dark:bg-black dark:shadow-none"
                    />

                    <button
                      className="absolute top-0 right-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="hover:fill-primary dark:hover:fill-primary fill-black transition-all duration-300 dark:fill-white"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <FacultadFilter />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection rounded-md border bg-white p-7.5 md:p-10">
                <h2 className="2xl:text-sectiontitle2 mt-11 mb-5 text-3xl font-semibold text-black dark:text-white">
                  Dr. María Elena García
                </h2>

                {/* Calificación con estrellas */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-5 w-5 ${
                          star <= 4
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    4.2/5 (127 evaluaciones)
                  </span>
                </div>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">
                      Facultad:{" "}
                    </span>{" "}
                    Ingeniería
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Experiencia: 8 años
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Modalidad:
                    </span>
                    Presencial y Virtual
                  </li>
                </ul>

                <div className="blog-details">
                  {/* Materias que imparte */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                      Materias que Imparte
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                        Cálculo diferencial e integral
                      </span>
                      <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                        diseño de base de datos
                      </span>
                      <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                        Álgebra Lineal
                      </span>
                      <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                        POO 1
                      </span>
                    </div>
                  </div>

                  {/* Comentarios de estudiantes */}
                  <div className="mb-8">
                    <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
                      Comentarios de Estudiantes
                    </h3>

                    {/* Comentario 1 */}
                    <div className="border-stroke dark:border-strokedark mb-6 rounded-lg border p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="font-medium text-black dark:text-white">
                          Ana López
                        </span>
                        <span className="text-sm text-gray-500">
                          - Cálculo I
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        "Excelente profesora! Explica súper bien y siempre está
                        dispuesta a resolver dudas. Gracias a ella pude pasar
                        Cálculo I con buena nota. 100% recomendada."
                      </p>
                    </div>

                    {/* Comentario 2 */}
                    <div className="border-stroke dark:border-strokedark mb-6 rounded-lg border p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex items-center">
                          {[1, 2, 3, 4].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <svg
                            className="h-4 w-4 fill-gray-300 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="font-medium text-black dark:text-white">
                          Carlos Mendoza
                        </span>
                        <span className="text-sm text-gray-500">
                          - Álgebra Lineal
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        "Muy buena profesora, pero a veces va un poco rápido.
                        Sin embargo, siempre está disponible para aclarar dudas
                        después de clase."
                      </p>
                    </div>

                    {/* Comentario 3 */}
                    <div className="border-stroke dark:border-strokedark rounded-lg border p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="font-medium text-black dark:text-white">
                          María Rodríguez
                        </span>
                        <span className="text-sm text-gray-500">
                          - Cálculo II
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        "La mejor profesora de matemáticas que he tenido! Sus
                        clases son dinámicas y siempre encuentra la manera de
                        hacer entender los temas más difíciles. ¡Increíble!"
                      </p>
                    </div>
                  </div>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfesoresPage;
