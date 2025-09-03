import {strategicItAndConsultingServices} from "@/app/_data/services";
import HeroBanner from "../_components/HeroBanner";
import ServicesCard from "../_components/ServicesCard";
import Process from "./_components/Process";

{/*import Image from "next/image";
import servicesDetails from "/public/images/strategic-it-and-security-consulting/Security-infographic.svg";
import brandWhite from "/public/images/brand.png";*/}
import OurProcess from "./_components/OurProcess";
import Cta from "@/app/_components/Cta";

export default function SoftwareDevelopmentServices() {
  const {
    services,
  } = strategicItAndConsultingServices;
  return (
    <>
      <div>

        <hr className="border-[#E3E3E3]" />

        <HeroBanner
          title="Strategic IT and Security Consulting"
          subTitle="IT infrastructure is the backbone of successful business operations"
          heroImage="/images/itSecurity.avif"
        />
      </div>

      <OurProcess />

      <ServicesCard title="Capabilities" services={services.slice(0,3)} />

      <Process />

      <ServicesCard title="Value" services={services.slice(6,9)} />
      <div className="mb-[50px] bg-gray-400">
        <Cta />
      </div>
    </>
  );
}
