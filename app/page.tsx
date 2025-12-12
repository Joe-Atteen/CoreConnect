"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          id="/"
          className="relative min-h-screen primary-gradient overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15"></div>

          <div className="relative max-w-[1400px] mx-auto px-6 sm:px-12 min-h-screen flex flex-col justify-center items-center text-center pt-20">
            <div className="max-w-4xl">
              <p className="text-white/80 uppercase text-xs sm:text-sm font-semibold tracking-[3px] mb-6">
                IT Consultancy • Travel Solutions
              </p>
              <h1 className="text-white text-[32px] sm:text-[48px] lg:text-[68px] leading-[1.1] font-extrabold mb-8">
                We build software.
                <br />
                We plan journeys.
              </h1>
              <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                CoreConnect brings together expert software development and
                seamless travel planning. One team, two specialties, zero
                hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group bg-white text-[#1a1a1a] text-base sm:text-lg font-semibold px-8 py-4 rounded-lg hover:bg-white/95 transition-all duration-300 hidden md:inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  Start a project
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-sm group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#services"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white text-base sm:text-lg font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  See what we do
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-[#fdfaf7] border-b border-[#f0ebe6]">
          <div className="w-full mx-auto px-6 py-14 sm:px-12">
            <p className="text-center text-[#9a9a9a] uppercase text-xs font-semibold tracking-[2px] mb-10">
              Trusted by teams who care about results
            </p>
            <div className="relative overflow-hidden">
              <div className="flex justify-center items-center gap-12 min-w-max">
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image
                    src="/impact-life.gif"
                    width={120}
                    height={50}
                    alt="Impact Life"
                  />
                </div>
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image
                    src="/miss-cookie.png"
                    width={120}
                    height={50}
                    alt="Miss Cookie"
                  />
                </div>
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image
                    src="/crossroads.webp"
                    width={120}
                    height={50}
                    alt="Crossroads"
                  />
                </div>
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image
                    src="/azurest.png"
                    width={120}
                    height={50}
                    alt="Azurest"
                  />
                </div>
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image
                    src="/hubtel.png"
                    width={120}
                    height={50}
                    alt="Hubtel"
                  />
                </div>
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image
                    src="/troasel.png"
                    width={120}
                    height={50}
                    alt="Troasel"
                    className="invert"
                  />
                </div>
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image
                    src="/gcapacityhub.png"
                    width={90}
                    height={50}
                    alt="GCapacityHub"
                    className="invert"
                  />
                </div>
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image
                    src="/foundation-logo.webp"
                    width={120}
                    height={50}
                    alt="Foundation"
                  />
                </div>
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image src="/UBA-logo.png" width={50} height={50} alt="UBA" />
                </div>
                <div className="flex justify-center items-center transition-all duration-300">
                  <Image src="/corpstreet-logo.svg" width={150} height={50} alt="Corpstreet" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 py-24 sm:py-32 sm:px-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-[#9a9a9a] uppercase text-xs font-semibold tracking-[3px] mb-4">
                About us
              </p>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.1] font-extrabold mb-6 text-[#1a1a1a]">
                Two specialties.{" "}
                <span className="primary-text-gradient">One team.</span>
              </h2>
              <p className="text-[#404040] text-lg leading-relaxed">
                We&apos;re not your typical agency. We combine IT expertise with
                travel know-how to deliver solutions that actually work.
              </p>
            </div>

            {/* Two Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* IT Pillar */}
              <div className="group relative bg-white rounded-2xl p-8 sm:p-10 border border-[#f0ebe6] hover:shadow-2xl hover:shadow-[#eb0f53]/5 transition-all duration-500 overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-[#eb0f53] uppercase tracking-wider">
                      Technology
                    </span>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">
                      IT Consultancy
                    </h3>
                  </div>
                </div>
                <p className="text-[#404040] leading-relaxed mb-6">
                  We build software that solves real problems. From architecture
                  to deployment, our team delivers systems that scale with your
                  business—not against it.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#404040]">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    Innovative software architecture
                  </li>
                  <li className="flex items-center gap-3 text-[#404040]">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    Fintech solutions partner
                  </li>
                  <li className="flex items-center gap-3 text-[#404040]">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    API & payment integrations
                  </li>
                </ul>
              </div>

              {/* Travel Pillar */}
              <div className="group relative bg-white rounded-2xl p-8 sm:p-10 border border-[#f0ebe6] hover:shadow-2xl hover:shadow-[#9251f5]/5 transition-all duration-500 overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-[#9251f5] uppercase tracking-wider">
                      Travel
                    </span>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">
                      Travel Partner
                    </h3>
                  </div>
                </div>
                <p className="text-[#404040] leading-relaxed mb-6">
                  From flight bookings to visa logistics, we handle the details
                  so you can focus on the journey. Local expertise,
                  international reach.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#404040]">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    Global conferences
                  </li>
                  <li className="flex items-center gap-3 text-[#404040]">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    Study abroad programs
                  </li>
                  <li className="flex items-center gap-3 text-[#404040]">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    Travel consultancy
                  </li>
                </ul>
              </div>
            </div>

            {/* Values Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col justify-center items-center border border-[#f7f7f7] px-7 p-12 md:px-12 pt-[97px] py-16 rounded-2xl bg-[#f3e8ee] h-full">
                <Image
                  src="/innovation.svg"
                  width={110}
                  height={0}
                  alt="Innovation"
                  className="mb-8"
                />
                <h4 className="text-[20px] text-[#404040] text-center font-semibold mb-8">
                  Innovation
                </h4>
                <p className="text-center text-[#404040]">
                  Embracing cutting-edge technology and creative problem-solving
                  to deliver tailored IT solutions and personalized travel
                  experiences.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border border-[#f7f7f7] px-7 p-12 md:px-12 py-16 rounded-2xl bg-[#fbf7ff] h-full">
                <Image
                  src="/quality.svg"
                  width={65}
                  height={0}
                  alt="Quality"
                  className="mb-8"
                />
                <h4 className="text-[20px] text-[#404040] text-center font-semibold mb-8">
                  Quality
                </h4>
                <p className="text-center text-[#404040]">
                  Delivering exceptional services with high standards and a
                  commitment to continuous improvement.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border border-[#f7f7f7] px-7 p-12 md:px-12 pt-[97px] pb-16 rounded-2xl bg-[#fff7f1] h-full">
                <Image
                  src="/satisfaction.svg"
                  width={125}
                  height={0}
                  alt="Customer Satisfaction"
                  className="mb-8"
                />
                <h4 className="text-[20px] text-[#404040] text-center font-semibold mb-8">
                  Customer Satisfaction
                </h4>
                <p className="text-center text-[#404040]">
                  Prioritizing customers with seamless experiences and trusted
                  relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative bg-[#0b0f1a] text-white">
          <div className="max-w-[1400px] mx-auto px-6 py-28 sm:py-32 sm:px-12">
            <div className="text-center">
              <p className="text-[#eb0f53] uppercase text-xs font-bold tracking-[4px] mb-6">
                Services
              </p>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.1] font-black text-[#e2e8f0] mb-5">
                Built for urgency.
                <span className="block text-[#d1d5db]">
                  Delivered with care.
                </span>
              </h2>
              <p className="text-[#cbd5e1] text-base sm:text-lg max-w-3xl mx-auto">
                Engineering precision meets hospitality-grade service. We
                design, build, and maintain the products your customers rely on.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
              <div className="group rounded-2xl border border-[#1f2537] bg-[#0f1624] p-6 shadow-sm hover:-translate-y-1 hover:border-[#2e3b54] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#111b2d] flex items-center justify-center text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="6" y="4" width="12" height="16" rx="3" ry="3" />
                      <path d="M9 18h6" />
                      <circle cx="12" cy="8" r="0.9" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-[11px] uppercase tracking-[2px] text-[#94a3b8] group-hover:text-white transition-colors">
                    Mobile
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Mobile Applications
                </h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">
                  Native iOS and Android builds that feel fast, reliable, and
                  unmistakably premium.
                </p>
              </div>

              <div className="group rounded-2xl border border-[#1f2537] bg-[#0f1624] p-6 shadow-sm hover:-translate-y-1 hover:border-[#2e3b54] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#111b2d] flex items-center justify-center text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="4" width="18" height="14" rx="2" />
                      <path d="M9 18l-1 3h8l-1-3" />
                      <path d="M7 8h10" />
                    </svg>
                  </div>
                  <span className="text-[11px] uppercase tracking-[2px] text-[#94a3b8] group-hover:text-white transition-colors">
                    Web
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Web Experiences
                </h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">
                  Conversion-focused websites and web apps with obsessive
                  attention to detail and accessibility.
                </p>
              </div>

              <div className="group rounded-2xl border border-[#1f2537] bg-[#0f1624] p-6 shadow-sm hover:-translate-y-1 hover:border-[#2e3b54] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#111b2d] flex items-center justify-center text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4 7h16" />
                      <path d="M4 12h16" />
                      <path d="M4 17h9" />
                    </svg>
                  </div>
                  <span className="text-[11px] uppercase tracking-[2px] text-[#94a3b8] group-hover:text-white transition-colors">
                    APIs
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  API Platforms
                </h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">
                  Secure, well-documented APIs that your partners love to
                  integrate with.
                </p>
              </div>

              <div className="group rounded-2xl border border-[#1f2537] bg-[#0f1624] p-6 shadow-sm hover:-translate-y-1 hover:border-[#2e3b54] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#111b2d] flex items-center justify-center text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M6 9h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9z" />
                      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
                      <path d="M10 13h4" />
                    </svg>
                  </div>
                  <span className="text-[11px] uppercase tracking-[2px] text-[#94a3b8] group-hover:text-white transition-colors">
                    USSD
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  USSD Applications
                </h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">
                  Reach every audience with resilient USSD flows and
                  crystal-clear analytics.
                </p>
              </div>

              <div className="group rounded-2xl border border-[#1f2537] bg-[#0f1624] p-6 shadow-sm hover:-translate-y-1 hover:border-[#2e3b54] transition-all duration-300 sm:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#111b2d] flex items-center justify-center text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="4" y="6" width="16" height="12" rx="2" />
                      <path d="M8 10h8" />
                      <path d="M8 14h5" />
                      <path d="M14 18h2" />
                    </svg>
                  </div>
                  <span className="text-[11px] uppercase tracking-[2px] text-[#94a3b8] group-hover:text-white transition-colors">
                    Payments
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Payment Solutions
                </h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">
                  PCI-conscious payment journeys, mobile money, cards, and bank
                  rails with proactive fraud controls.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <div className="rounded-3xl bg-[#111827] border border-[#1f2537] text-white p-8 sm:p-10 lg:p-12 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.9)]">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 leading-[1.05]">
                      Visa support, itineraries, and the smoothest arrivals.
                    </h3>
                    <p className="text-[#cbd5e1] leading-relaxed">
                      From ticketing to curated stays, we handle every leg of
                      the journey with concierge-level care so you can simply
                      show up.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-[#0f172a] font-semibold hover:-translate-y-0.5 transition-transform"
                  >
                    Plan my trip <span className="text-sm">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white">
          <div className="max-w-[1400px] mx-auto px-6 py-24 sm:py-32 sm:px-12">
            <div className="text-center mb-16">
              <p className="text-[#9a9a9a] uppercase text-xs font-semibold tracking-[2px] mb-4">
                Contact
              </p>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15] font-extrabold mb-6 text-[#1a1a1a]">
                Let&apos;s talk{" "}
                <span className="primary-text-gradient">business</span>
              </h2>
              <p className="text-[#404040] text-base sm:text-lg max-w-xl mx-auto">
                Ready to start a project or have questions? Reach out through
                any of these channels.
              </p>
            </div>
            <div className="max-w-3xl mx-auto rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] overflow-hidden">
              <div className="divide-y divide-[#e5e7eb]">
                <a
                  href="tel:+233275918290"
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-5 sm:p-6 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#0f172a] text-white flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#0f172a] font-semibold">Call us</p>
                      <p className="text-[#6b7280] text-sm">
                        Mon - Fri, 8am to 5pm
                      </p>
                    </div>
                  </div>
                  <span className="text-[#eb0f53] font-semibold text-left sm:text-right w-full sm:w-auto">
                    +233 275 918 290
                  </span>
                </a>

                <a
                  href="https://wa.me/233275918290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-5 sm:p-6 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#0f172a] text-white flex items-center justify-center">
                      <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#0f172a] font-semibold">WhatsApp</p>
                      <p className="text-[#6b7280] text-sm">
                        Available anytime
                      </p>
                    </div>
                  </div>
                  <span className="text-[#d28740] font-semibold text-left sm:text-right w-full sm:w-auto">
                    +233 275 918 290
                  </span>
                </a>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-5 sm:p-6 hover:bg-white transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#0f172a] text-white flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <p className="text-[#0f172a] font-semibold">Visit us</p>
                      <p className="text-[#6b7280] text-sm">Accra, Ghana</p>
                    </div>
                  </div>
                  <span className="text-[#0f172a] font-semibold text-left sm:text-right w-full sm:w-auto">
                    McCarthy Hill, 13th Avenue
                  </span>
                </div>

                <a
                  href="mailto:coreconnectghana@gmail.com"
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-5 sm:p-6 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#0f172a] text-white flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#0f172a] font-semibold">Email us</p>
                      <p className="text-[#6b7280] text-sm">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>
                  <span className="text-[#8a39c0] font-semibold truncate text-left sm:text-right w-full sm:w-auto">
                    coreconnectghana@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-[#e5e7eb]">
          <div className="max-w-[1400px] mx-auto px-6 py-8 sm:px-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[#4b5563] text-sm">
                © 2025 CoreConnect. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#about"
                  className="text-[#6b7280] text-sm hover:text-[#0f172a] transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-[#6b7280] text-sm hover:text-[#0f172a] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-[#6b7280] text-sm hover:text-[#0f172a] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
