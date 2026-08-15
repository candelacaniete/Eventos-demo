/** Persistent elegant WhatsApp CTA — mobile first */
export function WhatsAppBar() {
  return (
    <div className="wa-bar fixed inset-x-0 bottom-0 z-50 border-t border-ivory/10 bg-charcoal/97 px-4 pt-3 md:hidden">
      <a
        href="https://wa.me/541141703713"
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center justify-center gap-3 border border-champagne/45 py-3.5 font-sans text-[11px] font-medium tracking-wide-label text-ivory uppercase transition-colors active:bg-champagne/10"
      >
        <span className="text-champagne" aria-hidden>
          ●
        </span>
        Consultar por WhatsApp
      </a>
    </div>
  );
}
