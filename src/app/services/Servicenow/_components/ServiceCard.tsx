"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string; // image path
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div 
      className="w-full h-64" 
      style={{ perspective: '1000px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front of the card */}
        <div 
          className="absolute inset-0 w-full h-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image 
            src={icon}
            alt={title}
            width={50}
            height={50}
            className="mb-4"
          />
          <h3 className="text-lg font-medium mb-4">{title}</h3>
        </div>

        {/* Back of the card */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#007ba8] text-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-md"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="text-sm leading-relaxed text-gray-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;