import HeroBanner from "./_components/HeroBanner";
import ServicesCard from "./_components/ServicesCard";
import Cta from "./_components/Cta";
import AboutContent from "./_components/AboutContent";
import OurProcess from "./_components/OurProcess";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className=" pt-[45px]">
        <ServicesCard />
        <div className="mt-[50px]">
          <OurProcess />
        </div>
      </div>
      {/* <div className=" mb-[50px]">
        <AboutContent />
      </div> */}
      <div className="bg-[#007ba8] mb-[50px]">
        <Cta />
      </div>
    </>
  );
}
