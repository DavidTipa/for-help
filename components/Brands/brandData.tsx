import { Brand } from "@/types/brand";
import { FaBed, FaUtensils, FaBus, FaBook, FaTheaterMasks, FaHeartbeat } from "react-icons/fa";

const brandData: Brand[] = [
  {
    id: 0.1,
    name: "Alojamiento",
    href: "#",
    icon: FaBed,
  },
  {
    id: 0.2,
    name: "Comida",
    href: "#",
    icon: FaUtensils,
  },
  {
    id: 0.3,
    name: "Transporte",
    href: "#",
    icon: FaBus,
  },
  {
    id: 0.4,
    name: "Apoyo Académico",
    href: "#",
    icon: FaBook,
  },
  {
    id: 0.5,
    name: "Eventos y Cultura",
    href: "#",
    icon: FaTheaterMasks,
  },
  {
    id: 0.6,
    name: "Salud y Bienestar",
    href: "#",
    icon: FaHeartbeat,
  },
];

export default brandData;
