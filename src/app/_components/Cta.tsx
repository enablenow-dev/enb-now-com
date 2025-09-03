import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

const Cta = () => {
  return (
    <>
      <div className="container mx-auto py-20">
        <div
          className="bg-[#F2F2F8] rounded-[20px] py-[50px] md:py-[90px] lg:py-[60px] xl:py-[90px] px-[30px] md:px-[90px] lg:px-[60px] xl:px-[110px]"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div>
              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[480px]">
                Start the Transformation Journey 
                Now and turn your Aspirations into
                Reality!
              </h2>
            </div>

            <div className="lg:text-end lg:rtl:text-right lg:max-w-[412px] lg:ml-auto lg:rtl:ml-0 lg:rtl:mr-auto">
              <p className="mb-[10px] font-semibold text-2xl">
                Ready to redefine success? <br/>
              </p>
              <p>
                Get in touch for bespoke solutions that
                transform your vision into a digital reality.
              </p>

              <h4 className="text-black font-semibold text-[18px] lg:text-[22px] mb-[30px]">
                <a
                  href="mailto:contact@enablenow.co.in"
                  className="underline hover:no-underline text-[#007BA8] hover:text-[#007BA8]"
                >
                  contact@enablenow.com
                </a>
              </h4>

              <Link
                href="/contact-us/"
                className="bg-gray-500 text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#007BA8]"
              >
                Get in Touch{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
