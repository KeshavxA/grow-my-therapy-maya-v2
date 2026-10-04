#!/bin/bash
for i in {342..353}
do
  echo "Update $i" >> updates.md
  git add updates.md
  git commit -m "Change $i: Adding update $i"
done
git push origin main
