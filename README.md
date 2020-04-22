# svelte-toggle

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Accessible toggle switch component.

This component follows best practices from the [Inclusive Components guide](https://inclusive-components.design/toggle-button/) for toggle buttons.

## Install

```bash
yarn add -D svelte-toggle
```

## Usage

```html
<script>
  import Toggle from "svelte-toggle";

  let toggled;
</script>

<Toggle bind:toggled />

{toggled ? 'Yes' : 'No'}
```

### On/off labels

The on/off labels can be customized through the `on` and `off` props:

```html
<Toggle on="Yes" off="No" />
```

Or, using named slots:

```html
<Toggle>
  <span slot="on">On</span>
  <span slot="off">Off</span>
</Toggle>
```

## API

| Property name | Value                                                        |
| :------------ | :----------------------------------------------------------- |
| id            | `string` (default: `"toggle" + Math.random().toString(36)"`) |
| label         | `string` (default: `"Toggle label"`)                         |
| toggle        | `boolean` (default: `true`)                                  |
| disabled      | `boolean` (default: `false`)                                 |
| on            | `string` or `slot:on` (default: `"on"`)                      |
| off           | `string` or `slot:off` (default: `"off"`)                    |

## Dispatched events

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
