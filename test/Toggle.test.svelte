<script lang="ts">
  import Toggle, { ToggleCore } from "../types";

  let toggled = true;
</script>

<!-- svelte-ignore missing-declaration -->
<Toggle
  label="label"
  hideLabel
  on="On"
  off="Off"
  on:toggle={(e) => {
    console.log(e.detail); // boolean
  }}
  on:click={(e) => {
    console.log(e); // MouseEvent
  }}
  on:focus={(e) => {
    console.log(e); // FocusEvent
  }}
  on:blur={(e) => {
    console.log(e); // FocusEvent
  }}
/>

<!-- svelte-ignore missing-declaration -->
<Toggle let:toggled={isToggled}>
  <span style="margin-left: .5rem">{isToggled ? "Yes" : "No"}</span>
</Toggle>

<!-- svelte-ignore missing-declaration -->
<ToggleCore {toggled} type="button" let:label let:button>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label {...label}>Label</label>
  <button
    {...button}
    on:click={() => {
      toggled = !toggled;
    }}
  >
    {toggled ? "On" : "Off"}
  </button>
</ToggleCore>
