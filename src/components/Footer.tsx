export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-charcoal pb-28 pt-16 md:pb-16 md:pt-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-[0.18em] text-ivory">
              LA BARCA
            </p>
            <p className="mt-1 font-sans text-[10px] font-medium tracking-[0.35em] text-champagne uppercase">
              Eventos
            </p>
            <p className="mt-6 font-sans text-[12px] tracking-wide-label text-beige/70 uppercase">
              Pilar · Buenos Aires
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Eventos", href: "#galeria" },
              { label: "Propuestas", href: "#propuestas" },
              { label: "Galería", href: "#experiencias" },
              { label: "Contacto", href: "#disponibilidad" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[11px] font-medium tracking-wide-label text-ivory/75 uppercase transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-8">
            <a
              href="https://instagram.com/labarcaeventosok"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[11px] font-medium tracking-wide-label text-ivory/75 uppercase transition-colors hover:text-champagne"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/541141703713"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[11px] font-medium tracking-wide-label text-ivory/75 uppercase transition-colors hover:text-champagne"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[11px] text-beige/55">
            © 2026 La Barca Eventos
          </p>
          <p className="font-sans text-[11px] text-beige/50">
            Demo visual · Presentación comercial
          </p>
        </div>
      </div>
    </footer>
  );
}
