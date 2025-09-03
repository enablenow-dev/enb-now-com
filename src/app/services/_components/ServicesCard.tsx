import { FunctionComponent } from "react";
import Image from "next/image";

type ServiceCardProps = {
  backgroundColor?: "bg-primary" | "bg-secondary";
  title: string;
  services: {
    title: string;
    description: string;
    image: string;
  }[];
};

const ServicesCard: FunctionComponent<ServiceCardProps> = ({
  backgroundColor = "bg-gray-200",
  title,
  services,
}) => {
  return (
    <>
      <div
        className={`${backgroundColor} pt-[50px] pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]`}
      >
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="mx-auto text-center mb-[30px] lg:mb-[60px]">
            <h2 className="text-gray-600 font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-8">
              {title}
            </h2>

            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]"></h4>
          </div>

          {/* Services Card */}
          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {services.map(({ title, description, image }) => (
              <div
                key={title}
                className="group bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#007ba8] transition delay-400 duration-500 ease-in-out shadow-sm"
              >
                <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                  <Image
                    src={image}
                    alt="image"
                    width={48}
                    height={48}
                    className="inline-block"
                  />
                </div>
                <h3 className="text-black group-hover:text-white text-[20px] md:text-[22px] font-semibold mb-[10px]">
                  {title}
                </h3>
                <p className="text-black group-hover:text-white">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
