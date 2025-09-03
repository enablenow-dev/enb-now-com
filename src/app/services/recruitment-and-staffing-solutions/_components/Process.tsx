import Image from "next/image";

import assetImg from "/public/images/approach.png";

const Process = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto text-center">
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Our Process
            </h2>
          </div>

          <div
            className="space-y-[30px] lg:space-y-[40px] xl:ml-32"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <div className="flex space-x-[20px] rtl:space-x-reverse">
              <div className="pr-[0] xl:pr-[160px] xl:rtl:pr-0 xl:rtl:pl-[160px]">
                <p className="xl:text-lg ">
                Our approach stands out through its commitment to excellence at every stage. We prioritize understanding your business requirements to tailor our staffing solutions accordingly.
                The comprehensive consultations we offer ensure that you receive strategic guidance where necessary, fostering alignment with your business objectives. 
                Our candidate matchmaking process is powered by an extensive network, enabling us to present you with the ideal candidate who seamlessly integrates into your team. 
                What truly sets us apart is our rigorous screening and assessment process. 
                </p>
              </div>
            </div>
            
            <div className="relative xl:mr-36 xl:pt-[20px] ">
              <Image src={assetImg} alt="asset" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;