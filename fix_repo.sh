#!/bin/bash
mv frontend/* .
mv frontend/.* . 2>/dev/null
rm -rf frontend backend api vercel.json
git add .
git commit -m "Moved React app to root for perfect Vercel deployment"
git push
