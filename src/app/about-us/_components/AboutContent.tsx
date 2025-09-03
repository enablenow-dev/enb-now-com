import Image from "next/image";

const AboutContent = () => {
  return (
    <>
      <div className="bg-gray-200 py-10 mb-10">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="max-w-[800px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h2 className="text-gray-500 font-semibold text-[26px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              About Us
            </h2>
          </div>
          {/* Vision and Mission Cards */}
          <div className="flex flex-wrap justify-center xl:gap-24 gap-12 lg:flex-row sm:flex-col">
            {/* Vision Card */}
            <div
              className="group flex flex-col bg-white rounded-[20px] p-[40px] hover:bg-[#007ba8] transition-all duration-400 ease-in-out shadow-lg border border-[#FAF4F4] mb-10 lg:w-[45%] sm:w-full min-h-[400px]"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center transition duration-400 mb-[15px]">
                <Image
                  src={"/images/vision.svg"}
                  alt={"image"}
                  width={"48"}
                  height={"48"}
                  className="inline-block fill-current stroke-current"
                />
              </div>

              <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px] group-hover:text-white">
                Vision
              </h3>
              <p className="text-black text-lg group-hover:text-white">
                Lead the way in championing our customers' mission success
                through innovation, security, and enhanced agility. <br /> We're
                dedicated to empowering and securing their goals, ensuring a
                future of shared accomplishments.
              </p>
            </div>


            {/* Mission Card */}
            <div
              className="group flex flex-col bg-white rounded-[20px] p-[40px] hover:bg-[#007ba8] transition-all hover:transition duration-400 ease-in-out shadow-lg border border-[#FAF4F4] mb-10 lg:w-[45%] sm:w-full min-h-[400px]"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center transition duration-400 mb-[15px]">
                <Image
                  src={"/images/mission.svg"}
                  alt={"image"}
                  width={"48"}
                  height={"48"}
                  className="inline-block fill-current stroke-current"
                />
              </div>

              <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px] group-hover:text-white">
                Mission
              </h3>
              <p className="text-black text-lg group-hover:text-white">
                Our mission is to empower businesses with value-driven
                solutions, cultivating resilience, high performance, and
                agility. Through forward-thinking approaches, we shape
                environments that foster excellence and growth, ensuring your
                sustained success.
              </p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default AboutContent;
