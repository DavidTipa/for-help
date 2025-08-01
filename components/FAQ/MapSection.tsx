"use client";
import { useState } from "react";
import Image from "next/image";

// Datos de ejemplo para las rutas
const sampleRoutes = [
  {
    id: 1,
    name: "Ruta Express",
    description: "La ruta más rápida con menos paradas",
    duration: "15 min",
    stops: 3,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Ruta Económica",
    description: "La opción más económica",
    duration: "25 min",
    stops: 8,
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Ruta Panorámica",
    description: "Pasa por los puntos más emblemáticos",
    duration: "35 min",
    stops: 5,
    color: "bg-purple-500"
  }
];

const MapSection = () => {
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);
  const [showRoutes, setShowRoutes] = useState(false);

  const handleCurrentLocation = () => {
    setCurrentLocation("Edificio Principal BUAP");
    setShowRoutes(false);
    // Aquí iría la lógica real para obtener la ubicación GPS
  };

  const handleDestination = () => {
    setDestination("Facultad de Ciencias de la Computación");
    setShowRoutes(false);
    // Aquí iría la lógica para seleccionar un destino
  };

  const calculateRoutes = () => {
    if (currentLocation && destination) {
      setShowRoutes(true);
    } else {
      alert("Por favor selecciona tanto tu ubicación como tu destino");
    }
  };

  return (
    <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection p-4">
      {/* Imagen ilustrativa del mapa */}
      <div className="relative h-96 w-full overflow-hidden rounded-md">
        <Image
          src="/images/map/map-placeholder.jpg"
          alt="Mapa de la BUAP y alrededores"
          fill
          className="object-cover"
        />
        
        {/* Estado de los botones */}
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded-md">
          {currentLocation && <p>📍 <span className="font-semibold">Ubicación:</span> {currentLocation}</p>}
          {destination && <p>🏁 <span className="font-semibold">Destino:</span> {destination}</p>}
          {!currentLocation && !destination && (
            <p>Selecciona tu ubicación y destino</p>
          )}
        </div>
      </div>

      {/* Botones de acción */}
      <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
        <button
          onClick={handleCurrentLocation}
          className="flex items-center justify-center gap-2 rounded bg-primary px-4 py-3 font-medium text-white hover:bg-opacity-90 flex-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Ubicación Actual
        </button>
        
        <button
          onClick={handleDestination}
          className="flex items-center justify-center gap-2 rounded bg-secondary px-4 py-3 font-medium text-white hover:bg-opacity-90 flex-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Seleccionar Destino
        </button>
      </div>

      {/* Botón para calcular rutas */}
      {(currentLocation && destination) && (
        <div className="mt-4">
          <button
            onClick={calculateRoutes}
            className="w-full rounded bg-orange-500 px-4 py-3 font-medium text-white hover:bg-orange-600"
          >
            Calcular Mejores Rutas
          </button>
        </div>
      )}

      {/* Sección de rutas recomendadas */}
      {showRoutes && (
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-bold text-black dark:text-white">
            Rutas recomendadas de {currentLocation} a {destination}
          </h3>
          
          <div className="grid gap-4 md:grid-cols-3">
            {sampleRoutes.map((route) => (
              <div key={route.id} className="rounded-lg border border-stroke p-4 dark:border-strokedark">
                <div className={`${route.color} mb-3 h-2 w-full rounded-full`}></div>
                <h4 className="text-lg font-semibold">{route.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{route.description}</p>
                <div className="mt-3 flex justify-between text-sm">
                  <span>⏱️ {route.duration}</span>
                  <span>🛑 {route.stops} paradas</span>
                </div>
                <button className="mt-3 w-full rounded bg-blue-100 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                  Ver detalles
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapSection;