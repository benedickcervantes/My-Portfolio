/** Smooth-scroll under the fixed header with a balanced offset. */
export function scrollToSection(sectionId, { onDone } = {}) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const header = document.querySelector('header');
  const headerHeight = header?.getBoundingClientRect().height ?? 72;
  const sectionTop =
    section.getBoundingClientRect().top + window.scrollY;

  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onDone?.();
    return;
  }

  // Keep a bit of section padding visible — not flush to the title,
  // not the full empty pad under the header.
  const padTop = parseFloat(getComputedStyle(section).paddingTop) || 56;
  const top = sectionTop - headerHeight + padTop * 0.45;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  });

  onDone?.();
}
