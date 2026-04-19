"use client";

import Image from "next/image";
import { AwardIcon } from "../components/Icons";

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 md:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c9a84c]/10 via-[#0a0a0a] to-[#0a0a0a]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 mb-4 md:mb-6">
            <AwardIcon />
            <span className="text-[#c9a84c] text-xs md:text-sm font-semibold">Verified & Accredited</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Professional <span className="gold-gradient">Certifications</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Internationally recognized certifications and credentials that validate expertise in fitness, nutrition, and competitive training.</p>
        </div>
        
        {/* Certificate Image Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="card-dark rounded-2xl md:rounded-3xl overflow-hidden border border-[#c9a84c]/30 hover:border-[#c9a84c] transition-all shadow-2xl shadow-[#c9a84c]/10">
            <div className="relative aspect-[16/9] bg-[#1a1a1a]">
              <Image 
                src="/Anoosh Farhad Certificate.jpg" 
                alt="Fitness Trainer Certification"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
