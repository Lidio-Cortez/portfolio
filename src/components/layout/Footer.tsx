
export function Footer() {
  return (
    <footer className="px-6 lg:px-16 py-8 border-t border-white/5 text-xs font-mono text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <span>&lt;/&gt;</span>
        <span className="text-white font-bold">dev.folio</span>
      </div>
      <div>
        © 2026 — Engenharia com intenção.
      </div>
      <div className="flex items-center gap-6">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
    </footer>
  );
}