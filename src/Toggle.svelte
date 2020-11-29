<script>
  /**
   * @slot {{ toggled: boolean; }}
   */

  export let label = "Label";
  export let hideLabel = false;
  export let small = false;
  export let toggled = true;
  export let disabled = false;

  /**
   * Set a descriptor for the toggled state
   * @type {string}
   */
  export let on = undefined;

  /**
   * Set a descriptor for the untoggled state
   * @type {string}
   */
  export let off = undefined;
  export let switchColor = "#fff";
  export let toggledColor = "#0f62fe";
  export let untoggledColor = "#8d8d8d";

  import { createEventDispatcher } from "svelte";
  import ToggleCore from "./ToggleCore.svelte";

  const dispatch = createEventDispatcher();

  /**
   * @event {boolean} toggle
   */
  $: dispatch("toggle", toggled);
</script>

<style>
  label {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
  }

  /**
  * Visually hide element without breaking screen readers
  * https://a11yproject.com/posts/how-to-hide-content/
  */
  .hideLabel {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }

  button {
    position: relative;
    padding: 0 0.25rem;
    border: 0;
    border-radius: 1rem;
    height: 1.25rem;
    width: 2.5rem;
    font: inherit;
    color: inherit;
    line-height: inherit;
  }

  button:not([disabled]) {
    cursor: pointer;
  }

  button[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  button:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0.125rem;
    margin: auto;
    height: 1rem;
    width: 1rem;
    text-align: center;
    border-radius: 50%;
    background-color: currentColor;
    transition: transform 150ms ease-out;
  }

  button[aria-checked="true"]:before {
    transform: translateX(1.25rem);
  }

  button.small {
    height: 1rem;
    width: 1.75rem;
  }

  button.small:before {
    height: 0.75rem;
    width: 0.75rem;
  }

  button.small[aria-checked="true"]:before {
    transform: translateX(0.75rem);
  }

  div {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 0.5rem;
  }
</style>

<ToggleCore bind:toggled let:label={labelProps} let:button>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label {...labelProps} class:hideLabel>{label}</label>

  <div>
    <button
      class:small
      {...$$restProps}
      {...button}
      style="color: {switchColor}; background-color: {toggled ? toggledColor : untoggledColor};
      {$$restProps.style}"
      {disabled}
      on:click
      on:click={() => (toggled = !toggled)}
      on:mouseover
      on:mouseenter
      on:mouseout
      on:focus
      on:blur
      on:keydown />
    <slot {toggled}>
      {#if on && off}<span>{toggled ? on : off}</span>{/if}
    </slot>
  </div>
</ToggleCore>
