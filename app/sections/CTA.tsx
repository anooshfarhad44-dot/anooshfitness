"use client";

import { ArrowRightIcon } from "../components/Icons";

export default function CTA() {
  return (
    <section id="contact" className="py-12 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-dark rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center gradient-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Ready to <span className="gold-gradient">Transform?</span></h2>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">Join 50+ successful clients who have achieved their dream physique. Your transformation starts with a single message.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="#" className="gold-btn px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold inline-flex items-center justify-center gap-2">
                Get Started Now <ArrowRightIcon />
              </a>
              <a href="#transformations" className="px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold border border-[#333] text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all inline-flex items-center justify-center gap-2">
                See More Results
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
