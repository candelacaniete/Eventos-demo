import { useEffect, useState } from "react";

const navItems = [
  { label: "Espacio", href: "#espacio" },
  { label: "Propuestas", href: "#propuestas" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled || open
          ? "bg-charcoal/95 backdrop-blur-[2px] border-b border-ivory/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
        <a href="#inicio" className="group relative z-50 block">
          <span className="block font-serif text-[1.35rem] leading-none tracking-[0.22em] text-ivory">
            LA BARCA
          </span>
          <span className="mt-1 block font-sans text-[9px] font-medium tracking-[0.42em] text-champagne uppercase">
            Eventos
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[11px] font-medium tracking-wide-label text-ivory/75 uppercase transition-colors duration-500 hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#disponibilidad"
            className="hidden border border-champagne/50 px-5 py-2.5 font-sans text-[10px] font-medium tracking-wide-label text-ivory uppercase transition-all duration-500 hover:border-champagne hover:bg-champagne/10 md:inline-block"
          >
            Consultar fecha
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-px w-5 bg-ivory transition-transform duration-500 ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-ivory transition-opacity duration-500 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-ivory transition-transform duration-500 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-opacity duration-700 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-8 pb-12 pt-28">
          <nav className="flex flex-col gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-ivory/90 transition-colors hover:text-champagne"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div>
            <a
              href="#disponibilidad"
              onClick={() => setOpen(false)}
              className="inline-block border border-champagne/60 px-6 py-3 font-sans text-[11px] tracking-wide-label text-ivory uppercase"
            >
              Consultar fecha
            </a>
            <p className="mt-8 font-sans text-[11px] tracking-wide-label text-beige/50 uppercase">
              Pilar · Buenos Aires
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
