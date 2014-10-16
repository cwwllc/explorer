#!/usr/bin/env bash

# Taken from:
# https://github.com/nathanhammond/ember-flows-generator/blob/master/deploy.sh

# Make sure we're in a good state.
git checkout master
git pull --rebase
rm -rf dist
ember build --environment production

# Move to the "release" branch and make everything work.
git checkout gh-pages
git pull --rebase
ls -1 | grep -v -E '^dist|bower_components|node_modules|tmp$' | xargs rm -rf
mv dist/* ./
rmdir dist

# Add everything and push it.
git commit -am "Update."
git push origin gh-pages
git checkout master
