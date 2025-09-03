"use client";
import Image from "next/image";

import about_image from '/public/images/About -Us-new.svg'
const AboutContent = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px] ">
        <div className="container mx-auto">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div className="lg:pr-[60px] rtl:lg:pr-0 rtl:lg:pl-[60px] xl:pr-[120px] rtl:xl:pr-0 rtl:xl:pl-[120px]">
              <div className="mb-[20px] md:mb-[20px] lg:md:mb-[50px]">
                <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                  About Us
                </h2>
                <p className="text-black xl:text-xl">
                  At EnableNow, we are the architects of innovation. We're a
                  vibrant team of technology and business enthusiasts committed
                  to pushing the boundaries of what's achievable. Our passion
                  lies in crafting value-driven solutions, leveraging the power
                  of the technology, and orchestrating digital transformations.
                  With a history of excellence and a forward-thinking approach,
                  we stand at the forefront of providing solutions that are not
                  only value-driven but also sustainable.
                </p>
                <p className="text-black mt-[10px] xl:text-xl">
                    We are the crafters who see technology as a tool to
                    transform businesses. At EnableNow, we specialize in
                    developing solutions that empower organizations to excel.
                    Our journey is defined by a commitment to security,
                    compliance, and innovation. Join us in shaping a future
                    where possibilities are limitless.
                  </p>
              </div>
            </div>
            <Image alt="about_image"
             src={about_image}
             className="rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
