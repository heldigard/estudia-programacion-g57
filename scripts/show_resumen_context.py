from pathlib import Path

ROOT=Path('f:/EstudIA-Programacion')
nbdir=ROOT/'estudiantes'/'notebooks'
for nb in sorted(nbdir.glob('s*.ipynb')):
    t=nb.read_text(encoding='utf-8')
    idx=t.find('## 🎯 Resumen de la Sesión')
    if idx!=-1:
        print('\n---',nb.name,'---')
        start=max(0, idx-200)
        end=min(len(t), idx+600)
        print(t[start:end])
        print('--- end ---')
    # find next occurrences
    pos=idx
    while pos!=-1:
        pos=t.find('## 🎯 Resumen de la Sesión', pos+1)
        if pos!=-1:
            print('\n--- extra in',nb.name,'at',pos,'---')
            s=max(0,pos-200)
            e=min(len(t),pos+600)
            print(t[s:e])
            print('--- end ---')