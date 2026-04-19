"use client";

import Image from "next/image";
import { ArrowRightIcon } from "../components/Icons";

export default function CompetitionPrep() {
  return (
    <section id="competition-prep" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c9a84c]/10 via-[#0a0a0a] to-[#0a0a0a]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 mb-4 md:mb-6">
            <span className="text-lg">🎯</span>
            <span className="text-[#c9a84c] text-xs md:text-sm font-semibold">Competition Ready</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Natural Bodybuilding &<br /><span className="gold-gradient">Competition Prep</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Specialized coaching for natural bodybuilding competitions. From off-season bulk to stage-ready conditioning - I guide you through every phase.</p>
        </div>

        {/* Before/After Transformations */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Transformation 1 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-center">Transformation 1</h3>
            <div className="grid grid-cols-2 gap-3">
              {/* Before */}
              <div className="relative group">
                <div className="card-dark rounded-xl overflow-hidden border-2 border-[#333] group-hover:border-gray-500 transition-all">
                  <div className="relative aspect-[3/4] bg-[#1a1a1a]">
                    <Image src="/prep1Before.jpeg" alt="Before - Competition Prep Starting Point" fill className="object-contain" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-1 bg-gray-700/80 text-white text-xs font-bold rounded">BEFORE</div>
                </div>
              </div>
              {/* After */}
              <div className="relative group">
                <div className="card-dark rounded-xl overflow-hidden border-2 border-[#c9a84c]/50 group-hover:border-[#c9a84c] transition-all shadow-lg shadow-[#c9a84c]/10">
                  <div className="relative aspect-[3/4] bg-[#1a1a1a]">
                    <Image src="/prep1After.jpeg" alt="After - Competition Ready Physique" fill className="object-contain" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#c9a84c] text-black text-xs font-bold rounded">AFTER</div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center">Off-season bulk to competition-ready conditioning</p>
          </div>

          {/* Transformation 2 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-center">Transformation 2</h3>
            <div className="grid grid-cols-2 gap-3">
              {/* Before */}
              <div className="relative group">
                <div className="card-dark rounded-xl overflow-hidden border-2 border-[#333] group-hover:border-gray-500 transition-all">
                  <div className="relative aspect-[3/4] bg-[#1a1a1a]">
                    <Image src="/prep2Before.jpeg" alt="Before - Starting Physique" fill className="object-contain" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-1 bg-gray-700/80 text-white text-xs font-bold rounded">BEFORE</div>
                </div>
              </div>
              {/* After */}
              <div className="relative group">
                <div className="card-dark rounded-xl overflow-hidden border-2 border-[#c9a84c]/50 group-hover:border-[#c9a84c] transition-all shadow-lg shadow-[#c9a84c]/10">
                  <div className="relative aspect-[3/4] bg-[#1a1a1a]">
                    <Image src="/prep2After.jpeg" alt="After - Stage Ready Peak Condition" fill className="object-contain" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#c9a84c] text-black text-xs font-bold rounded">AFTER</div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center">Complete physique overhaul for competition stage</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <a href="#contact" className="gold-btn px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold inline-flex items-center justify-center gap-2">
            Start Your Prep Journey <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
