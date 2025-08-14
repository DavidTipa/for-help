import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top rounded-lg border-2 border-red-600 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
    >
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-600">
        <Image src={icon} width={50} height={50} alt={title} />
      </div>
      <h3 className="mt-6 mb-3 text-xl font-bold text-red-700">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default SingleFeature;
