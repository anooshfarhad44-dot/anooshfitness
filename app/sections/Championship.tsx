"use client";

import Image from "next/image";

export default function Championship() {
  return (
    <section id="championship" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/10 via-[#0a0a0a] to-[#0a0a0a]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c9a84c]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] pulse-glow">
            <span className="text-xl">🏆</span>
            <span className="text-[#c9a84c] text-sm font-bold tracking-wider">CHAMPIONSHIP HIGHLIGHT</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/30 to-transparent rounded-3xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#c9a84c]/30 via-transparent to-[#c9a84c]/30 rounded-3xl blur-xl"></div>
              <div className="relative h-full rounded-3xl overflow-hidden border-2 border-[#c9a84c]/50">
                <Image src="/weightlifting.jpeg" alt="2022 Weightlifting Championship Victory" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            
            {/* Floating Gold Medal */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass px-4 py-3 md:px-6 md:py-4 rounded-2xl border border-[#c9a84c] float">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gold-gradient">🥇</div>
                <div className="text-xs md:text-sm text-gray-400">Gold Medal</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="gold-gradient">2022</span> Regional<br />
              Weightlifting Championship
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              A defining moment in my fitness journey. Competed against the region&apos;s strongest athletes and emerged victorious, securing the <span className="text-[#c9a84c] font-bold">Gold Medal</span> in the heavyweight division through dedication, discipline, and relentless training.
            </p>

            {/* Achievement Tags */}
            <div className="mb-6 md:mb-8">
              <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Key Achievement</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <span className="px-3 py-1.5 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-lg text-[#c9a84c] text-sm font-semibold">🥇 Gold Medalist</span>
                <span className="px-3 py-1.5 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-lg text-[#c9a84c] text-sm font-semibold">🏆 1st Position</span>
                <span className="px-3 py-1.5 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-lg text-[#c9a84c] text-sm font-semibold">💪 Heavyweight Division</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-3 rounded-xl bg-[#1a1a1a] border border-[#333]">
                <div className="text-xl md:text-2xl font-bold text-[#c9a84c]">🥇</div>
                <div className="text-xs text-gray-500">1 Gold Medal</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#1a1a1a] border border-[#333]">
                <div className="text-xl md:text-2xl font-bold text-[#c9a84c]">1st</div>
                <div className="text-xs text-gray-500">Position</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#1a1a1a] border border-[#333]">
                <div className="text-xl md:text-2xl font-bold text-[#c9a84c]">2022</div>
                <div className="text-xs text-gray-500">Championship Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
