<script>
  export let id = "toggle" + Math.random().toString(36);
  export let label = "Toggle label";
  export let toggled = true;
  export let disabled = false;
  export let on = "on";
  export let off = "off";

  import { createEventDispatcher, afterUpdate } from "svelte";

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    dispatch("change", { toggled });
  });
</script>

<style>
  button {
    border: 0;
    outline: 2px solid #e0e0e0;
    background: none;
    font: inherit;
    color: inherit;
    line-height: inherit;
  }

  button:not([disabled]) {
    cursor: pointer;
  }

  button:focus {
    outline-color: #0f62fe;
  }

  button[aria-checked="true"] :first-child,
  button[aria-checked="false"] :last-child {
    background-color: #0f62fe;
    color: #fff;
  }

  span {
    display: inline-block;
    padding: 0.25rem;
    min-width: 2.5rem;
    text-align: center;
  }

  label {
    margin-left: 0.5rem;
  }
</style>

<button
  {...$$restProps}
  type="button"
  role="switch"
  aria-checked={toggled}
  {id}
  {disabled}
  on:click
  on:click={() => {
    toggled = !toggled;
  }}
  on:mouseover
  on:mouseenter
  on:mouseout
  on:focus
  on:blur
  on:keydown>
  <slot name="on">
    <span>{on}</span>
  </slot>
  <slot name="off">
    <span>{off}</span>
  </slot>
</button>

<label for={id}>{label}</label>
