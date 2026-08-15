import { images } from "../data/images";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.final}
          alt="Celebración en La Barca Eventos"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-end px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <h2 className="max-w-3xl font-serif text-[clamp(2.4rem,6vw,4.75rem)] leading-[1.05] text-ivory text-balance">
            Tu próximo gran recuerdo
            <br />
            empieza acá.
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <a
            href="#disponibilidad"
            className="mt-10 inline-flex w-fit border border-champagne bg-champagne/90 px-8 py-3.5 font-sans text-[11px] font-medium tracking-wide-label text-charcoal uppercase transition-all duration-500 hover:bg-champagne"
          >
            Consultar fecha
          </a>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-ivory/15 pt-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="font-sans text-[10px] tracking-editorial text-champagne uppercase">
                Dirección
              </p>
              <p className="mt-3 font-serif text-xl text-ivory/90">
                Guillermo Rawson 46
                <br />
                Pilar, Buenos Aires
              </p>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-editorial text-champagne uppercase">
                WhatsApp
              </p>
              <p className="mt-3 font-serif text-xl text-ivory/90">
                <a
                  href="https://wa.me/541141703713"
                  className="transition-colors hover:text-champagne"
                >
                  +54 11 4170-3713
                </a>
                <br />
                <a
                  href="https://wa.me/541151845077"
                  className="transition-colors hover:text-champagne"
                >
                  +54 11 5184-5077
                </a>
              </p>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-editorial text-champagne uppercase">
                Instagram
              </p>
              <p className="mt-3 font-serif text-xl text-ivory/90">
                <a
                  href="https://instagram.com/labarcaeventosok"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-champagne"
                >
                  @labarcaeventosok
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
