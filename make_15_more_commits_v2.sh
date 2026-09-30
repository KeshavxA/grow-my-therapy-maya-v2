#!/bin/bash
for i in {280..294}
do
  echo "Update $i" >> updates.md
  git add updates.md
  git commit -m "Change $i: Adding update $i"
done
git push origin main
