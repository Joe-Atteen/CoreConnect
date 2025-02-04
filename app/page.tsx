"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <section id="/" className="!bg-[#efefef] hero overflow-hidden relative">
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
                    <span className="primary-text-gradient font-semibold">
                      Connecting
                    </span>{" "}
                    people and businesses through{" "}
                    <span className="primary-text-gradient font-semibold">
                      core solutions
                    </span>{" "}
                    in technology and travel.
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
          <div className="bg-[#fdfaf7] relative">
            <div className="max-w-[1400px] mx-auto p-6 sm:p-12">
              <h3 className="text-[24px] md:text-[30px] font-bold mb-10 text-center uppercase">
                Our partners
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
            <h3 className="uppercase text-[30px] sm:text-[40px] lg:text-[50px] leading-[35px] sm:leading-[45px] lg:leading-[55px] font-extrabold mb-12">
              Great Team.{" "}
              <span className="text-[#eb0f53]">Awesome Results.</span>
            </h3>
            <h4 className="text-[18px] text-[#404040] font-medium mb-20">
              We are a multifaceted consultancy dedicated to providing
              innovative solutions in IT and travel.
              <br />
              <br /> As an IT consultancy, we deliver comprehensive software
              solutions tailored to the needs of individuals and businesses in
              Ghana. Our expertise spans system development, IT support, and
              digital transformation strategies designed to optimize operations
              and drive growth. <br />
              <br /> In addition, our Travel and Tour consultancy specializes in
              curating memorable travel experiences. From personalized itinerary
              planning to seamless ticketing and destination management, we
              cater to both local and international clients, ensuring
              stress-free and enjoyable journeys.
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              <div className="flex flex-col justify-center items-center border border-[#f7f7f7] p-12 pt-[97px] py-16 rounded-2xl bg-[#f3e8ee] h-full">
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
                  Embracing cutting-edge technology and creative problem-solving
                  to deliver tailored IT solutions and personalized travel
                  experiences.
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
                  Delivering exceptional services with high standards and a
                  commitment to continuous improvement.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border border-[#f7f7f7] p-12 pt-[97px] pb-16 rounded-2xl bg-[#fff7f1] h-full">
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
                  Prioritizing customers with seamless experiences and trusted
                  relationships.
                </p>
              </div>
            </div>
            <h4 className="text-[18px] text-[#404040] font-medium">
              <span className="font-bold">CoreConnect’s Promise</span>: By
              combining innovation, delivering quality, and prioritizing
              customer satisfaction, we aim to be your go-to partner for
              seamlessly connecting your tech and travel needs
            </h4>
          </div>
        </section>

        <section id="services" className="bg-[#fdfaf7]">
          <div className="max-w-[1400px] mx-auto px-6 py-28 sm:px-12">
            <h2 className="sub-heading mb-8 tracking-[2px]">Services</h2>
            <h3 className="uppercase text-[30px] sm:text-[40px] lg:text-[50px] leading-[35px] sm:leading-[45px] lg:leading-[55px] font-extrabold mb-20">
              Right on time. <span className="text-[#8a39c0]">Everytime.</span>
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
          <div className="relative mb-[400px] lg:mb-[200px] xl:mb-[170px]">
            <div className="relative !bg-[#ffffff] contact-bg overflow-hidden">
              <div className="absolute inset-0 bg-[#252525] opacity-65 z-0"></div>
              <div className="relative max-w-[1400px] mx-auto px-6 py-28 pb-56 sm:pb-56 sm:px-12">
                <h2 className="sub-heading mb-8 tracking-[2px] !text-white">
                  Contact
                </h2>
                <h3 className="uppercase text-[30px] sm:text-[40px] lg:text-[50px] leading-[35px] sm:leading-[45px] lg:leading-[55px] font-extrabold text-white">
                  Let&apos;s talk{" "}
                  <span className="text-[#d28740]">Business</span>
                </h3>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-[1400px] mx-auto px-6 sm:px-12 absolute top-[290px] sm:top-[320px] grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="h-full border border-[#f1f1f1] rounded-2xl bg-[#fffeff] overflow-hidden">
                  <div className="p-4">
                    <span className="border border-[#f1f1f1] inline-flex rounded-full p-3 px-[10px] mb-7">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="fa-fw sm:text-xl"
                      />
                    </span>
                    <p className="font-semibold mb-4 sm:text-xl">Call us</p>
                    <p className="mb-3 text-[#545454] font-medium">
                      Mon - Fri from 8am to 5pm
                    </p>
                    <a href="tel:0275918290" className="tracking-normal">
                      <p className="sm:text-xl font-bold underline">
                        +233275918290
                      </p>
                    </a>
                  </div>
                </div>
                <div className="h-full border border-[#f1f1f1] rounded-2xl bg-[#fffeff] overflow-hidden">
                  <div className="p-4">
                    <span className="border border-[#f1f1f1] inline-flex rounded-full p-3 px-[10px] mb-7">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="fa-fw sm:text-xl"
                      />
                    </span>
                    <p className="font-semibold mb-4 sm:text-xl">
                      Whatsapp us now
                    </p>
                    <p className="mb-3 text-[#545454] font-medium">
                      Mon - Sun anytime
                    </p>
                    <a
                      href="https://wa.me/233275918290"
                      className="tracking-normal"
                    >
                      <p className="sm:text-xl font-bold underline">
                        +233275918290
                      </p>
                    </a>
                  </div>
                </div>
                <div className="h-full border border-[#f1f1f1] rounded-2xl bg-[#fffeff] overflow-hidden">
                  <div className="p-4">
                    <span className="border border-[#f1f1f1] inline-flex rounded-full p-3 px-[10px] mb-7">
                      <FontAwesomeIcon
                        icon={faLocation}
                        className="fa-fw sm:text-xl"
                      />
                    </span>
                    <p className="font-semibold mb-4 sm:text-xl">Locate us</p>
                    <p className="mb-3 text-[#545454] font-medium">
                      Accra, Ghana
                    </p>
                    <p className="sm:text-xl font-bold underline">
                      McCarthy Hill, 13th Avenue
                    </p>
                  </div>
                </div>
                <div className="h-full border border-[#f1f1f1] rounded-2xl bg-[#fffeff] overflow-hidden">
                  <div className="p-4">
                    <span className="border border-[#f1f1f1] inline-flex rounded-full p-3 px-[10px] mb-7">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="fa-fw sm:text-xl"
                      />
                    </span>
                    <p className="font-semibold mb-4 sm:text-xl">Email us</p>
                    <p className="mb-3 text-[#545454] font-medium">
                      Mon - Sun anytime
                    </p>
                    <a
                      href="mailto:coreconnectghana@gmail.com"
                      className="tracking-normal"
                    >
                      <p className="sm:text-xl font-bold underline truncate">
                        coreconnectghana@gmail.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto border-t border-[#e9e9e9] p-6 md:p-12">
            <p className="text-center uppercase font-light">
              ©2025 CoreConnect. All rights reserved
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
