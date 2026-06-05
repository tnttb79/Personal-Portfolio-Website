// Smooth-scroll to a section, respecting reduced-motion preferences.
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return false;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  el.scrollIntoView({
    behavior: prefersReduced ? "auto" : "smooth",
    block: "start",
  });
  return true;
}

// Smooth-scroll back to the top of the page, respecting reduced-motion.
export function scrollToTop() {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
}
