import { images } from "../data/images";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const proposals = [
  {
    title: "Catering",
    text: "Propuesta personalizada según tu evento.",
    image: images.catering,
  },
  {
    title: "Ambientación",
    text: "Una atmósfera diseñada para tu celebración.",
    image: images.ambience,
  },
  {
    title: "Sonido & Iluminación",
    text: "Escenarios que acompañan cada momento.",
    image: images.lighting,
  },
  {
    title: "Espacio",
    text: "Un salón exclusivo listo para tu identidad.",
    image: images.venue,
  },
  {
    title: "Entretenimiento",
    text: "Experiencias que elevan la noche.",
    image: images.entertainment,
  },
  {
    title: "Estacionamiento",
    text: "Comodidad para vos y tus invitados.",
    image: images.parking,
  },
];

export function Proposals() {
  return (
    <section id="propuestas" className="bg-ivory py-24 text-charcoal md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal>
          <SectionHeading
            number="03 — Propuestas"
            title="Todo lo que necesitás para celebrar."
            description="Propuestas pensadas para que puedas disfrutar de tu evento sin ocuparte de cada detalle."
            light
          />
        </Reveal>

        <div className="mt-16 space-y-0 border-t border-charcoal/10 md:mt-20">
          {proposals.map((item, index) => (
            <Reveal key={item.title}>
              <article
                className={`group grid grid-cols-1 items-center gap-8 border-b border-charcoal/10 py-10 md:grid-cols-12 md:gap-10 md:py-12 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-5">
                  <p className="font-sans text-[10px] font-medium tracking-editorial text-champagne-deep uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <div className="img-zoom aspect-[16/9] md:aspect-[2/1]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="grayscale-[20%] transition-[filter] duration-700 group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex justify-start md:mt-16">
            <a
              href="#disponibilidad"
              className="inline-flex items-center border border-charcoal/25 px-7 py-3.5 font-sans text-[11px] font-medium tracking-wide-label text-charcoal uppercase transition-all duration-500 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
            >
              Ver propuestas
              <span className="ml-3" aria-hidden>
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
