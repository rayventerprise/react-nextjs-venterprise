// Runs before paint. Two jobs:
//
// 1. Set the initial theme class, so there's no flash of the wrong theme.
//    Reads a saved preference, falling back to the OS setting.
// 2. Mark the document as JS-capable. The scroll-reveal animation starts at
//    opacity 0 and is only un-hidden by an IntersectionObserver, so without
//    this flag anything that renders the page without running JS — a crawler
//    that snapshots before hydration, a reader-mode view — would capture the
//    below-the-fold content as invisible. Gating the hidden state on `.js`
//    means no-JS renders show everything.
export function ThemeScript() {
  const script = `
    (function () {
      document.documentElement.classList.add('js');
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDark = stored ? stored === 'dark' : prefersDark;
        document.documentElement.classList.toggle('dark', isDark);
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
