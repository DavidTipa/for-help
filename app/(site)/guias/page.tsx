export default function GuiasUniversitarias() {
  const guias = [
    {
      titulo: "Pago de poliza",
      descripcion: "Paso a paso de como imprimir y pagar tu poliza",
      imagen: "/imagenes/salon.jpg",
      link: "/guias/salon"
    },
    {
      titulo: "Inscripcion de materias",
      descripcion: "Inscribe tus materias de manera correcta y sin duda.",
      imagen: "/imagenes/salon.jpg",
      link: "/guias/salon"
    },
    {
      titulo: "Reposición de credencial",
      descripcion: "Pasos y requisitos para reponer tu credencial BUAP.",
      imagen: "/imagenes/credencial.jpg",
      link: "/guias/credencial"
    },
    {
      titulo: "Cómo usar el Lobo Bus",
      descripcion: "Horarios, rutas y tips para aprovechar el transporte universitario.",
      imagen: "/imagenes/lobobus.jpg",
      link: "/guias/lobobus"
    },
    {
      titulo: "Identificar tu salón rápidamente",
      descripcion: "Ubica tu salón sin perderte en la BUAP.",
      imagen: "/imagenes/salon.jpg",
      link: "/guias/salon"
    },
    {
      titulo: "Convocatorias o Eventos interesantes",
      descripcion: "Mantente al tanto de lo que sucede en la BUAP y no te pierdas de nada",
      imagen: "/imagenes/salon.jpg",
      link: "/guias/salon"
    }
  ];

  return (
    <section className="pt-24 p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Guías Universitarias BUAP
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {guias.map((guia, index) => (
          <a
            key={index}
            href={guia.link}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              src={guia.imagen}
              alt={guia.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{guia.titulo}</h2>
              <p className="text-gray-600 mt-2">{guia.descripcion}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
