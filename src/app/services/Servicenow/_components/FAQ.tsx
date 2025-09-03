"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  imageSrc: string;
}

interface FAQProps {
  faqs: FaqItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [heights, setHeights] = useState<{ [key: string]: number }>({});
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const newHeights: { [key: string]: number } = {};
    Object.keys(contentRefs.current).forEach((key) => {
      const element = contentRefs.current[key];
      if (element) {
        newHeights[key] = element.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [faqs]); // Added faqs dependency

  return (
    <section className="w-full bg-[#1e3a5f] min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
            Our Approach to ServiceNow SPM Delivery
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-5xl mx-auto leading-relaxed">
            Our method for implementing ServiceNow Strategic Portfolio
            Management (SPM) integrates industry knowledge, meticulous attention
            to detail, and a strong focus on customer needs through the
            ServiceNow NowCreate methodology. We work together with you to
            guarantee that ServiceNow SPM aligns with your business objectives
            and produces actual results. Here is our approach
          </p>
        </div>

        <div className="space-y-1">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-sm border-b border-white/10"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left p-8 hover:bg-white/5 transition-all duration-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${item.id}`}
                >
                  <h3 className="text-xl md:text-2xl font-light text-white flex-1">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-white/70 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    height: isOpen ? `${heights[item.id] || "auto"}px` : "0px",
                  }}
                >
                  <div
                    ref={(el) => {
                      if (el) contentRefs.current[item.id] = el;
                    }}
                    className="px-8 pb-8"
                  >
                    <div className="bg-[#0f2537] rounded-lg p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <p className="text-base md:text-lg leading-relaxed text-white/90 font-light">
                            {item.answer}
                          </p>
                        </div>
                        <div className="relative w-full h-[220px] md:h-[280px] rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={item.imageSrc}
                            alt={item.question}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-16">
          <button
            className="bg-[#007ba8] hover:bg-[#006494] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            onClick={() => console.log("Contact: LET'S TALK")}
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;