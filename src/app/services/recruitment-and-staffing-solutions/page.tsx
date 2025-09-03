import { recruitmentAndStaffingSolutions } from "@/app/_data/services";
import HeroBanner from "../_components/HeroBanner";
import ServicesCard from "../_components/ServicesCard";
import Process from "./_components/Process";
{/*import Image from "next/image";

import servicesDetails from "/public/images/services-details.jpg";
import brandWhite from "/public/images/brand.png";*/}
import OurProcess from "./_components/OurProcess";
import Cta from "@/app/_components/Cta";
import ServicesCard2 from "../_components/Services_Card(2)";

export default function SoftwareDevelopmentServices() {
  const { services } = recruitmentAndStaffingSolutions;
  return (
    <>
      <div>
        <hr className="border-[#E3E3E3]" />

        <HeroBanner
          title="Recruitment and Staffing Solutions"
          subTitle="Where Exceptional Personnel enable your  project success"
          heroImage="/images/banner-stafing.png"
        />
      </div>

      <OurProcess />

      <ServicesCard title="Capabilities" services={services.slice(0, 3)} />
      <ServicesCard2 services={services.slice(3, 5)} />
      

      <Process />
      <ServicesCard title="Value" services={services.slice(6, 9)} />
      <div className="mb-[50px] bg-gray-400">
        <Cta />
      </div>
    </>
  );
}
