import Image from "next/image";

import assetImg from "/public/images/Proposal-new.svg";

const OurProcess = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Deliver Compelling Proposal That Position You For Excellence
            </h2>
          </div>

          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div
              className="space-y-[30px] lg:space-y-[40px]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="flex space-x-[10px] rtl:space-x-reverse">
                <div className="pr-[0] xl:pr-[160px] xl:rtl:pr-0 xl:rtl:pl-[160px]">
                  <p className="xl:text-xl">
                    EnableNow's proven expertise in crafting winning proposals
                    is grounded in its streamlined approach that simplifies
                    responses to Requests for Proposals (RFPs), Requests for
                    Information (RFIs), Sources Sought, and more, strategically
                    positioning you for success
                  </p>
                </div>
              </div>

              <div className="flex space-x-[10px] rtl:space-x-reverse">
                <div className="pr-[0] xl:pr-[160px] xl:rtl:pr-0 xl:rtl:pl-[160px]">
                  <p className="xl:text-xl">
                    Highly skilled technical and business writers help you
                    respond and prepare executive summary, technical approach,
                    project management, transition in/out, past performance,
                    resumes, quality assurance, risk management, staffing, and
                    other narratives for your proposals.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative xl:ml-24"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image src={assetImg} alt="asset" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;