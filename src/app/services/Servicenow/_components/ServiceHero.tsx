// components/ServiceHero.tsx
import Image from "next/image";
import React from "react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center" style={{ zIndex: 1 }}>
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-white/80" />
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-3xl md:text-5xl font-light">{title}</h1>
        <p className="mt-4 text-lg md:text-xl font-light">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceHero;
