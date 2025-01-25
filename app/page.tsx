"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <section id="/" className="!bg-[#87511c] hero overflow-hidden relative">
          <div className="absolute inset-0 bg-[#ffffff] opacity-90 z-0"></div>
          <div className="min-h-dvh flex-center px-6 sm:px-14 pt-[130px] xl:pt-[80px] pb-12 xl:pb-8 relative">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <div className="mb-10 sm:mb-16 xl:mb-0">
                  <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] font-bold uppercase text-center xl:text-start leading-[45px] sm:leading-[65px] lg:leading-[85px] mb-6 sm:mb-8 lg:mb-10">
                    Your trusted{" "}
                    <span className="primary-text-gradient">partner</span> on
                    your journey to{" "}
                    <span className="primary-text-gradient">success</span>
                  </h1>
                  <p className="sm:text-lg uppercase text-center xl:text-start text-[#404040]">
                    Over a decade of experience at your disposal
                  </p>
                </div>
              </div>
              <div className="flex-center">
                <Image
                  src="/hero-img.svg"
                  width={550}
                  height={0}
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#fdfaf7] relative border-t border-b border-[#e3e3e3]">
            <div className="max-w-[1400px] mx-auto p-6 sm:p-12">
              <h3 className="text-[24px] md:text-[30px] font-bold mb-10 text-center">
                We&apos;ve worked with
              </h3>
              <div className="flex flex-wrap gap-8 items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image
                    src="/impact-life.gif"
                    width={150}
                    height={60}
                    alt="Impact Life"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/miss-cookie.png"
                    width={150}
                    height={60}
                    alt="Miss Cookie"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/crossroads.webp"
                    width={150}
                    height={60}
                    alt="Crossroads"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/azurest.png"
                    width={150}
                    height={60}
                    alt="Commitment"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="">
          <div className="max-w-[1400px] mx-auto px-6 py-28 sm:px-12">
            <h2 className="sub-heading mb-8 tracking-[2px]">About us</h2>
            <h3 className="uppercase text-[30px] sm:text-[40px] lg:text-[50px] leading-[35px] sm:leading-[45px] lg:leading-[55px] font-extrabold mb-20">
              Great Team.{" "}
              <span className="text-[#eb0f53]">Awesome Results.</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col justify-center items-center border border-[#f7f7f7] p-12 py-16 rounded-2xl bg-[#f3e8ee] h-full">
                <Image
                  src="/innovation.svg"
                  width={110}
                  height={0}
                  alt="About Image"
                  className="mb-8"
                />
                <h4 className="text-[20px] text-[#404040] text-center font-semibold mb-8">
                  Innovation
                </h4>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eget turpis at nunce. Donec sit amet nunc nec nunc
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border border-[#f7f7f7] p-12 py-16 rounded-2xl bg-[#fbf7ff] h-full">
                <Image
                  src="/quality.svg"
                  width={65}
                  height={0}
                  alt="About Image"
                  className="mb-8"
                />
                <h4 className="text-[20px] text-[#404040 text-center font-semibold mb-8">
                  Quality
                </h4>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eget turpis at nunce. Donec sit amet nunc nec nunc
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border border-[#f7f7f7] p-12 pt-28 pb-16 rounded-2xl bg-[#fff7f1] h-full">
                <Image
                  src="/satisfaction.svg"
                  width={125}
                  height={0}
                  alt="About Image"
                  className="mb-8"
                />
                <h4 className="text-[20px] text-[#404040] text-center font-semibold mb-8">
                  Customer Satifaction
                </h4>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eget turpis at nunce. Donec sit amet nunc nec nunc
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#fdfaf7]">
          <div className="max-w-[1400px] mx-auto px-6 py-28 sm:px-12">
            <h2 className="sub-heading mb-8 tracking-[2px]">Services</h2>
            <h3 className="uppercase text-[30px] sm:text-[40px] lg:text-[50px] leading-[35px] sm:leading-[45px] lg:leading-[55px] font-extrabold mb-20">
              Right on time. <span className="text-[#d28740]">Everytime.</span>
            </h3>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-14">
                <div className="h-full flex justify-center items-center">
                  <Image
                    src="/services.svg"
                    width={600}
                    height={0}
                    alt="Service Image"
                    className="mb-8 md:mb-0"
                  />
                </div>
                <div className="md:flex justify-center items-center h-full">
                  <div>
                    <h4 className="text-[24px] text-[#404040 text-start font-semibold mb-6 md:mb-8">
                      We offer the following services:
                    </h4>
                    <div className="flex flex-col gap-7">
                      <div className="flex items-start gap-4">
                        <Image
                          src="/bullet.svg"
                          width={25}
                          height={0}
                          alt="Check"
                          className="flex-shrink-0"
                        />
                        <p className="text-[18px] leading-1">Web Development</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <Image
                          src="/bullet.svg"
                          width={25}
                          height={0}
                          alt="Check"
                          className="flex-shrink-0"
                        />
                        <p className="text-[18px] leading-1">
                          Mobile App Development
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <Image
                          src="/bullet.svg"
                          width={25}
                          height={0}
                          alt="Check"
                          className="flex-shrink-0"
                        />
                        <p className="text-[18px] leading-1">
                          USSD Applications
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <Image
                          src="/bullet.svg"
                          width={25}
                          height={0}
                          alt="Check"
                          className="flex-shrink-0"
                        />
                        <p className="text-[18px] leading-1">
                          Software Architecture Consultancy
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <Image
                          src="/bullet.svg"
                          width={25}
                          height={0}
                          alt="Check"
                          className="flex-shrink-0"
                        />
                        <p className="text-[18px] leading-1">
                          Wide Array of Payment Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="">
          <div className="max-w-[1400px] mx-auto px-6 py-28 sm:px-12">
            <h2 className="sub-heading mb-8 tracking-[2px]">Contact</h2>
            <h3 className="uppercase text-[30px] sm:text-[40px] lg:text-[50px] leading-[35px] sm:leading-[45px] lg:leading-[55px] font-extrabold mb-20">
              Let&apos;s talk <span className="text-[#8135b0]">Business</span>
            </h3>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-14">
                <div className="h-full flex flex-col gap-5 border border-[#e9e9e9] p-4 sm:p-6 md:p-8 lg:p-12 lg:py-16 rounded-2xl bg-[#fffeff]">
                  <div className="flex items-center p-5 rounded-2xl border border-[#e9e9e9] gap-3">
                    <FontAwesomeIcon icon={faPhone} className="fa-fw text-xl" />
                    <p className="text-xl">0209119731</p>
                  </div>
                  <div className="flex items-center p-5 rounded-2xl border border-[#e9e9e9] gap-3">
                    <FontAwesomeIcon icon={faPhone} className="fa-fw text-xl" />
                    <p className="text-xl">0209119731</p>
                  </div>
                  <div className="flex items-center p-5 rounded-2xl border border-[#e9e9e9] gap-3">
                    <FontAwesomeIcon icon={faPhone} className="fa-fw text-xl" />
                    <p className="text-xl">0209119731</p>
                  </div>
                </div>
                <div className="md:flex justify-center items-center h-full">
                  <div>
                    <h4 className="text-[30px] text-[#404040 text-start font-bold mb-6 md:mb-8">
                      Old School?
                    </h4>
                    <div className="flex flex-col gap-5">
                      <p className="text-xl font-semibold">
                        If you prefer plain ol&apos; email, write to us directly
                        at:
                      </p>
                      <a
                        href=""
                        mail-to=""
                        className="text-[#eb0f53] underline"
                      >
                        coreconnect@whatever.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto border-t border-[#e9e9e9] p-6 md:p-12">
            <p className="text-center">©2025 CoreConnect. All rights reserved</p>
          </div>
        </section>
      </div>
    </>
  );
}
