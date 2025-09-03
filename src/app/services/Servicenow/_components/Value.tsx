"use client";
import React from 'react';
import Link from 'next/link';

const Value: React.FC = () => {
  return (
    <div className="bg-white pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-6 lg:pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=faces"
                alt="Team collaboration"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[470px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            {/* Value heading */}
            <div className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Value
            </div>
            
            {/* Description text */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                EnableNow specializes in 
                delivering transformative solutions that revolutionize 
                businesses' operations. Our team of architects and experts 
                harnesses the power of ServiceNow artificial intelligence and 
                digital workflow automation to transform your business into an 
                efficient, effective, and resilient enterprise. Our expertise using 
                innovative platform capabilities and tools streamline processes, 
                improve collaboration, boost productivity, and empower you to 
                deliver exceptional customer and employee experiences.
              </p>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Partner with us to revolutionize your processes and propel your 
                business forward faster with ServiceNow.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-2 md:pt-4">
              <Link href="/contact-us">
                <button
                  className="bg-[#007ba8] hover:bg-[#006ba8] text-gray-50 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-md transition duration-300 text-sm md:text-base"
                  onClick={() => console.log('Let Us Talk clicked')}
                >
                  LET'S TALK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;