"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/Icons";

const MAX_TRANSFORMATIONS = 20;

async function checkImageExists(src: string) {
  try {
    const response = await fetch(src, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
}

export default function Transformations() {
  const [transformations, setTransformations] = useState<Array<{ id: string; beforeImg: string; afterImg: string }>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadTransformations = async () => {
      const result: Array<{ id: string; beforeImg: string; afterImg: string }> = [];

      for (let i = 1; i <= MAX_TRANSFORMATIONS; i++) {
        const beforeImg = `/Transformations/t${i}Before.jpeg`;
        const afterImg = `/Transformations/t${i}After.jpeg`;

        const beforeExists = await checkImageExists(beforeImg);
        if (!beforeExists) break;

        const afterExists = await checkImageExists(afterImg);
        if (!afterExists) break;

        result.push({ id: `t${i}`, beforeImg, afterImg });
      }

      if (mounted) {
        setTransformations(result);
      }
    };

    loadTransformations();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlay || transformations.length === 0) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isAutoPlay, transformations.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const handleSelect = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  if (transformations.length === 0) {
    return (
      <section id="transformations" className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#ffffff10] bg-[#0f0f0f]/95 p-10 text-center text-gray-400">
            Loading client transformation pairs...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="transformations" className="py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#c9a84c] uppercase text-xs md:text-sm font-semibold tracking-[0.28em] mb-3">
            Client Transformations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Real client results from competition prep and physique coaching
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-3">
            Every client transformation is driven by consistency, discipline, and expert guidance.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#ffffff10] bg-[#0f0f0f]/95 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {transformations.map((item) => (
              <div key={item.id} className="min-w-full flex-shrink-0 p-4 md:p-6">
                <div className="rounded-[2rem] border border-[#ffffff10] bg-[#0f0f0f] shadow-[0_20px_50px_rgba(0,0,0,0.25)] h-full">
                  <div className="px-5 pt-5 pb-3 border-b border-white/10">
                    <p className="text-xs md:text-sm uppercase tracking-[0.24em] text-[#c9a84c]">Before & After</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-5">
                    <div className="relative overflow-hidden rounded-[1.25rem] bg-[#111] min-h-[12rem] border border-[#ffffff10] sm:min-h-[16rem] md:min-h-[20rem] md:rounded-[1.5rem]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/10 via-transparent to-transparent pointer-events-none" />
                      <Image
                        src={item.beforeImg}
                        alt={`${item.id} before`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 50vw"
                      />
                      <div className="absolute top-2 left-2 rounded-full bg-black/70 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-white font-semibold sm:top-4 sm:left-4 sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.28em]">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-[1.25rem] bg-[#111] min-h-[12rem] border border-[#ffffff10] sm:min-h-[16rem] md:min-h-[20rem] md:rounded-[1.5rem]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/10 via-transparent to-transparent pointer-events-none" />
                      <Image
                        src={item.afterImg}
                        alt={`${item.id} after`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 50vw"
                      />
                      <div className="absolute top-2 right-2 rounded-full bg-[#c9a84c] px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-black font-semibold sm:top-4 sm:right-4 sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.28em]">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] border border-[#ffffff10] text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon />
          </button>

          <div className="flex gap-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`h-2 rounded-full transition-all ${currentIndex === index ? "w-8 bg-[#c9a84c]" : "w-2 bg-[#333] hover:bg-[#555]"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] border border-[#ffffff10] text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
            aria-label="Next slide"
          >
            <ChevronRightIcon />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlay((prev) => !prev)}
            className={`px-4 py-2 rounded-full text-xs md:text-sm uppercase tracking-[0.24em] font-semibold transition-all ${
              isAutoPlay
                ? "bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/50"
                : "bg-[#1a1a1a] text-gray-400 border border-[#333]"
            }`}
          >
            {isAutoPlay ? "Auto Play: ON" : "Auto Play: OFF"}
          </button>
        </div>
      </div>
    </section>
  );
}
