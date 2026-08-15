const HEADER_OFFSET = 72;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** Elegant smooth scroll (~900–1100ms) for internal anchors */
export function smoothScrollTo(targetY: number, duration = 1000) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export function scrollToHash(hash: string, duration = 1000) {
  if (!hash || hash === "#") {
    smoothScrollTo(0, duration);
    return;
  }

  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  smoothScrollTo(Math.max(0, top), duration);
}

export function bindSmoothAnchors() {
  const onClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    // External / special links
    if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

    event.preventDefault();
    scrollToHash(href, 1050);
    history.pushState(null, "", href);
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
