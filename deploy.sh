#!/usr/bin/env sh

# abort on errors

cd front
npm run build
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll
cd ..

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jediborre/ksp.git main:gh-pages

cd -