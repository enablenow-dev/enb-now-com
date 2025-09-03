"use client";

import React from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesGridProps {
  title: string;
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ title, services }) => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-center text-2xl font-semibold mb-10">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="flex items-center justify-center bg-[#007ba8] hover:bg-[#006ba8] text-gray-50 w-80 font-semibold px-8 py-4 rounded-md transition duration-300"
          onClick={() => console.log("Let Us Talk clicked")}
        >
          LET US TALK
        </button>
      </div>
    </section>
  );
};

export default ServicesGrid;
