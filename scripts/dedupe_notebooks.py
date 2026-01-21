import json
from pathlib import Path

ROOT=Path('f:/EstudIA-Programacion')
NB_DIR=ROOT/'estudiantes'/'notebooks'

modified=[]

for nb_path in sorted(NB_DIR.glob('s*.ipynb')):
    with nb_path.open('r', encoding='utf-8') as f:
        data=json.load(f)

    cells=data.get('cells', data.get('worksheets', []))
    resumen_indices=[i for i,c in enumerate(cells) if c.get('cell_type')=='markdown' and any('## 🎯 Resumen de la Sesión' in s for s in c.get('source', []))]
    webextra_indices=[i for i,c in enumerate(cells) if c.get('cell_type')=='markdown' and any('## 🌐 WEB EXTRA' in s for s in c.get('source', []))]

    changed=False
    if len(resumen_indices)>1:
        # remove all but the first (from end to start to keep indices valid)
        for i in reversed(resumen_indices[1:]):
            cells.pop(i)
            changed=True
        print(f"{nb_path.name}: removed {len(resumen_indices)-1} duplicate 'Resumen' cells")

    if len(webextra_indices)>1:
        for i in reversed(webextra_indices[1:]):
            cells.pop(i)
            changed=True
        print(f"{nb_path.name}: removed {len(webextra_indices)-1} duplicate 'WEB EXTRA' cells")

    if changed:
        data['cells']=cells
        with nb_path.open('w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=1)
        modified.append(nb_path.name)

print('Modified notebooks:', modified)