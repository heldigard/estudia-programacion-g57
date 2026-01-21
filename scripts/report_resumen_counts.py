from pathlib import Path

ROOT = Path('f:/EstudIA-Programacion')
nbdir = ROOT / 'estudiantes' / 'notebooks'
for nb in sorted(nbdir.glob('s*.ipynb')):
    t = nb.read_text(encoding='utf-8')
    count = t.count('## 🎯 Resumen de la Sesión')
    print(nb.name, count)