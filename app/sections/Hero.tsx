"use client";

import Image from "next/image";
import { TrophyIcon, ArrowRightIcon } from "../components/Icons";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c9a84c]/10 via-[#0a0a0a] to-[#0a0a0a]"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="fade-in-up order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 mb-4 md:mb-6">
              <TrophyIcon />
              <span className="text-[#c9a84c] text-xs md:text-sm font-semibold">Certified Fitness Champion</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Transform Your <span className="gold-gradient">Body</span>.<br className="hidden sm:block" />
              Transform Your <span className="gold-gradient">Life</span>.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Anoosh Farhad</span>, certified weightlifting champion & fitness model with 7+ years of experience. I&apos;ve helped <span className="text-[#c9a84c] font-semibold">50+ clients</span> worldwide achieve their dream physique through personalized training and nutrition coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#contact" className="gold-btn px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold inline-flex items-center justify-center gap-2">
                Start Your Journey <ArrowRightIcon />
              </a>
              <a href="#transformations" className="px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold border border-[#333] text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all inline-flex items-center justify-center gap-2">
                View Results
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/20 to-transparent rounded-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#c9a84c]/20 via-transparent to-[#c9a84c]/20 rounded-3xl blur-xl"></div>
              <div className="relative h-full rounded-3xl overflow-hidden bg-[#1a1a1a] border border-[#333] group hover:border-[#c9a84c]/50 transition-all">
                <Image 
                  src="/mainImg.png" 
                  alt="Anoosh Farhad - Fitness Champion & Model"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
            {/* Animated Stats Stack */}
            <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 flex flex-col gap-2">
              {/* Gold Badge */}
              <div className="glass px-3 py-2 md:px-4 md:py-3 rounded-xl border border-[#c9a84c]/50 flex items-center gap-2 md:gap-3 pulse-glow">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c96d] flex items-center justify-center text-black text-sm md:text-lg">🥇</div>
                <div>
                  <div className="text-[10px] md:text-xs text-[#c9a84c] font-bold">CHAMPION</div>
                  <div className="text-xs md:text-sm font-bold text-white">Weightlifting</div>
                </div>
              </div>
              {/* Clients Badge */}
              <div className="glass px-3 py-2 md:px-4 md:py-3 rounded-xl border border-[#c9a84c]/30 flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] text-sm md:text-lg">👥</div>
                <div>
                  <div className="text-[10px] md:text-xs text-gray-400">CLIENTS</div>
                  <div className="text-xs md:text-sm font-bold text-white">50+ Worldwide</div>
                </div>
              </div>
            </div>

            {/* Experience Ring */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c96d] flex items-center justify-center rotate-slow">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center">
                <span className="text-lg md:text-xl font-bold text-white">7+</span>
                <span className="text-[8px] md:text-[10px] text-gray-400">Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
