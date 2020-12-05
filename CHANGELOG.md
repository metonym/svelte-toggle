# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0](https://github.com/metonym/svelte-toggle/releases/tag/v3.0.0) - 2020-12-05

**Breaking Changes**

- remove forwarded mouse, keydown events from `Toggle`
- TypeScript: use `SvelteComponentTyped` instead of `SvelteComponent` (requires Svelte >=v3.31)

## [2.0.0](https://github.com/metonym/svelte-toggle/releases/tag/v2.0.0) - 2020-11-29

**Breaking Changes**

- Dispatched "change" event has been removed; use `on:toggle` instead
- Named "on" and "off" slots have been removed; override the default slot and destructure the `toggled` prop
- TypeScript users will need Svelte version 3.30 or greater

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

- `on` / `off` props are optional and must be truthy to use named slots

## [0.1.0](https://github.com/metonym/svelte-toggle/releases/tag/v0.1.0) - 2020-04-22

- Initial release
