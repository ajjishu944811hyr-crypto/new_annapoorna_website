#!/bin/bash
cd /home/ajay/Downloads/annapoorna-main/frontend
rm -f package-lock.json
npm install
git add package-lock.json
git commit -m "fix: update lockfile to permanently remove ajv"
git push
