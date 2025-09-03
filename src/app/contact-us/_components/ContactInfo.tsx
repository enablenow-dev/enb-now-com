"use client";

const ContactInfo = () => {
  return (
    <>
      <div className="bg-[#007BA8] rounded-[20px] lg:rounded-l-[20px] lg:rounded-r-[0] space-y-[30px] py-[30px] md:py-[60px] lg:py-[90px] px-[20px] md:px-[50px]">
        <div className="border  bg-[#F2F2F8] rounded-[20px] px-[30px] py-[35px]">
          <h3 className="text-[18px] md:text-[22px] font-semibold text-black mb-[20px] leading-none">
            Office Address
          </h3>
          <div className="flex items-center text-black space-x-[15px] rtl:space-x-reverse">
            <div className="shrink-0 bg-blue-200 text-[#007BA8] w-[48px] h-[48px] leading-[50px] text-[25px] inline-block text-center rounded-full">
              <i className="bx bxs-map"></i>
            </div>
              <p>Headquarters - 30 N GOULD STREET, Suite R, Sheridan, WY 82801<br /> <br />Regional Office - 555 Republic Drive, Suite 450, Plano TX 75074<br /></p>
          </div>
        </div>

        {/*<div className="border border-[#585858] rounded-[20px] px-[30px] py-[35px]">
          <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-[20px] leading-none">
            Phone Number
          </h3>
          <div className="flex items-center text-white space-x-[15px] rtl:space-x-reverse">
            <div className="shrink-0 bg-[#4C4C4C] text-primary w-[48px] h-[48px] leading-[50px] text-[25px] inline-block text-center rounded-full">
              <i className="bx bxs-phone"></i>
            </div>
            <div>
              <a href="tel:1234567898" className="block hover:text-primary">
                (+123) 456-7898
              </a>
              <a href="tel:1234567899" className="block hover:text-primary">
                (+123) 456-7899
              </a>
            </div>
          </div>
  </div>*/}

     
      </div>
    </>
  );
};

export default ContactInfo;
