import { images } from "../data/images";
import { Reveal } from "./Reveal";

const moments = [
  {
    image: images.experience1,
    quote: "15 años que se recuerdan para siempre.",
    align: "left" as const,
  },
  {
    image: images.experience2,
    quote: "Una noche para celebrar.",
    align: "right" as const,
  },
  {
    image: images.experience3,
    quote: "Un encuentro para compartir.",
    align: "left" as const,
  },
  {
    image: images.experience4,
    quote: "Cualquier ocasión puede convertirse en un gran recuerdo.",
    align: "right" as const,
  },
];

export function Experiences() {
  return (
    <section id="experiencias" className="relative isolate bg-charcoal">
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
        <Reveal>
          <p className="mb-5 font-sans text-[11px] font-medium tracking-editorial text-champagne uppercase">
            04 — Experiencias
          </p>
          <h2 className="max-w-xl font-serif text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.12] text-ivory">
            Celebraciones que se sienten.
          </h2>
        </Reveal>
      </div>

      <div className="relative z-0">
        {moments.map((moment) => (
          <article
            key={moment.quote}
            className="relative isolate min-h-[min(70vh,640px)] overflow-hidden md:min-h-[min(78vh,780px)]"
          >
            <div className="absolute inset-0">
              <img
                src={moment.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/35" />
            </div>
            <div
              className={`relative z-10 mx-auto flex min-h-[min(70vh,640px)] max-w-[1440px] items-end px-5 py-16 md:min-h-[min(78vh,780px)] md:px-10 md:py-24 lg:px-14 ${
                moment.align === "right" ? "justify-end text-right" : ""
              }`}
            >
              <Reveal variant="fade">
                <blockquote className="max-w-xl">
                  <p className="font-serif text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.15] text-ivory text-balance">
                    “{moment.quote}”
                  </p>
                </blockquote>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
