import React from "react";



interface PortfolioManagementExcellenceProps {
  content: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    imageSrc: string;
  };
}

export const PortfolioManagementExcellence: React.FC<PortfolioManagementExcellenceProps> = ({ content }) => {


  return (
    <section className="w-full bg-gray-50 py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8 pr-0 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                {content.title}
              </h1>
            </div>
                        
            <div className="space-y-6 text-gray-700">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                {content.paragraph1}
              </p>
                            
              <p className="text-lg md:text-xl leading-relaxed font-light">
                {content.paragraph2}
              </p>
            </div>
          </div>
                    
          {/* Right Image */}
          <div className="lg:col-span-1 relative">
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={content.imageSrc}
                alt={`Visual representation for ${content.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
            
    </section>
  );
};
