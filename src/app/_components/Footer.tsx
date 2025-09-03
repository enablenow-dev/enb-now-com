import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto">

        {/* Bottom Footer */}
        <div className="py-[30px]">
          <div className="grid items-center gap-[15px] md:gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="text-center md:text-left md:rtl:text-right">
              <h6>
                ©<span className="text-black">Enablenow</span>. All Rights Reserved
                by{" "}
                <a
                  href="https://enablenow.com/"
                  target="_blank"
                  className="text-black hover:text-primary"
                >
                  Enablenow
                </a>
              </h6>
            </div>

            <div className="text-center md:text-end">
              <ul className="space-x-[30px] rtl:space-x-reverse">
                <li className="inline-block relative before:content-[''] before:absolute before:right-[-15px] before:rtl:right-auto before:rtl:left-[-15px] before:bg-[#000] before:h-[15px] before:w-[1px] before:top-[6px] before:hidden lg:before:block last-of-type:before:hidden">
                  <Link href="/privacy-policy" className="text-black hover:text-primary">
                    Privacy & Policy
                  </Link>
                </li>

                <li className="inline-block relative before:content-[''] before:absolute before:right-[-15px] before:bg-[#000] before:h-[15px] before:w-[1px] before:top-[6px] before:hidden lg:before:block last-of-type:before:hidden">
                  <Link href="/terms-conditions" className="text-black hover:text-primary">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
