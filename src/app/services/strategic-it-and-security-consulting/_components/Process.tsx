import Image from "next/image";
import assetImg from "/public/images/strategic-it-and-security-consulting/Security-infographic.svg";

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
                    Embarking on our comprehensive IT and Security Strategy
                    involves a systematic journey to fortify your organization's
                    digital resilience. Our process unfolds in a strategic
                    timeline, commencing with a thorough exploration of your
                    business requirements, current needs, and future
                    aspirations. We meticulously document these findings to
                    conduct a comprehensive analysis, <br /> identifying any gaps in
                    your current environment. Leveraging both institutional knowledge and cutting-edge tools, 
                    we then formulate a customized plan tailored to your unique landscape.
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
