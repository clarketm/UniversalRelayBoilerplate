#!/bin/bash

# https://medium.com/@brindelle/format-your-javascript-with-prettier-before-committing-177079ec356a

echo 🦋  Apply perttier to:
git diff --name-only HEAD | grep -v '^deployment/' | grep -v '^public/' | grep -v '.json$' | grep ".*\.jsx\?"
git diff --name-only HEAD | grep -v '^deployment/' | grep -v '^public/' | grep -v '.json$' | grep ".*\.jsx\?" | xargs ./node_modules/.bin/prettier --write --trailing-comma all --no-semi --single-quote --parser babylon --print-width 100
git add .
echo 🏁
