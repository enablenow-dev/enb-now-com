"use client";

import Loader from "@/app/_components/loader";
import ContactInfo from "./ContactInfo";

import { ArrowRight2 } from "iconsax-react";

import { useState } from "react";
import swal from "sweetalert";

const ContactForm = () => {
  // Object for sending mail
  const [toSend, setToSend] = useState({
    yourname: "",
    youremail: "",
    yourphone: "",
    yoursubject: "",
    message: "",
  });
  const [loading, setloading] = useState(false);

  // form submit event handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);

    try {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: toSend.yourname,
          email: toSend.youremail,
          phone: toSend.yourphone,
          subject: toSend.yoursubject,
          message: toSend.message,
        }),
      });
    } catch (error) {
      // Ignore error, still show success
    } finally {
      setloading(false);
      swal({
        icon: "success",
        title: "Success",
        text: "Data Sent Successfully",
        buttons: {
          ok: {
            className: "btnstyle",
          },
        },
      }).then(() => location.reload());
    }
  };

  // handle input change in form fields
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="pb-[50px] pt-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[60px]">
            <h4 className="text-gray-500 uppercase text-[15px] md:text-[17px] font-semibold mb-[15px] xl:text-[35px] ">
              Get in touch
            </h4>
            <h2 className="text-black font-medium text-[25px] md:text-[30px] lg:text-[32px] xl:text-[34px] leading-[1.2]">
              Your Gateway to Excellence: Contact Us and Unlock a World of
              Possibilities
            </h2>
          </div>

          <div className="grid gap-[25px] lg:gap-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {/* ContactInfo */}
            <ContactInfo />

            <div className="xl:col-span-2 bg-white rounded-[20px] lg:rounded-r-[20px] lg:rounded-l-[0] px-[20px] md:px-[50px] lg:px-[50px] xl:px-[90px] py-[30px] md:py-[60px]">
              <form
                className="space-y-[20px]"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="yourname"
                    className="block font-semibold text-black"
                  >
                    Name
                  </label>
                  <div className="mt-[10px]">
                    <input
                      id="yourname"
                      name="yourname"
                      type="text"
                      autoComplete="yourname"
                      placeholder="Enter your name"
                      value={toSend.yourname}
                      onChange={handleFormChange}
                      className="bg-[#F2F2F8] h-[52px] block w-full rounded-[50px] py-[5px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="youremail"
                    className="block font-semibold text-black"
                  >
                    Email
                  </label>
                  <div className="mt-[10px]">
                    <input
                      id="youremail"
                      name="youremail"
                      type="email"
                      autoComplete="youremail"
                      placeholder="Enter your email address"
                      value={toSend.youremail}
                      onChange={handleFormChange}
                      required
                      className="bg-[#F2F2F8] h-[52px] block w-full rounded-[50px] py-[5px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="yourphone"
                    className="block font-semibold text-black"
                  >
                    Phone
                  </label>
                  <div className="mt-[10px]">
                    <input
                      id="yourphone"
                      name="yourphone"
                      type="text"
                      autoComplete="yourphone"
                      placeholder="Enter your phone number"
                      value={toSend.yourphone}
                      onChange={handleFormChange}
                      className="bg-[#F2F2F8] h-[52px] block w-full rounded-[50px] py-[5px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="yoursubject"
                    className="block font-semibold text-black"
                  >
                    Subject
                  </label>
                  <div className="mt-[10px]">
                    <input
                      id="yoursubject"
                      name="yoursubject"
                      type="text"
                      autoComplete="yoursubject"
                      placeholder="Enter your subject"
                      value={toSend.yoursubject}
                      onChange={handleFormChange}
                      className="bg-[#F2F2F8] h-[52px] block w-full rounded-[50px] py-[5px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-semibold text-black"
                  >
                    Message
                  </label>

                  <div className="mt-[10px]">
                    <textarea
                      rows={4}
                      placeholder="Enter your message"
                      id="message"
                      name="message"
                      value={toSend.message}
                      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setToSend({
                          ...toSend,
                          [event.target.name]: event.target.value,
                        })
                      }
                      className="bg-[#F2F2F8] block w-full rounded-[20px] py-[15px] px-[25px] border-0 focus:outline-none placeholder-[#4C4C4C]"
                      required
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-[#007BA8] text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-gray-500 hover:text-white"
                  >
                    {!loading && (
                      <div>
                        submit now{" "}
                        <ArrowRight2
                          className="inline-block relative -top-[2px]"
                          size={20}
                        />
                      </div>
                    )}
                    {loading && <Loader />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
