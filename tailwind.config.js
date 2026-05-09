/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        nexus: {
          surface: 'var(--color-surface)',
          surfaceCard: 'var(--color-surface-card)',
          primary: 'var(--color-primary)',
          primaryHover: 'var(--color-primary-hover)',
          base: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          border: 'var(--color-border)'
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: ['Cabinet Grotesk', 'sans-serif']
      },
      boxShadow: {
        'nexus-card': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        'nexus-float': '0 8px 30px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  // Klassen, die per Template-String dynamisch zusammengesetzt werden und der
  // JIT-Scanner sonst nicht erkennt (z. B. bg-emerald-600 nur in Heatmap-aktiv-
  // Branch). Konservativ, damit nichts visuell fehlt.
  safelist: [
    'bg-emerald-600', 'text-white',
    'bg-orange-500', 'bg-sky-500', 'bg-purple-600',
    'bg-red-50', 'bg-red-100', 'bg-red-500', 'border-red-300', 'text-red-600', 'text-red-700', 'text-red-900',
    'bg-yellow-50', 'border-yellow-500', 'text-yellow-800', 'text-yellow-900',
    'bg-amber-50', 'border-amber-500', 'border-amber-300', 'text-amber-600', 'text-amber-900',
    'bg-blue-50', 'border-blue-400', 'text-blue-900',
    'bg-purple-50', 'border-purple-200', 'border-purple-400', 'text-purple-900',
    'bg-orange-500',
    'border-l-4',
    { pattern: /bg-(red|amber|orange|sky|emerald|blue|purple|nexus)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /text-(red|amber|orange|sky|emerald|blue|purple|nexus)-(50|100|200|300|400|500|600|700|800|900)/ }
  ],
  plugins: []
};
