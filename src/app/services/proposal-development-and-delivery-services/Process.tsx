import Image from "next/image";

import assetImg from "/public/images/proposal-development-and-management-services/proposal-infographic.png";

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
                Most of us the GovCon folks have read the RFPs, RFIs, IDIQs, BPAs and other requirement documents multiple times, but sometimes, 
                we find it challenging to decipher the messages buried in the long-drawn paragraphs with no ending. Yes, we have been there and done it more times 
                than we can count. You may have written many responses before but struggle to leverage all that information to create a more compelling proposal. 
                Our team at EnableNow views the proposal development as a thrilling journey, engaging readers with a narrative that unfolds the stages like chapters in a captivating story. 
                </p>
              </div>
            </div>
            
            <div className="relative xl:mr-28 xl:pt-[20px] ">
              <Image src={assetImg} alt="asset" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;