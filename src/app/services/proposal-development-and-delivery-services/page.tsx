import HeroBanner from "../_components/HeroBanner";
import OurProcess from "./OurProcess";
import ServicesCard from "../_components/ServicesCard";
import Process from "./Process";

{/*import Image from "next/image";
import servicesDetails from "/public/images/proposal-development-and-management-services/proposal-infographic.png";
import brandWhite from "/public/images/brand.png";*/}
import { proposalDeliveryAndServices } from "@/app/_data/services";
import Cta from "@/app/_components/Cta";

export default function ServiceDetailsPage() {
  const { services } = proposalDeliveryAndServices;
  return (
    <>
      <div>
        <hr className="border-[#E3E3E3]" />

        <HeroBanner
          title="Proposal Development & Management Services"
          subTitle="Where innovation meets excellence."
          heroImage="/images/proposal1.avif"
        />
      </div>

      <OurProcess />

      <ServicesCard title="Capabilities" services={services.slice(0, 3)} />

      <Process />
      <ServicesCard title="Value" services={services.slice(3, 6)} />
      <div className="mb-[50px] bg-gray-400">
        <Cta />
      </div>
    </>
  );
}
