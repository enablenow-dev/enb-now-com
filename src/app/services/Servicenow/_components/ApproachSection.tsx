"use client";
import React from "react";
import Link from "next/link";

interface ApproachItem {
  icon: React.ReactNode;
  title: string;
  paragraphs: string[];
}

interface ApproachSectionProps {
  heading: string;
  description: string;
  items: ApproachItem[];
}

const ApproachSection: React.FC<ApproachSectionProps> = ({
  heading,
  description,
  items,
}) => {
  return (
    <section className="bg-white py-24 px-6 md:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8 leading-tight">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-900 leading-relaxed max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-3 gap-x-16 gap-y-20">
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center md:justify-start mb-6">
                <div className="w-14 h-14">{item.icon}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-6">
                {item.title}
              </h3>
              {item.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-gray-900 leading-[1.8] mb-5"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center max-w-4xl mx-auto mt-16">
        <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-6">
          EnableNow's ServiceNow's service delivery approach is grounded in
          quality, reliability, consistency, and best practices. By embracing
          these principles and adopting a structured approach to implementation,
          we have effectively designed, deployed, and supported ServiceNow
          solutions, driving business value, innovation, and success.
        </p>

      <Link href="/contact-us" >
        <button
          className="bg-[#007ba8] hover:bg-[#006ba8] text-gray-50  w-80 font-semibold px-8 py-4 rounded-md transition duration-300"
          onClick={() => console.log("Let Us Talk clicked")}
        >
          LET US TALK
        </button>
      </Link>
      </div>
    </section>
  );
};

export default ApproachSection;
