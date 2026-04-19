import Image from "next/image";

const galleryItems = [
  {
    id: "moment-1",
    src: "/My%20Moments/m1.jpeg",
    title: "Bodybuilding Focus",
    description: "A strong physique, confident posture, and real training progress captured in every frame.",
  },
  {
    id: "moment-2",
    src: "/My%20Moments/2.jpeg",
    title: "Photoshoot Glow",
    description: "Premium shoot styling, sharp lighting, and a polished look that reflects hard work.",
  },
];

export default function MyMoments() {
  return (
    <section id="my-moments" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.12),_transparent_55%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[#c9a84c] uppercase text-xs md:text-sm font-semibold tracking-[0.28em] mb-3">
            My Moments
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Bodybuilding and photoshoot highlights from my personal journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-4">
            Built on consistency, hard work, and coaching guidance — this gallery shows the physique, the polish, and the progress.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-[2rem] border border-[#ffffff14] bg-[#0f0f0f]/95 shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-[#111]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  loading="eager"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 top-4 flex justify-center px-5">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.3em] font-semibold text-[#c9a84c]">
                    {item.title}
                  </span>
                </div>
              </div>
              <div className="px-5 py-6">
                <p className="text-gray-300 text-sm leading-7">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
