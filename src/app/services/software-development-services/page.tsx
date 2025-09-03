import { softwareDevelopmentServices } from "@/app/_data/services";
import HeroBanner from "../_components/HeroBanner";
import ServicesCard from "../_components/ServicesCard";
import Process from "./_components/Process";

{/*import Image from "next/image";

import servicesDetails from "/public/images/software-development-services/Devops-infographic.svg";
import brandWhite from "/public/images/brand.png";*/}
import OurProcess from "./_components/OurProcess";
import Cta from "@/app/_components/Cta";

export default function SoftwareDevelopmentServices() {
  const {
    services,
  } = softwareDevelopmentServices;
  return (
    <>
      <div>

        <hr className="border-[#E3E3E3]" />

        <HeroBanner
          title="Software Development Services"
          subTitle="Crafting Digital Excellence: Your Vision, Our Solution."
          heroImage="/images/software1.avif"
        />

      </div>

      <OurProcess />

      <ServicesCard title="Capabilities" services={services.slice(0,6)} />

      <Process />

      <ServicesCard title="Values" services={services.slice(6,9)} />
      <div className="mb-[50px] bg-gray-400">
        <Cta />
      </div>
    </>
  );
}
