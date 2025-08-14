export default function UniversityGuide() {
  const guides = [
    {
      title: "Guías Académicas",
      description: "Aquí encontrarás guías claras para realizar tramites escenciales y simples, todo explicado paso a paso.",
      image: "/images/guias/kardex.jpg"
    },
    {
      title: "Guías de Vida Universitaria ",
      description: "Aquí encontrarás guías con recursos para adaptarte a la BUAP",
      image: "/images/guias/adaptacion.jpg"
    },
    {
      title: "Guías de servicios y Apoyos",
      description: "Aquí encontrarás guías sobre becas,orientación psicológica y otros servicios que la universidad ofrece.",
      image: "/images/guias/becas.png"
    },
    {
      title: "Eventos",
      description: "Aquí encontrarás los eventos mas importantes y actualizaciones",
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
