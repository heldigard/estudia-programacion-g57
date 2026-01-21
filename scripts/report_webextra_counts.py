from pathlib import Path

ROOT=Path('f:/EstudIA-Programacion')
nbdir=ROOT/'estudiantes'/'notebooks'
for nb in sorted(nbdir.glob('s*.ipynb')):
    t=nb.read_text(encoding='utf-8')
    print(nb.name, t.count('## 🌐 WEB EXTRA'))