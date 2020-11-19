# svelte-toggle

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Accessible toggle switch component.

This component implements best practices from the [Inclusive Components guide](https://inclusive-components.design/toggle-button/) for toggle buttons.

Try it in the [Svelte REPL](https://svelte.dev/repl/7eee5c643a684315a4fdfe45964aca61?version=3.24.1).

## [Demo](https://metonym.github.io/svelte-toggle/)

## Install

```sh
yarn add -D svelte-toggle
# OR
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

{toggled ? 'Yes' : 'No'}
```

### Switch descriptors

Customize the toggle switch descriptors through the "on" and "off" props.

```svelte
<Toggle on="On" off="Off" />
```

Alternatively, you can use named slots:

```svelte
<Toggle on off>
  <span slot="on">On</span>
  <span slot="off">Off</span>
</Toggle>
```

### Small variant

```svelte
<script>
  import Toggle from "svelte-toggle";

  let toggled = true;
</script>

<Toggle small label="My toggle label" on="On" off="Off" bind:toggled />
```

### Custom colors

```svelte
<script>
  import Toggle from "svelte-toggle";

  let toggled = true;
</script>

<Toggle
  label="My toggle label"
  switchColor="#eee"
  toggledColor="#24a148"
  untoggledColor="#fa4d56"
  on="On"
  off="Off"
  bind:toggled
/>
```

### Hidden label

```svelte
<script>
  import Toggle from "svelte-toggle";

  let toggled = true;
</script>

<Toggle hideLabel label="My toggle label" on="On" off="Off" bind:toggled />
```

### Hidden label + omitted switch descriptors

```svelte
<script>
  import Toggle from "svelte-toggle";

  let toggled = true;
</script>

<Toggle hideLabel label="My toggle label" bind:toggled />
```

### Fully controlled

`ToggleCore` is an unstyled component that provides the accessibility attributes for the label and button elements.

```svelte
<script>
  import { ToggleCore } from "svelte-toggle";

  let toggled = true;
</script>

<ToggleCore {toggled} let:label let:button>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label {...label}>Label</label>
  <button
    {...button}
    on:click={() => {
      toggled = !toggled;
    }}>
    {toggled ? 'On' : 'Off'}
  </button>
</ToggleCore>
```

## API

API for the default `Toggle` component.

| Prop name      | Value                                                        |
| :------------- | :----------------------------------------------------------- |
| id             | `string` (default: `"toggle" + Math.random().toString(36)"`) |
| label          | `string` (default: `"Label"`)                                |
| hideLabel      | `boolean` (default: `false`)                                 |
| small          | `boolean` (default: `false`)                                 |
| toggled        | `boolean` (default: `true`)                                  |
| disabled       | `boolean` (default: `false`)                                 |
| on             | `string` (default: `undefined`)                              |
| off            | `string` (default: `undefined`)                              |
| switchColor    | `string` (default: `"#fff"`)                                 |
| toggledColor   | `string` (default: `"#0f62fe"`)                              |
| untoggledColor | `string` (default: `"#8d8d8d"`)                              |

## Dispatched event

```jsx
<Toggle
  on:change={({ detail }) => {
    console.log(detail.toggled); // true | false
  }}
/>
```

## Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:focus
- on:blur
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-toggle.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-toggle
[build]: https://travis-ci.com/metonym/svelte-toggle.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-toggle
