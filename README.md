# Aklivity Zillabase Docs

<!-- markdownlint-disable -->
<div align="center">
  <img src="./src/.vuepress/public/logo-light.png#gh-light-mode-only" height="100">
  <img src="./src/.vuepress/public/logo-dark.png#gh-dark-mode-only" height="100">
</div>

</br>
<h1 align="center">Firebase alternative re-imagined</h1>

<div align="center">

  <!-- [![Build Status](https://github.com/aklivity/zilla/workflows/build/badge.svg)](https://github.com/aklivity/zilla/actions) -->
  [![Slack Community](https://img.shields.io/badge/slack-@aklivitycommunity-blue.svg?logo=slack)](https://www.aklivity.io/slack)

</div>

<!-- <h3 align="center">
  <a href="https://docs.aklivity.io/zilla/"><b>Documentation</b></a> &bull;
  <a href="https://docs.aklivity.io/zilla/latest/guides/install/"><b>Get Started</b></a> &bull;
  <a href="https://github.com/aklivity/zilla-examples"><b>Examples</b></a> &bull;
  <a href="https://www.aklivity.io/blog"><b>Blog</b></a>
</h3> -->
<!-- markdownlint-restore -->

This repository contains the documentation website code and Markdown source files for Zillabase Documentation.

## Contributing Guide

Before submitting your contribution, please read through the following guide. We also suggest you read the [Writing Guide](./.github/contributing/writing-guide.md) in this repo.

### Repo Setup

To develop locally, fork this repository and clone it in your local machine. Then run these commands from the root directory:

```bash
pnpm i
```

```bash
pnpm dev
```

### Search

This projects uses the free [Algolia Docsearch](https://docsearch.algolia.com/) tool to index the production site for all of the public versions. The crawler config is based on the recommended config from the [Docsearch Plugin](https://ecosystem.vuejs.press/plugins/search/docsearch.html).

To see the current search index or crawler config login to the [Algolia Dashboard](https://dashboard.algolia.com/users/sign_in).

### Running Lints

- Markdown linting

  run:

  ```bash
  pnpm lint
  ```

- Spelling, grammar, and style lints

  Install [Vale](https://github.com/errata-ai/vale) then run:

  ```bash
  vale src
  ```

  ```bash
  vale --ignore-syntax src/.vuepress/sidebar/en.ts
  ```

- Link checking

  Install [Lychee](https://github.com/lycheeverse/lychee) then run:

  ```bash
  lychee --exclude-mail src
  ```

  Running compiled site link checking:

  ```bash
  pnpm link-checker && lychee --exclude-mail --base="src/.vuepress/dist" src/.vuepress/dist
  ```

## Provide feedback

We’d love to hear your feedback. Please file documentation issues only in the docs GitHub repository. You can file a new issue to suggest improvements or if you see any errors in the existing documentation.

Every page has an `Edit this page on GitHub` link at the bottom for you to check the page source and report specific issues.

## Copyright and license

Copyright Aklivity, Inc. 2025, released under the [Apache 2.0 license](https://github.com/aklivity/zilla/blob/main/LICENSE).
