#!/bin/bash
for i in {37..46}
do
  echo "Update $i" >> updates.md
  git add updates.md
  git commit -m "Change $i: Adding update $i"
done
git push origin main
