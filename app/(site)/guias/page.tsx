export default function UniversityGuide() {
  const guides = [
    {
      title: "Inscripción de materias",
      description: "Inscribe tus materias de forma correcta y sin complicaciones.",
      image: "/images/guias/materias.png"
    },
    {
      title: "Reposición de Credencial",
      description: "Solicita una nueva credencial de estudiante en caso de pérdida o daño.",
      image: "/images/guias/credencial.png"
    },
    {
      title: "Como descargar tu Krdex simple",
      description: "Como descargar y imprimir tu Kardex simple",
      image: "/images/guias/kardex.jpg"
    },
    {
      title: "Como descargar tu Constancia de Estudios",
      description: "Como descargar y imprimir tu Constancia",
      image: "/images/guias/kardex.jpg"
    },
    {
      title: "Cómo usar el Lobo Bus",
      description: "Guía para utilizar el transporte universitario de manera eficiente.",
      image: "/images/guias/lobobus.jpg"
    },
    {
      title: "Cómo usar la Lobo Bici",
      description: "Utiliza de forma correcta las bicicletas de la universidad.",
      image: "/images/guias/Lobobici.png"
    },
    {
      title: "Becas BUAP",
      description: "Enterate y registarte de las becas en BUAP.",
      image: "/images/guias/becas.png"
    },
    {
      title: "Identificar tu salón rápidamente",
      description: "Trucos y consejos para encontrar tu salón sin perderte.",
      image: "/images/guias/salon.png"
    },
        {
      title: "Convocatorias y eventos",
      description: "Entérate de las últimas convocatorias y actividades BUAP.",
      image: "/images/guias/eventos.jpg"
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mt-24 mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 drop-shadow-lg tracking-wide">
          Guía Universitaria BUAP
        </h2>
        <div className="space-y-6">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex items-center gap-6"
            >
              <img
                src={guide.image}
                alt={guide.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{guide.title}</h3>
                <p className="text-gray-600 mt-2">{guide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
