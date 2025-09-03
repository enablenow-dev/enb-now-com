"use client";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

const HeroBanner = () => {
  return (
    <>
      <div className="relative bg-[url('/herobanner.jpeg')] pt-[50px] pb-[150px] md:pt-[150px] lg:pt-[80px] bg-no-repeat bg-cover bg-center h-[600px]">
        {/* Darker overlay for better text visibility */}
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full">
          {" "}
        </div>
        <div className="container mx-auto text-center">
          <div className="relative max-w-[1020px] w-full mx-auto sm:mt-10 md:mt-10 lg:mt-20 max-6xl:mt-52 ">
            <h1
              className="text-white text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] 2xl:leading-[80px] font-semibold mb-[20px] sm:mb-[30px] drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              Enable , Disrupt, Transform
            </h1>

            <p
              className="text-white text-[16px] md:text-[20px] font-medium mb-[30px] drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              EnableNow empowers you to navigate and thrive in today's intricate
              business landscape with unmatched expertise and innovation.
            </p>

            <Link
              href="/contact-us/"
              className="bg-[#007BA8] text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:text-[15px] shadow-lg hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              let's talk{" "}
              <ArrowRight2
                className="inline-block relative -top-[2px]"
                size={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;