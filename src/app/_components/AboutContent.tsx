"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, // 👈 ensures animations trigger only once
    });
  }, []);

  return (
    <>
      <div className="py-[10px] md:py-[10px] lg:py-[20px] bg-white">
        <div className="container mx-auto">
          {/* Main About Section */}
          <div className="max-w-[1200px] mx-auto">
    

            {/* Company Story */}
            <div
              className="bg-gradient-to-r from-[#F8FAFB] to-[#EEF4F7] rounded-[25px] p-[40px] md:p-[60px] mb-[50px] md:mb-[60px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <h3 className="text-black font-semibold text-[28px] md:text-[32px] leading-[1.3] mb-[30px] text-center">
                Our Story
              </h3>
              <div className="max-w-[900px] mx-auto text-center">
                <p className="text-gray-700 text-[17px] md:text-[19px] leading-[1.8] mb-[20px]">
                  EnableNow was founded with a simple belief: technology should
                  enable, not complicate. We started as a team of passionate
                  developers and strategists who were frustrated by
                  overcomplicated solutions that didn't deliver real business
                  value.
                </p>
                <p className="text-gray-700 text-[17px] md:text-[19px] leading-[1.8]">
                  Today, we're proud to be the trusted technology partner for
                  businesses ready to embrace digital transformation with
                  confidence and clarity.
                </p>
              </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="grid gap-[40px] md:gap-[50px] grid-cols-1 lg:grid-cols-2 mb-[60px]">
              {/* Left - Team & Culture */}
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                <h3 className="text-[#007BA8] font-semibold text-[24px] md:text-[28px] leading-[1.3] mb-[20px]">
                  Our Team & Culture
                </h3>
                <p className="text-gray-700 text-[16px] md:text-[18px] leading-[1.7] mb-[15px]">
                  We're a diverse team of problem-solvers, innovators, and
                  strategic thinkers. Our collaborative culture encourages
                  creative solutions while maintaining the highest standards of
                  quality and security.
                </p>
                <p className="text-gray-700 text-[16px] md:text-[18px] leading-[1.7]">
                  Every team member brings unique expertise, from full-stack
                  development to enterprise architecture, ensuring comprehensive
                  solutions for complex challenges.
                </p>
              </div>

              {/* Right - How We Work */}
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <h3 className="text-[#007BA8] font-semibold text-[24px] md:text-[28px] leading-[1.3] mb-[20px]">
                  How We Work
                </h3>
                <div className="space-y-[15px]">
                  <div className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] bg-[#007BA8] rounded-full mt-[6px] flex-shrink-0"></div>
                    <p className="text-gray-700 text-[16px] leading-[1.6]">
                      <strong>Discovery First:</strong> We understand your
                      business before we write a single line of code
                    </p>
                  </div>
                  <div className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] bg-[#007BA8] rounded-full mt-[6px] flex-shrink-0"></div>
                    <p className="text-gray-700 text-[16px] leading-[1.6]">
                      <strong>Agile Delivery:</strong> Regular updates,
                      transparent communication, and iterative improvements
                    </p>
                  </div>
                  <div className="flex items-start gap-[12px]">
                    <div className="w-[8px] h-[8px] bg-[#007BA8] rounded-full mt-[6px] flex-shrink-0"></div>
                    <p className="text-gray-700 text-[16px] leading-[1.6]">
                      <strong>Ongoing Partnership:</strong> Support doesn't end
                      at deployment—we grow with your business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="bg-[#007BA8] rounded-[25px] p-[40px] md:p-[60px] mb-[60px] text-white">
              <h3
                className="text-center font-semibold text-[28px] md:text-[32px] leading-[1.3] mb-[40px] md:mb-[50px]"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                What Drives Us
              </h3>

              <div className="grid gap-[30px] md:gap-[40px] grid-cols-1 md:grid-cols-3">
                {/* Innovation */}
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  <h4 className="font-semibold text-[20px] md:text-[22px] mb-[15px]">
                    Continuous Learning
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[1.6] opacity-95">
                    Technology evolves rapidly. We stay ahead by continuously
                    learning, adapting, and mastering new tools and
                    methodologies.
                  </p>
                </div>

                {/* Excellence */}
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <h4 className="font-semibold text-[20px] md:text-[22px] mb-[15px]">
                    Client Success
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[1.6] opacity-95">
                    Your success is our success. We measure our achievements by
                    the measurable impact we create for your business.
                  </p>
                </div>

                {/* Partnership */}
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  <h4 className="font-semibold text-[20px] md:text-[22px] mb-[15px]">
                    Transparency
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[1.6] opacity-95">
                    Open communication, honest timelines, and clear expectations.
                    No surprises, just results you can count on.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="text-center">
              <h3
                className="text-black font-semibold text-[28px] md:text-[32px] leading-[1.3] mb-[30px]"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="500"
              >
                Why Partner With Us?
              </h3>

              <div className="grid gap-[25px] md:gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1000px] mx-auto">
                <div
                  className="bg-white rounded-[15px] p-[25px] shadow-md border border-[#F0F0F0]"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                >
                  <h4 className="text-[#007BA8] font-semibold text-[18px] mb-[10px]">
                    Proven Track Record
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-[1.5]">
                    50+ successful projects across diverse industries
                  </p>
                </div>

                <div
                  className="bg-white rounded-[15px] p-[25px] shadow-md border border-[#F0F0F0]"
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  data-aos-duration="500"
                >
                  <h4 className="text-[#007BA8] font-semibold text-[18px] mb-[10px]">
                    Full-Stack Expertise
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-[1.5]">
                    End-to-end solutions from concept to deployment
                  </p>
                </div>

                <div
                  className="bg-white rounded-[15px] p-[25px] shadow-md border border-[#F0F0F0]"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                  data-aos-duration="500"
                >
                  <h4 className="text-[#007BA8] font-semibold text-[18px] mb-[10px]">
                    Security Focus
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-[1.5]">
                    Security and compliance built into every solution
                  </p>
                </div>

                <div
                  className="bg-white rounded-[15px] p-[25px] shadow-md border border-[#F0F0F0]"
                  data-aos="fade-up"
                  data-aos-delay="1300"
                  data-aos-duration="500"
                >
                  <h4 className="text-[#007BA8] font-semibold text-[18px] mb-[10px]">
                    Long-term Partnership
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-[1.5]">
                    Ongoing support and continuous optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
