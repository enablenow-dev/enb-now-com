"use client";

import React from "react";
import Image from "next/image";

interface BenefitItem {
  title: string;
  description: string;
  imageSrc: string;
}

// This component is deprecated. Use BenefitsSection instead.
// Keeping for backward compatibility until all references are updated.

const ServiceNowSPMBenefits: React.FC = () => {
  return (
    <section className="w-full bg-[#0a2540] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-8">
            Component Deprecated
          </h2>
          <p className="text-lg text-gray-100/90">
            This component has been replaced by BenefitsSection. Please use the new reusable component instead.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceNowSPMBenefits;
