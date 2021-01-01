# svelte-toggle

[![NPM][npm]][npm-url]

> Accessible toggle switch component for Svelte.

This component implements best practices from the [Inclusive Components guide](https://inclusive-components.design/toggle-button/) for toggle buttons.

Try it in the [Svelte REPL](https://svelte.dev/repl/7eee5c643a684315a4fdfe45964aca61?version=3.24.1).

<!-- TOC -->

## Install

```bash
yarn add -D svelte-toggle
# OR
npm i -D svelte-toggle
```

## Usage

### Basic

<!-- prettier-ignore-start -->
```svelte
<script>
  import Toggle from "svelte-toggle";

  let toggled;
</script>

<Toggle bind:toggled />

<strong>Toggled? {toggled ? 'Yes' : 'No'}</strong>
```
<!-- prettier-ignore-end -->

### Switch descriptors

Customize the toggle switch descriptors through the "on" and "off" props.

<!-- prettier-ignore-start -->
```svelte
<Toggle on="On" off="Off" />
```
<!-- prettier-ignore-end -->

Alternatively, you can override the default slot:

<!-- prettier-ignore-start -->
```svelte
<Toggle let:toggled>
  <span style="margin-left: .5rem">{toggled ? "Yes" : "No"}</span>
</Toggle>
```
<!-- prettier-ignore-end -->

### Small variant

<!-- prettier-ignore-start -->
```svelte
<Toggle small />
```
<!-- prettier-ignore-end -->

### Custom colors

<!-- prettier-ignore-start -->
```svelte
<Toggle
  switchColor="#eee"
  toggledColor="#24a148"
  untoggledColor="#fa4d56"
/>
```
<!-- prettier-ignore-end -->

### Custom label

<!-- prettier-ignore-start -->
```svelte
<Toggle label="My toggle label" />
```
<!-- prettier-ignore-end -->

### Hidden label

<!-- prettier-ignore-start -->
```svelte
<Toggle hideLabel />
```
<!-- prettier-ignore-end -->

### Fully controlled

`ToggleCore` is an unstyled component that provides the accessibility attributes for the label and button elements.

<!-- prettier-ignore-start -->
```svelte
<script>
  import { ToggleCore } from "svelte-toggle";
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
<!-- prettier-ignore-end -->

## API

API for the default `Toggle` component.

### Props

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

### Dispatched events

The `Toggle` component dispatches a "toggle" event.

<!-- prettier-ignore-start -->
```svelte
<script>
  let events = [];
</script>

<Toggle
  on:toggle={(e) => {
    events = [...events, e.detail];
  }}
/>

<strong>on:toggle</strong> {events.join(', ')}
```
<!-- prettier-ignore-end -->

### Forwarded events

- on:click
- on:focus
- on:blur

## TypeScript

To use this component with TypeScript, you will need `svelte` version 3.31 or greater.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-toggle.svg?color=%230f62fe&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-toggle
