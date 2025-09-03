import Image from "next/image";

import assetImg from "/public/images/software-development-services/Devops-infographic.svg";

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
                DevSecOps isn't just a buzzword for us—it's a game-changer. By embracing this methodology, EnableNow is empowered to automate critical segments of our processes, ensuring efficiency, speed, and reliability in the delivery of solutions.
                 This commitment to automation extends beyond just saving time; it's about creating a robust foundation that allows us to monitor and maintain outcomes with precision and effectiveness.
                 Our approach thrives on collaboration, as our development, security, and operations teams work in tandem to create innovative solutions tailored for enterprise and government clients. 
                 We implement robust CI/CD pipelines to automate testing, deployment, and security checks.  
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