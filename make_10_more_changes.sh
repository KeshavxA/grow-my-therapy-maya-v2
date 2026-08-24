#!/bin/bash
git add app/layout.tsx
git commit -m "Fix layout.tsx: remove redundant weight for variable fonts"

for i in {19..28}
do
  echo "Update $i" >> updates.md
  git add updates.md
  git commit -m "Change $i: Adding update $i"
done
