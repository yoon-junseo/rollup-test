# react-package-template

- Template for react library package

## consisted of

- react

- typescript

- rollup

- storybook

- eslint

- prettier

## usage

- node >= 16
- for ui library -> use storybook
- for library -> remove storybook

## how to publish

1. export files

```
// src/index.ts
// export files here
export { default as Button } from '~~`;
export { default as Radio } from '~~';
export const colors = { ... };
```

2. set token at github repository or make .npmrc file at rook and set token

```
// .npmrc for github package
//npm.pkg.github.com/:_authToken=ghp_xxxxxxs
```

3. edit publish.yml

```
// .github/worksflows/publish.yml
// 1. publish on github package
- name: Setup Node
  uses: actions/setup-node@v3
  with:
     node-version: 16.x
     registry-url: https://npm.pkg.github.com/

...

   env:
      NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

// 2. publish on npm package
- name: Setup Node
  uses: actions/setup-node@v3
  with:
     node-version: 16.x
     registry-url: https://registry.npmjs.org/

...

   env:
      NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

4. change package.json's version before merge to main

```
// package.json
{
    ...
    "version": "x.x.x"
}
```

5. make release at github, then publish on github or npm by action
