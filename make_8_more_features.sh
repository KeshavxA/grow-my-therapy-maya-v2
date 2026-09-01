#!/bin/bash
for i in {47..54}
do
  echo "Feature $i" >> features.md
  git add features.md
  git commit -m "Feature $i: Adding feature $i"
done
git push origin main
