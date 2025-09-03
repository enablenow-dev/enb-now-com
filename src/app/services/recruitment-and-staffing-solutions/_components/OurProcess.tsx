import Image from "next/image";
import assetImg from "/public/images/Staffing-new.svg";

const OurProcess = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
            Maximizing Potential: Tailored Staffing and Recruitment Solutions
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
                    EnableNow offers complete
                    Recruitment Solutions to augment the ROI of our clients by
                    providing high-quality staffing solutions. We differentiate
                    ourselves by creating personalized solutions for
                    organizations by leveraging our domain expertise and domain
                    knowledge. Our diverse range of services is designed to
                    offer you tailor-made staffing solutions.
                    <br />
                    <br />
                    Our expertise in recruitment and staffing allows businesses
                    to redirect their focus towards client acquisition, freeing
                    them from the complexities of talent hunting.Let us handle the intricate process of finding the right candidates,
                    enabling your business to thrive and concentrate on what it does best.

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