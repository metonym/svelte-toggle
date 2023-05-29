# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0](https://github.com/metonym/svelte-toggle/releases/tag/v4.0.0) - 2022-05-29

**Breaking Changes**

- drop bundled ES/UMD support
- set `type="module"` in package.json

**Fixes**

- colocate type definitions with source files

## [3.1.0](https://github.com/metonym/svelte-toggle/releases/tag/v3.1.0) - 2021-10-31

**Features**

- complete JSDoc/TypeScript prop descriptions

**Fixes**

- `ToggleCore.d.ts` props should extend `button` HTML attributes

**Documentation**

- add disabled toggle example

## [3.0.3](https://github.com/metonym/svelte-toggle/releases/tag/v3.0.3) - 2021-10-31

**Documentation**

- simplify fully controlled example
- add pnpm install command

## [3.0.2](https://github.com/metonym/svelte-toggle/releases/tag/v3.0.2) - 2021-08-27

**Documentation**

- simplify Basic/Switch Descriptors examples in README
- add two way binding example

## [3.0.1](https://github.com/metonym/svelte-toggle/releases/tag/v3.0.1) - 2021-08-02

**Documentation**

- separate default value column in API props

## [3.0.0](https://github.com/metonym/svelte-toggle/releases/tag/v3.0.0) - 2020-12-05

**Breaking Changes**

- remove forwarded mouse, keydown events from `Toggle`
- use `SvelteComponentTyped` instead of `SvelteComponent` in TypeScript definitions (requires Svelte version >=3.31)

## [2.0.0](https://github.com/metonym/svelte-toggle/releases/tag/v2.0.0) - 2020-11-29

**Breaking Changes**

- remove dispatched "change" event; use `on:toggle` instead
- remove named "on" and "off" slots; override the default slot and destructure the `toggled` prop (`<Toggle let:toggled>{toggled}</Toggle>`)

## [1.1.0](https://github.com/metonym/svelte-toggle/releases/tag/v1.1.0) - 2020-11-17

- add TypeScript definitions

## [1.0.0](https://github.com/metonym/svelte-toggle/releases/tag/v1.0.0) - 2020-08-26

- refactor default toggle styles to conform to the classic "switch" UI for boolean states (#2)
- allow Toggle UI colors to be customized (`switchColor`, `toggledColor`, `untoggledColor`) (#3)
- allow label to be visually hidden (set `hideLabel` to `true) (#4)
- default `label` text is changed from "Toggle label" to "Label"
- make on/off labels optional (by default they're undefined)
- add small variant for `Toggle` switch size
- extract core component logic into standalone `ToggleCore` which instruments the accessibility aspects (this component is "renderless" in that it does not have any styles or markup)
  refactor default `Toggle` to use `ToggleCore`

**Breaking Changes**

- make `on` / `off` props optional; values must be truthy to use named slots

## [0.1.0](https://github.com/metonym/svelte-toggle/releases/tag/v0.1.0) - 2020-04-22

- initial release
