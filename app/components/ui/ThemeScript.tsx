// Sets the initial theme class before paint to avoid a flash of the wrong theme.
// Reads a saved preference, falling back to the OS setting.
export function ThemeScript() {
  const script = `
    (function () {
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
