import { useEffect, useRef, useState } from "react";
import { scrollToHash } from "../lib/smoothScroll";

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
  const scrollYRef = useRef(0);
  const skipRestoreRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    scrollYRef.current = window.scrollY;
    const { style } = document.body;
    style.position = "fixed";
    style.top = `-${scrollYRef.current}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      style.overflow = "";
      if (!skipRestoreRef.current) {
        window.scrollTo(0, scrollYRef.current);
      }
      skipRestoreRef.current = false;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navigateFromMenu = (href: string) => {
    skipRestoreRef.current = true;
    const y = scrollYRef.current;

    // Unlock immediately so smooth scroll works from the real page position
    const { style } = document.body;
    style.position = "";
    style.top = "";
    style.left = "";
    style.right = "";
    style.width = "";
    style.overflow = "";
    window.scrollTo(0, y);

    setOpen(false);
    requestAnimationFrame(() => {
      scrollToHash(href, 1050);
      history.pushState(null, "", href);
    });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-[background-color,border-color] duration-500 ${
          scrolled || open
            ? "border-b border-ivory/[0.06] bg-charcoal/97"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
          <a
            href="#inicio"
            className="relative block"
            onClick={(e) => {
              if (open) {
                e.preventDefault();
                navigateFromMenu("#inicio");
              }
            }}
          >
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
                className="font-sans text-[11px] font-medium tracking-wide-label text-ivory/80 uppercase transition-colors duration-500 hover:text-ivory"
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
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className={`relative flex h-11 w-11 items-center justify-center transition-colors duration-500 lg:hidden ${
                open ? "border border-ivory/25" : "border border-transparent"
              }`}
            >
              {open ? (
                <span className="relative block h-5 w-5" aria-hidden>
                  <span className="absolute left-0 top-1/2 h-px w-5 origin-center -translate-y-1/2 rotate-45 bg-ivory" />
                  <span className="absolute left-0 top-1/2 h-px w-5 origin-center -translate-y-1/2 -rotate-45 bg-ivory" />
                </span>
              ) : (
                <span className="flex flex-col items-center gap-[6px]" aria-hidden>
                  <span className="block h-px w-5 bg-ivory" />
                  <span className="block h-px w-5 bg-ivory" />
                  <span className="block h-px w-5 bg-ivory" />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-charcoal transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-dvh max-h-dvh flex-col overflow-x-hidden overflow-y-auto overscroll-contain px-8 pb-10 pt-28">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigateFromMenu(item.href);
                }}
                className="font-serif text-[2rem] leading-none tracking-wide text-ivory transition-colors duration-500 hover:text-champagne"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-12">
            <a
              href="#disponibilidad"
              onClick={(e) => {
                e.preventDefault();
                navigateFromMenu("#disponibilidad");
              }}
              className="inline-block border border-champagne/55 px-7 py-3.5 font-sans text-[11px] tracking-wide-label text-ivory uppercase transition-colors duration-500 hover:border-champagne"
            >
              Consultar fecha
            </a>
            <p className="mt-8 font-sans text-[11px] tracking-wide-label text-beige/60 uppercase">
              Pilar · Buenos Aires
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
