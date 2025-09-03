import Image from "next/image";

import assetImg from "/public/images/Software-new.svg";

const OurProcess = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
            Advanced Software Solutions using a Customer Centric Design
            </h2>
          </div>

          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div
              className="space-y-[30px] lg:space-y-[40px]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="flex space-x-[10px] rtl:space-x-reverse">
                <div className="pr-[0] xl:pr-[160px] xl:rtl:pr-0 xl:rtl:pl-[160px]">
                  <p className="xl:text-xl">
                    At EnableNow, we don't just develop software. We
                    believe in adaptable, efficient, and future-ready solutions.
                    With our expertise, we ensure your journey into the digital
                    future is not only smooth but also sets the pace for what
                    comes next. Guided by the principles of Agile, DevSecOps,
                    and HCD, we create custom applications that are not just
                    software but living solutions, adapting and evolving to meet
                    your unique needs. 
                    <br />
                    <br />
                    With each line of code, we are your
                    partners in progress, harmonizing technology and innovation,
                    ensuring your business is not just keeping pace but leading
                    the way in the dynamic landscape of today and tomorrow.

                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image src={assetImg} alt="asset" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;