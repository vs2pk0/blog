#!/usr/bin/env sh

# throw error
set -e

# build static
npm run build

cd vuepress

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
git push -f git@github.com:vs2pk0/vs2pk0.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:vs2pk0/<REPO>.git master:gh-pages


# git init
# git add -A
# git commit -m 'deploy'

# git push -f "https://godbmw:$CODING_TOKEN@git.dev.tencent.com/godbmw/godbmw.coding.me.git" master:master

# git push -f "https://godbmw:$GITHUB_TOKEN@github.com/vs2pk0/blog.git" master:gh-pages

# cd -

# rm -rf ./vuepress
