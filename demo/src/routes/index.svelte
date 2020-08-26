<script>
  import Toggle, { ToggleCore } from "svelte-toggle";

  let toggled = false;
</script>

<svelte:head>
  <title>svelte-toggle</title>
</svelte:head>

<Toggle
  hideLabel
  on="On"
  off="Off"
  bind:toggled
  on:change={({ detail }) => {
    console.log(detail);
  }} />

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
