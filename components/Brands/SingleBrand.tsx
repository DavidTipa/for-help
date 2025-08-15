import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Brand = {
  id: number;
  name: string;
  href: string;
  icon: IconType;
};

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, name, id, icon: Icon } = brand;

  return (
    <motion.a
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: id }}
      viewport={{ once: true }}
      href={href}
      className="flex flex-col items-center justify-center text-center gap-2 p-4 rounded-lg hover:bg-primary/10 transition-colors"
    >
      <Icon className="text-5xl text-primary dark:text-white transition-colors duration-300" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {name}
      </span>
    </motion.a>
  );
};

export default SingleBrand;
