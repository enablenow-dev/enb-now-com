import { FunctionComponent } from "react";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

type HeroBannerProps = {
  heroImage: string;
  title: string;
  subTitle: string;
  textColor?: string;
};

const HeroBanner: FunctionComponent<HeroBannerProps> = ({
  heroImage,
  title,
  subTitle,
  textColor = 'text-white'
}) => {
  return (
    <>
      <div
        className={`relative pt-[50px] md:pt-[80px] lg:pt-[80px] xl:pt-[100px] pb-[55px] bg-no-repeat bg-cover bg-center h-[650px]`}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        <div className="container lg:max-w-[1500px] mx-auto z-auto">
          <div className="grid place-items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 h-full">
            <div className="text-center relative xl:mt-28 sm:mt-20 lg:mt-20 md:mt-20 2xl:mt-20">
              <h1
                className={`${textColor} text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-tight font-bold mb-4 md:mb-6 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-5xl mx-auto tracking-tight`}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                {title}
              </h1>
              <p
                className={`${textColor} text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl leading-relaxed mb-8 md:mb-12 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-4xl mx-auto font-light opacity-90`}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                {subTitle}
              </p>
              <Link
              href="/contact-us/"
              className="group bg-gradient-to-r from-[#007ba8] to-[#0096c7] text-white text-sm font-semibold inline-flex items-center justify-center uppercase rounded-full py-4 px-8 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#007ba8]/25 hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#007ba8]/30"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <span className="mr-2">Let's Talk</span>
              <ArrowRight2
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                size={18}
              />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;