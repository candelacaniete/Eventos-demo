import { images } from "../data/images";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Salón de eventos La Barca iluminado"
          fetchPriority="high"
          decoding="async"
          className="img-kenburns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/30" />
        <div className="absolute inset-0 bg-charcoal/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
        <Reveal>
          <p className="mb-6 font-sans text-[11px] font-medium tracking-editorial text-champagne uppercase">
            La Barca Eventos
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="max-w-3xl font-serif text-[clamp(2.75rem,7.5vw,5.75rem)] font-normal leading-[0.98] tracking-tight text-ivory text-balance">
            Momentos que merecen
            <br />
            <em className="not-italic text-ivory/90">ser inolvidables.</em>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-beige/90 md:text-[16px]">
            Un espacio exclusivo en Pilar para celebrar, compartir y crear
            recuerdos que quedan.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="#disponibilidad"
              className="inline-flex items-center justify-center border border-champagne bg-champagne/90 px-8 py-3.5 font-sans text-[11px] font-medium tracking-wide-label text-charcoal uppercase transition-all duration-500 hover:bg-champagne"
            >
              Consultar disponibilidad
            </a>
            <a
              href="#espacio"
              className="inline-flex items-center justify-center px-2 py-3.5 font-sans text-[11px] font-medium tracking-wide-label text-ivory/85 uppercase transition-colors duration-500 hover:text-champagne"
            >
              Conocer el espacio
              <span className="ml-3 text-champagne" aria-hidden>
                →
              </span>
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ivory/15 pt-6 md:mt-20">
          <p className="font-sans text-[10px] font-medium tracking-editorial text-beige/75 uppercase">
            Pilar · Buenos Aires
          </p>
          <span className="hidden h-px w-8 bg-champagne/40 sm:block" />
          <p className="font-sans text-[10px] font-medium tracking-editorial text-beige/75 uppercase">
            Eventos sociales & corporativos
          </p>
        </div>
      </div>
    </section>
  );
}
