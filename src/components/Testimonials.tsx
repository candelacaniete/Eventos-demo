import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "El lugar, la atención y la organización fueron increíbles. Todo salió mejor de lo que imaginábamos.",
    author: "Familia de evento",
  },
  {
    quote:
      "Desde el primer contacto se sintió personalizado. La noche fue exactamente como la soñamos.",
    author: "Pareja de casamiento",
  },
  {
    quote:
      "Iluminación, ambientación y servicio impecables. Nuestros invitados no paran de hablar del lugar.",
    author: "Celebración de 15",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-charcoal-soft py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal>
          <SectionHeading
            number="05 — Voces"
            title="Lo que se recuerda después."
            description="Momentos vividos en La Barca, contados por quienes los celebraron."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-ivory/10 pt-14 md:mt-20 md:grid-cols-3 md:gap-10 lg:gap-16">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} delay={(i as 0 | 1 | 2)}>
              <figure className="flex h-full flex-col">
                <p
                  className="font-sans text-[11px] tracking-[0.35em] text-champagne"
                  aria-label="5 estrellas"
                >
                  ★★★★★
                </p>
                <blockquote className="mt-6 flex-1">
                  <p className="font-serif text-[1.35rem] leading-snug text-ivory/90 md:text-[1.45rem]">
                    “{item.quote}”
                  </p>
                </blockquote>
                <figcaption className="mt-8 border-t border-ivory/10 pt-5 font-sans text-[11px] font-medium tracking-wide-label text-beige/60 uppercase">
                  — {item.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
