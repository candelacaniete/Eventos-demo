import { images } from "../data/images";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { label: "Capacidad", value: "Espacio versátil" },
  { label: "Formato", value: "Espacio exclusivo" },
  { label: "Servicio", value: "Catering integral" },
  { label: "Acceso", value: "Estacionamiento" },
  { label: "Ubicación", value: "Pilar" },
];

export function SpaceSection() {
  return (
    <section id="espacio" className="bg-charcoal py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal>
          <SectionHeading
            number="01 — El espacio"
            title="Un espacio pensado para celebrar."
            description="La Barca combina un salón moderno, espacios versátiles y una propuesta integral para que cada evento tenga su propia identidad."
          />
        </Reveal>

        {/* Editorial image composition */}
        <div className="mt-16 grid grid-cols-12 gap-4 md:mt-20 md:gap-5 lg:gap-6">
          <Reveal className="col-span-12 md:col-span-7 lg:col-span-8">
            <div className="img-zoom aspect-[4/5] md:aspect-[5/4] lg:aspect-[16/11]">
              <img
                src={images.spaceMain}
                alt="Mesas preparadas en el salón"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="col-span-12 flex flex-col gap-4 md:col-span-5 md:gap-5 lg:col-span-4 lg:gap-6">
            <Reveal delay={1} className="flex-1">
              <div className="img-zoom aspect-[4/3] h-full min-h-[220px] md:aspect-auto">
                <img
                  src={images.spaceSide1}
                  alt="Detalle de cena elegante"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={2} className="flex-1">
              <div className="img-zoom aspect-[4/3] h-full min-h-[220px] md:aspect-auto">
                <img
                  src={images.spaceSide2}
                  alt="Celebración en el salón"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Editorial facts row */}
        <Reveal delay={1}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ivory/10 pt-12 sm:grid-cols-3 md:mt-20 md:grid-cols-5 md:gap-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="font-sans text-[10px] font-medium tracking-editorial text-champagne uppercase">
                  {fact.label}
                </p>
                <p className="mt-3 font-serif text-xl text-ivory md:text-2xl">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
