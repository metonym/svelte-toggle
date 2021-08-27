# svelte-toggle

[![NPM][npm]][npm-url]

> Accessible toggle switch component for Svelte.

<!-- REPO_URL -->

This component implements best practices from the [Inclusive Components guide](https://inclusive-components.design/toggle-button/) for toggle buttons.

Try it in the [Svelte REPL](https://svelte.dev/repl/7eee5c643a684315a4fdfe45964aca61).

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-toggle
```

**NPM**

```bash
npm i -D svelte-toggle
```

## Usage

### Basic

```svelte
<script>
  import Toggle from "svelte-toggle";

  let toggled;
</script>

<Toggle bind:toggled />

Toggled? {toggled}
```

### Switch descriptors

Customize the toggle switch descriptors using the `"on"` and `"off"` props.

```svelte
<Toggle on="On" off="Off" />
```

Alternatively, you can override the default slot:

```svelte
<Toggle let:toggled>
  <strong style="margin-left: 0.5rem">{toggled ? "Yes" : "No"}</strong>
</Toggle>
```

### Small variant

Set `small` to `true` to use the small size variant.

```svelte
<Toggle small />
```

### Custom colors

Customize the switch colors:

- `switchColor` (default: `#fff`)
- `toggledColor` (default: `#0f62fe`)
- `untoggledColor` (default: `#8d8d8d`)

```svelte
<Toggle switchColor="#eee" toggledColor="#24a148" untoggledColor="#fa4d56" />
```

### Custom label

Customize the label text through the `label` prop.

```svelte
<Toggle label="Custom label" />
```

### Hidden label

Set `hideLabel` to `true` to visually hide the label.

**Note**: If hiding the label, you should still define a `label` value for accessibility reasons.

```svelte
<Toggle hideLabel label="Custom label" />
```

### Fully controlled

`ToggleCore` is an unstyled component that provides the accessibility attributes for the label and button elements.

```svelte
<script>
  import { ToggleCore } from "svelte-toggle";

  let isToggled = false;
</script>

<ToggleCore toggled={isToggled} let:label let:button>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label {...label}>Label</label>
  <button
    {...button}
    on:click={() => {
      isToggled = !isToggled;
    }}
  >
    {isToggled ? "On" : "Off"}
  </button>
</ToggleCore>
```

## API

API for the default `Toggle` component.

### Props

| Prop name      | Type      | Default value                            |
| :------------- | :-------- | :--------------------------------------- |
| id             | `string`  | `"toggle" + Math.random().toString(36)"` |
| label          | `string`  | `"Label"`                                |
| hideLabel      | `boolean` | `false`                                  |
| small          | `boolean` | `false`                                  |
| toggled        | `boolean` | `true`                                   |
| disabled       | `boolean` | `false`                                  |
| on             | `string`  | `undefined`                              |
| off            | `string`  | `undefined`                              |
| switchColor    | `string`  | `"#fff"`                                 |
| toggledColor   | `string`  | `"#0f62fe"`                              |
| untoggledColor | `string`  | `"#8d8d8d"`                              |

### Dispatched events

- **on:toggle**: fired whenever `toggled` changes

```svelte
<script>
  let events = [];
</script>

<Toggle on:toggle={(e) => (events = [...events, e.detail])} />

on:toggle: {events.join(", ")}
```

### Forwarded events

- on:click
- on:focus
- on:blur

## TypeScript

Svelte version 3.31 or greater is required to use this component with TypeScript.

TypeScript definitions are located in the [types folder](./types).

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-toggle.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-toggle

<a href="https://render.com/deploy?repo=https://github.com/metonym/svelte-toggle">
  <img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render">
</a>
