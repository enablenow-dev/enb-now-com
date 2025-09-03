import AboutContentTwo from "./_components/AboutContent";
import AboutContent from "../_components/AboutContent";
import ServicesCard from "../_components/ServicesCard";
import HeroBanner from "./_components/HeroBanner";
import Cta from "../_components/Cta";

export default function AboutUsPage() {
  return (
    <>
      <div className="">
        <hr className="border-[#E3E3E3]" />
        <HeroBanner />
        <AboutContent />
        <AboutContentTwo />
      </div>
      <ServicesCard />
      <div className="my-[50px] bg-gray-400">
        <Cta />
      </div>
      </>
  );
}
