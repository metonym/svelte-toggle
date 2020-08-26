<script>
  export let id = "toggle" + Math.random().toString(36);
  export let toggled = true;
  export let disabled = false;

  $: label = { for: id };
  $: button = {
    ...$$restProps,
    id,
    disabled,
    "aria-checked": toggled,
    type: "button",
    role: "switch",
  };
</script>

<slot {label} {button} />
