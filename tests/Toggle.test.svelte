<script lang="ts">
  import Toggle from "svelte-toggle";

  let toggled = true;
</script>

<!-- Uncontrolled -->
<div data-testid="uncontrolled">
  <Toggle
    let:toggled
    on="On"
    off="Off"
    on:toggle={(e) => {
      console.log("toggle", e.detail); // boolean
    }}
    on:click={(e) => {
      console.log("click", e); // MouseEvent
    }}
    on:focus={(e) => {
      console.log("focus", e); // FocusEvent
    }}
    on:blur={(e) => {
      console.log("blur", e); // FocusEvent
    }}
  >
    {toggled ? "Yes" : "No"}
  </Toggle>
</div>

<!-- Two-way binding -->
<div data-testid="two-way-binding">
  <Toggle label="Two-way binding" hideLabel bind:toggled on="On" off="Off" />
  {toggled ? "isToggled" : "isNotToggled"}
</div>
