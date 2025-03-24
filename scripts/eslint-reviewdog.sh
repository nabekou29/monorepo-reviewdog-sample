#!/bin/sh

# config がない場合はスキップ
if [ ! -f "eslint.config.mjs" ]; then
    echo "Skip eslint"
    exit 0
fi

echo "Run eslint ${PNPM_PACKAGE_NAME}"

# PNPM_PACKAGE_NAME は pnpm exec で実行したときに取得できる
pnpm exec eslint -f=rdjson | reviewdog -f=rdjson -name=eslint-${PNPM_PACKAGE_NAME} -reporter=${REVIEWDOG_REPORTER:-'github-pr-review'}
