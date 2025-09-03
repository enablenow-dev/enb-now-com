import React from 'react';
import ServiceCard from './ServiceCard';
import { ConsiderationItem } from '../data/servicesData';
import Link from 'next/link';

interface ConsiderationsSectionProps {
  title: string;
  subtitle?: string;
  considerations: ConsiderationItem[];
}

function ConsiderationsSection({ 
  title, 
  subtitle = "If you are ready to start your ServiceNow journey to enhance your operations and ensure business alignment, it is crucial to plan carefully. Keep the following in mind:", 
  considerations 
}: ConsiderationsSectionProps) {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-figtree">
            {subtitle}
          </p>
        </div>

        {/* Centered, wrapping layout that keeps last row centered automatically */}
        <div className="flex flex-wrap justify-center gap-8">
          {considerations.map((item, idx) => (
            <div key={idx} className="w-full max-w-[320px]">
              <ServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
       <Link href="/contact-us" >
        <button
          className="bg-[#007ba8] hover:bg-[#006ba8] text-gray-50 w-80 font-semibold px-8 py-4 rounded-md transition duration-300"
          onClick={() => console.log("Let Us Talk clicked")}
        >
          LET'S TALK
        </button>
       </Link>
      </div>
    </section>
  );
}

export default ConsiderationsSection;
