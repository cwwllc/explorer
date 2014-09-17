if [ ! -d "deploy" ]; then
    git clone git@github.com:GovWizely/explorer.git deploy
fi

cd deploy
git checkout gh-pages
git pull
cd ..

ember build --environment production
cd dist
cp -r `ls -1 | grep -v -E 'test'` ../deploy

cd ../deploy
git commit -am 'Updated.'
git push origin gh-pages
