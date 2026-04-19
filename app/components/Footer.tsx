"use client";

import { InstagramIcon, MailIcon } from "./Icons";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#calculators", label: "Calculators" },
    { href: "#competition-prep", label: "Competition Prep" },
    { href: "#transformations", label: "Transformations" },
    { href: "#championship", label: "Championship" },
    { href: "#certifications", label: "Certifications" },
  ];

  return (
    <footer id="contact" className="py-8 md:py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-[#0a0a0a]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="col-span-2">
            <a href="#" className="text-xl md:text-2xl font-bold gold-gradient inline-block mb-3 md:mb-4">ANOOSH<span className="text-white">FITNESS</span></a>
            <p className="text-gray-400 max-w-sm text-xs md:text-sm">Certified fitness coach, weightlifting champion & fitness model. Transforming lives through personalized training since 2020.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-[#c9a84c] transition-colors text-xs md:text-sm">{link.label}</a>
                </li>
              ))}
              <li className="hidden md:block"><a href="#achievements" className="text-gray-400 hover:text-[#c9a84c] transition-colors text-xs md:text-sm">Achievements</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-1.5 md:space-y-2">
              <li className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <InstagramIcon /> @anooshfitness
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <MailIcon /> anoosh@fitness.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#222] pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs md:text-sm">2024 Anoosh Fitness. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-[#c9a84c] transition-colors text-xs md:text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-[#c9a84c] transition-colors text-xs md:text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
