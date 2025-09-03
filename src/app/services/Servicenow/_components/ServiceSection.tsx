// components/ServiceSection.tsx
import Image from "next/image";
import React from "react";

interface ServiceSectionProps {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  imageSrc: string;
  imageAlt?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  heading,
  paragraph1,
  paragraph2,
  imageSrc,
  imageAlt = "Service image",
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <div>
        <h2 className="text-3xl md:text-4xl font-light text-[#003366] leading-snug">
          {heading}
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-800">
          {paragraph1}
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800">
          {paragraph2}
        </p>
      </div>

      {/* Right Side */}
      <div className="flex justify-center md:justify-end">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={350}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
