import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buscar Rentas - For Help",

  // other metadata
  description:
    "Encuentra el lugar perfecto para rentar cerca de tu universidad",
};

export default function DocsPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="shadow-solid-4 dark:border-strokedark dark:bg-blacksection sticky top-[74px] rounded-lg border border-white p-4 transition-all">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Buscar Rentas Universitarias</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Encuentra el lugar perfecto para vivir durante tus estudios
                  universitarios. Explora opciones de renta cerca de tu campus,
                  con precios accesibles para estudiantes.
                </p>

                {/* Barra de búsqueda */}
                <div className="mt-8 mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar por ubicación, precio o tipo de propiedad..."
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
                </div>

                {/* Filtros rápidos */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    Filtros Rápidos
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-primary/10 text-primary hover:bg-primary rounded-full px-4 py-2 text-sm transition-all duration-300 hover:text-white">
                      Cerca del Campus
                    </button>
                    <button className="bg-primary/10 text-primary hover:bg-primary rounded-full px-4 py-2 text-sm transition-all duration-300 hover:text-white">
                      Hasta $5,000
                    </button>
                    <button className="bg-primary/10 text-primary hover:bg-primary rounded-full px-4 py-2 text-sm transition-all duration-300 hover:text-white">
                      Amueblado
                    </button>
                    <button className="bg-primary/10 text-primary hover:bg-primary rounded-full px-4 py-2 text-sm transition-all duration-300 hover:text-white">
                      Con Internet
                    </button>
                    <button className="bg-primary/10 text-primary hover:bg-primary rounded-full px-4 py-2 text-sm transition-all duration-300 hover:text-white">
                      Para Estudiantes
                    </button>
                  </div>
                </div>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  ¿Tienes una propiedad para rentar a estudiantes?{" "}
                  <b>
                    <a href="#" className="text-primary hover:underline">
                      Publica tu anuncio aquí
                    </a>
                  </b>{" "}
                  y conecta con estudiantes que buscan un lugar cerca de la
                  universidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
