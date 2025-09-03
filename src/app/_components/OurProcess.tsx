import Image from "next/image";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

import assetImg from "/public/images/asset.png";
import collab_image from "/public/images/Collaboration-final.svg"
import inclusion_image from "/public/images/Inclusion-new.svg"
import excellence_image from "/public/images/Excellence-new.svg"

const OurProcess = () => {
  return (
    <>
      <div className="bg-[#007ba8] py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h2 className="text-white font-semibold text-lg md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Our Values
            </h2>
          </div>
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            {/* Collaboration Card */}
            <div
              className="bg-white rounded-[20px] py-[50px] px-[40px]  ease-in-out shadow-sm"
            >
              <div className="flex space-y-[20px] flex-col">
                <div>
                <Image src={collab_image} alt="collab_image" />
                </div>
                <div>
                  <h3 className="text-black text:2xl text-center sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center font-semibold mb-[10px]">
                    COLLABORATION
                  </h3>
                </div>
              </div>
            </div>
            {/* Inclusion Card */}
            <div
              className="bg-white rounded-[20px] py-[50px] px-[40px] ease-in-out shadow-sm"
             
            >
              <div className="flex space-y-[20px] flex-col">
                <div>
                <Image src={inclusion_image} alt="inclusion_image" />
                </div>
                <div>
                  <h3 className="text-black text:2xl text-center sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center font-semibold mb-[10px]">
                    INCLUSION
                  </h3>
                </div>
              </div>
            </div>
            {/* Excellence Card */}
            <div
              className="bg-white rounded-[20px] py-[50px] px-[40px] ease-in-out shadow-sm"
             
            >
              <div className="flex space-y-[20px] flex-col">
                <div>
                <Image src={excellence_image} alt="excellence_image" />
                </div>
                <div>
                  <h3 className="text-black text:2xl text-center sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center font-semibold mb-[10px]">
                    EXCELLENCE
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
