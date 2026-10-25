"""Conteo de temas del análisis 2026-10-25-1130-feedback-alternativa-pastelerias.md
Uso: python3 -I 2026-10-25-1130-feedback-alternativa-pastelerias.py <ruta al CSV de product/data/>
El etiquetado es manual (criterio en el análisis); este script solo cuenta."""
import csv, sys
from collections import Counter

TAGS = {  # id -> temas (solo entradas en alcance)
 'C02':['F1'],'C03':['F1','F5'],'C04':['F1','F5'],'C06':['F1','F3'],'C07':['F1'],'C09':['F1'],
 'C10':['F2','F3','F4'],'C11':['F1','F5'],'C12':['F2','F3','F4'],'C13':['F7'],'C17':['F1','F5'],
 'C19':['F1'],'C26':['F1'],'C29':['F1','F5'],'C31':['F1','F5'],'C32':['F1'],'C33':['F7'],
 'C34':['F1','F5'],'C35':['F1','F6'],'C36':['F1'],'C37':['F1','F5','F6'],'C38':['F1','F5','F6'],
}
rows = list(csv.DictReader(open(sys.argv[1], encoding='utf-8')))
loc = {r['id']: r['local'].split(' (')[0] for r in rows}
n_in = len(TAGS)
print(f"corpus={len(rows)} en_alcance={n_in} fuera={len(rows)-n_in}")
print("en alcance por local:", dict(Counter(loc[k] for k in TAGS)))
c = Counter(t for v in TAGS.values() for t in v)
for t in sorted(c):
    por_local = Counter(loc[k] for k, v in TAGS.items() if t in v)
    print(f"{t}: {c[t]} ({round(100*c[t]/n_in)}%)  {dict(por_local)}")
