import { FunctionComponent } from "react";
import Image from "next/image";

type ServiceCard2Props = {
    backgroundColor?: "bg-primary" | "bg-secondary";
    services: {
      title: string;
      description: string;
      image: string;
    }[];
  };

const ServicesCard2: FunctionComponent<ServiceCard2Props> = ({
    backgroundColor = "blue-bg",
    services,
  }) => {
    return (
      <>
        <div
          className={`${backgroundColor} pb-[30px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]`}
        >
          <div className="container mx-auto">
  
            {/* Services Card */}
            <div className="grid gap-[25px] xl:px-20 2xl:px-52 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              {services.map(({ title, description, image }) => (
                <div
                  key={title}
                  className="bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-orange-400 transition delay-400 duration-500 ease-in-out shadow-sm"
                >
                  <div className="bg-[#F2F2F8]  w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                    <Image
                      src={image}
                      alt={"image"}
                      width={"48"}
                      height={"48"}
                      className="inline-block fill-current stroke-current"
                    />
                  </div>
                  <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                    {title}
                  </h3>
                  <p className="text-black">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ServicesCard2;