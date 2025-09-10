"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 350, // faster animations
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden px-4 ">
      <div className="py-10 md:py-16 lg:py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 md:mb-20">
            <h1
              className="text-black font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6"
              data-aos="fade-up"
            >
              About EnableNow
            </h1>
            <p
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Transforming businesses through innovative technology solutions that enable growth,
              disrupt conventions, and create lasting impact.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 overflow-hidden">
            <div
              className="bg-gradient-to-br from-[#F8FAFB] to-[#EEF4F7] rounded-3xl p-8 md:p-12 border-l-8 border-[#007BA8]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#007BA8]">
                Our Mission
              </h2>
              {/* <p className="text-gray-700 text-lg leading-relaxed mb-4">
             EnableNow was founded on trust, integrity, and honesty to empower individuals, support communities, and promote human development.
              </p> */}
              <p className="text-gray-600 text-base leading-relaxed">
              Built on wisdom, insight, and purposeful innovation—and guided by unwavering integrity and a commitment to excellence—our mission is to deliver intelligent, trustworthy solutions that align with our customers’ goals, elevate mission outcomes, and foster lasting partnerships.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-[#F8FAFB] to-[#EEF4F7] rounded-3xl p-8 md:p-12 border-l-8 border-[#007BA8]"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#007BA8]">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
             To lead with wisdom, insight, and trust as a transformation partner—empowering our customers to succeed in their missions through innovative solutions grounded in purposeful design and delivered with unwavering integrity.
              </p>
              {/* <p className="text-gray-600 text-base leading-relaxed">
             By aligning people, processes, and technology, we simplify complexity and design sustainable solutions that fuel growth and efficiency.
              </p> */}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20 overflow-hidden">
            <h2
              className="text-center text-black font-bold text-3xl md:text-4xl mb-12"
              data-aos="fade-up"
            >
              What Drives Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  letter: "E",
                  title: "Enable",
                  desc: "Empowering businesses with cutting-edge tools and strategic insights to unlock their digital potential and drive sustainable growth.",
                },
                {
                  letter: "D",
                  title: "Disrupt",
                  desc: "Challenging industry conventions through bold innovation and creative problem-solving that reshapes possibilities.",
                },
                {
                  letter: "T",
                  title: "Transform",
                  desc: "Guiding organizations through comprehensive digital transformation journeys that deliver measurable results and lasting impact.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center group"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="w-16 h-16 bg-[#007BA8] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{item.letter}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#007BA8] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story & Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20 overflow-hidden">
            <div className="lg:col-span-3" data-aos="fade-right" data-aos-delay="100">
              <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                 EnableNow was founded on the principles of trust, integrity, and honesty, with a mission to empower individuals, support communities, and promote human development. Our journey began with a simple goal: to deliver technology and security solutions that truly make a difference.
                </p>
                <p className="text-base leading-relaxed">
                  From a passionate team with a vision for innovation, security, and agility, we have grown into a trusted partner for organizations across industries. Today, we help enterprises digitize, modernize, and transform by aligning people, processes, and technology to create resilient, high-performing, and future-ready businesses.
                </p>
                <div className="bg-[#F8FAFB] rounded-2xl p-6 border-l-4 border-[#007BA8]">
                  <p className="text-sm font-medium text-[#007BA8] mb-2">Our Achievement</p>
                  <p className="text-base text-gray-700">
                    50+ successful digital transformations across various industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-[#007BA8] mb-6">Our Methodology</h3>
              <div className="space-y-5">
                {[
                  { phase: "Discover", desc: "Deep-dive analysis of your business needs and challenges" },
                  { phase: "Design", desc: "Architecting scalable, security-first solutions" },
                  { phase: "Develop", desc: "Agile development with continuous feedback loops" },
                  { phase: "Deploy", desc: "Seamless implementation with minimal disruption" },
                  { phase: "Optimize", desc: "Ongoing support and continuous improvement" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#007BA8] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.phase}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team & Culture */}
          <div className="bg-gradient-to-r from-[#007BA8] to-[#005f7f] rounded-3xl p-10 md:p-14 mb-20 text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right" data-aos-delay="100">
                <h2 className="text-3xl font-bold mb-6">Our Team & Culture</h2>
                <p className="text-lg leading-relaxed opacity-95 mb-4">
                  We're a diverse collective of problem-solvers, innovators, and strategic thinkers
                  united by a passion for excellence and continuous learning.
                </p>
                <p className="text-base leading-relaxed opacity-90">
                  Our collaborative culture encourages creative solutions while maintaining the
                  highest standards of quality, security, and client satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="200">
                {[
                  { number: "10+", label: "ServiceNow Projects" },
                  { number: "15+", label: "Certified Experts" },
                  { number: "25+", label: "Softwares Deployed" },
                  { number: "95%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="text-center overflow-hidden pb-20">
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-12"
              data-aos="fade-up"
            >
              Why Choose EnableNow?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "ServiceNow Expertise",
                  desc: "Certified ServiceNow professionals with deep platform knowledge",
                  icon: "⚙️",
                },
                {
                  title: "Security-First",
                  desc: "Cybersecurity integrated into every ServiceNow implementation",
                  icon: "🛡️",
                },
                {
                  title: "Custom Development",
                  desc: "Bespoke applications and integrations tailored to your needs",
                  icon: "💻",
                },
                {
                  title: "End-to-End Support",
                  desc: "From initial setup to ongoing optimization and security monitoring",
                  icon: "🤝",
                },
              ].map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#007BA8] mb-3">{advantage.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{advantage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
