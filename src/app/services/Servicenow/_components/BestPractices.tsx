import React from 'react';
import Image from 'next/image';
import { Practice } from '../data/servicesData';
import Link from 'next/link';

interface BestPracticesProps {
  title?: string;
  subtitle?: string;
  practices: Practice[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const BestPractices: React.FC<BestPracticesProps> = ({
  title = "Best Practices for Implementation",
  subtitle = "To successfully implement this solution, consider these best practices",
  practices,
  ctaText = "Let's Talk",
  onCtaClick = () => console.log("CTA clicked")
}) => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-4 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600 font-figtree max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Using flex-wrap with justify-center for perfect last row alignment */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 lg:gap-x-16">
          {practices.map(({ id, icon, title, description }) => (
            <div 
              key={id} 
              className="w-full max-w-[320px] flex flex-col items-center text-center px-4"
            >
              {/* Icon with subtle accent */}
              <div className="mb-6 p-2 text-[#007ba8]">
                <Image
                  src={icon}
                  alt={title}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
              </div>
              
              {/* Title with accent underline */}
              <h3 className="text-2xl font-semibold font-outfit text-gray-900 mb-4 relative pb-2">
                {title}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#007ba8]"></span>
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed font-figtree">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {ctaText && (
          <div className="flex justify-center mt-20">
          <Link href="/contact-us">
            <button
              className="relative overflow-hidden text-[#007ba8] hover:text-white font-medium px-8 py-3 rounded-md transition-all duration-300 border-2 border-[#007ba8] hover:bg-[#007ba8] focus:outline-none focus:ring-2 focus:ring-[#007ba8] focus:ring-opacity-50 min-w-[200px] text-lg group"
              onClick={onCtaClick}
            >
              <span className="relative z-10">{ctaText}</span>
              <span className="absolute inset-0 bg-[#007ba8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-[4px] z-0"></span>
            </button>
          </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestPractices;