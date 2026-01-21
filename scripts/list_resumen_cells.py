import re
from pathlib import Path

ROOT=Path('f:/EstudIA-Programacion')
nbdir=ROOT/'estudiantes'/'notebooks'
pattern=re.compile(r'(<VSCode.Cell[^>]*language="markdown">)([\s\S]*?)(</VSCode.Cell>)')
for nb in sorted(nbdir.glob('s*.ipynb')):
    text=nb.read_text(encoding='utf-8')
    cells=pattern.finditer(text)
    found=[]
    for m in cells:
        body=m.group(2)
        if '## 🎯 Resumen de la Sesión' in body:
            found.append(body.strip()[:200])
    if found:
        print(nb.name, 'occurrences:', len(found))
        for i, snippet in enumerate(found,1):
            print('--- cell',i,'snippet start ---')
            print(snippet)
            print('--- end ---\n')