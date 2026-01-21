import re
from pathlib import Path

ROOT = Path('f:/EstudIA-Programacion')
NOTEBOOKS = ROOT / 'estudiantes' / 'notebooks'

pattern_cell = re.compile(r"(<VSCode.Cell.*?>)([\s\S]*?)(</VSCode.Cell>)", re.MULTILINE)

modified = []

for nb in sorted(NOTEBOOKS.glob('s*.ipynb')):
    text = nb.read_text(encoding='utf-8')
    cells = list(pattern_cell.finditer(text))
    resumen_cells = [m for m in cells if '## 🎯 Resumen de la Sesión' in m.group(2)]
    if len(resumen_cells) > 1:
        # Keep first, remove others
        to_remove = resumen_cells[1:]
        new_text = text
        for m in to_remove:
            new_text = new_text.replace(m.group(0), '')
        if new_text != text:
            nb.write_text(new_text, encoding='utf-8')
            modified.append(nb.name)

print('Modified notebooks:', modified)