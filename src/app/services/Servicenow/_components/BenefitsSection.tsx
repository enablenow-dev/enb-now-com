"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BenefitItem {
  title: string;
  description: string;
  imageSrc: string;
}

interface BenefitsSectionProps {
  title: string;
  benefits: BenefitItem[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ title, benefits }) => {
  return (
    <section className="w-full bg-[#0a2540] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-center mb-12">
          {title}
        </h2>

        <div className="space-y-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`grid gap-8 md:grid-cols-2 items-center ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={1000}
                  height={650}
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-semibold font-outfit mb-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-gray-100/90 font-figtree leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
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
      </div>
    </section>
  );
};

export default BenefitsSection;
