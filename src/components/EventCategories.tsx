import { images } from "../data/images";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const categories = [
  {
    title: "Casamientos",
    image: images.wedding,
    href: "#disponibilidad",
  },
  {
    title: "15 Años",
    image: images.quince,
    href: "#disponibilidad",
  },
  {
    title: "Cumpleaños",
    image: images.birthday,
    href: "#disponibilidad",
  },
  {
    title: "Infantiles",
    image: images.kids,
    href: "#disponibilidad",
  },
  {
    title: "Corporativos",
    image: images.corporate,
    href: "#disponibilidad",
  },
  {
    title: "Bautismos & Comuniones",
    image: images.baptism,
    href: "#disponibilidad",
  },
];

export function EventCategories() {
  return (
    <section id="galeria" className="bg-stone py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal>
          <SectionHeading
            number="02 — Tu momento"
            title="¿Qué estás celebrando?"
            description="Elegí el tipo de evento y descubrí una propuesta pensada para esa ocasión."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) as 0 | 1 | 2}>
              <a
                href={cat.href}
                className="group relative block aspect-[3/4] overflow-hidden sm:aspect-[4/5]"
              >
                <div className="img-zoom absolute inset-0">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-charcoal/10 transition-opacity duration-700 group-hover:from-charcoal/95" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-serif text-2xl text-ivory md:text-3xl">
                    {cat.title}
                  </h3>
                  <p className="mt-3 max-h-0 overflow-hidden font-sans text-[11px] font-medium tracking-wide-label text-champagne uppercase opacity-0 transition-all duration-700 group-hover:max-h-8 group-hover:opacity-100">
                    Conocer propuesta →
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
