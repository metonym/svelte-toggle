<script lang="ts">
  import { ToggleCore } from "svelte-toggle";

  let on = false;
</script>

<div data-testid="fully-controlled">
  <ToggleCore toggled={on} let:label let:button>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label {...label}>Label</label>
    <button {...button} on:click={() => (on = !on)}>
      {on ? "On" : "Off"}
    </button>
  </ToggleCore>
</div>
