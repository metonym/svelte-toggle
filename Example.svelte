<script>
  import Toggle, { ToggleCore } from "./src";
  import { Navigation, Box } from "svelte-primer";

  const META = process.env.META;

  let toggled = true;
  let idxInstall = 0;

  $: codeInstall =
    idxInstall === 0 ? `yarn add -D ${name}` : `npm i -D ${name}`;
</script>

<style>
  @media (max-width: 768px) {
    .col-4,
    .col-8 {
      width: 100%;
    }
  }
</style>

<main class="container-lg p-4">
  <div class="clearfix mb-5">
    <div class="col-4 float-left px-1">
      <div class="d-flex flex-items-baseline mb-3">
        <h1>{META.name}</h1>
        <div>
          <span
            class="ml-3 mr-1"
            title="NPM package version">v{META.version}</span>
          <a href={META.homepage}>GitHub</a>
        </div>
      </div>

      <h2 class="mb-2">Install</h2>
      <Navigation.TabNav>
        {#each ['yarn', 'npm'] as item, i (item)}
          <Navigation.TabNavItem
            current={i === idxInstall}
            on:click={(e) => {
              e.preventDefault();
              idxInstall = i;
            }}>
            {item}
          </Navigation.TabNavItem>
        {/each}
      </Navigation.TabNav>

      <Box.Box class="d-flex">
        <pre class="d-flex flex-1">
        <code
            class="p-3">{codeInstall}</code>
      </pre>
        <!-- <Copy text={codeInstall} /> -->
      </Box.Box>
    </div>
  </div>

  <div class="clearfix mb-5">
    <div class="col-8 float-left px-1">
      <h2 class="mb-3">Usage</h2>
      <h3 class="mb-3">Basic</h3>
      <Box.Box
        class="py-4 px-3"
        style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
        <Toggle label="My toggle label" on="On" off="Off" bind:toggled />
      </Box.Box>
      <Box.Box
        class="d-flex border-top-0"
        style="border-top-left-radius: 0; border-top-right-radius: 0;">
        <pre class="d-flex flex-1 overflow-x-auto">
        <code
            class="p-3">
          {`<script>
  import Toggle from "svelte-toggle";

  let toggled = true;
<\/script>
        
<Toggle label="My toggle label" on="On" off="Off" bind:toggled />`}
        </code>
      </pre>
      </Box.Box>

      <h3 class="mt-6 mb-3">Small variant</h3>
      <Box.Box
        class="py-4 px-3"
        style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
        <Toggle small label="My toggle label" on="On" off="Off" bind:toggled />
      </Box.Box>
      <Box.Box
        class="d-flex border-top-0"
        style="border-top-left-radius: 0; border-top-right-radius: 0;">
        <pre class="d-flex flex-1 overflow-x-auto">
        <code
            class="p-3">
          {`<script>
  import Toggle from "svelte-toggle";

  let toggled = true;
<\/script>
        
<Toggle small label="My toggle label" on="On" off="Off" bind:toggled />`}
        </code>
      </pre>
      </Box.Box>

      <h3 class="mt-6 mb-3">Custom colors</h3>
      <Box.Box
        class="py-4 px-3"
        style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
        <Toggle
          label="My toggle label"
          switchColor="#eee"
          toggledColor="#24a148"
          untoggledColor="#fa4d56"
          on="On"
          off="Off"
          bind:toggled />
      </Box.Box>
      <Box.Box
        class="d-flex border-top-0"
        style="border-top-left-radius: 0; border-top-right-radius: 0;">
        <pre class="d-flex flex-1 overflow-x-auto">
        <code
            class="p-3">
          {`<script>
  import Toggle from "svelte-toggle";

  let toggled = true;
<\/script>
        
<Toggle
  label="My toggle label"
  switchColor="#eee"
  toggledColor="#24a148"
  untoggledColor="#fa4d56"
  on="On"
  off="Off"
  bind:toggled />`}
        </code>
      </pre>
      </Box.Box>

      <h3 class="mt-6 mb-3">Hidden label</h3>
      <Box.Box
        class="py-4 px-3"
        style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
        <Toggle
          hideLabel
          label="My toggle label"
          on="On"
          off="Off"
          bind:toggled />
      </Box.Box>
      <Box.Box
        class="d-flex border-top-0"
        style="border-top-left-radius: 0; border-top-right-radius: 0;">
        <pre class="d-flex flex-1 overflow-x-auto">
        <code
            class="p-3">
          {`<script>
  import Toggle from "svelte-toggle";

  let toggled = true;
<\/script>
        
<Toggle
  hideLabel
  label="My toggle label"
  on="On"
  off="Off"
  bind:toggled />`}
        </code>
      </pre>
      </Box.Box>

      <h3 class="mt-6 mb-3">Hidden label + omitted switch descriptors</h3>
      <Box.Box
        class="py-4 px-3"
        style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
        <Toggle hideLabel label="My toggle label" bind:toggled />
      </Box.Box>
      <Box.Box
        class="d-flex border-top-0"
        style="border-top-left-radius: 0; border-top-right-radius: 0;">
        <pre class="d-flex flex-1 overflow-x-auto">
        <code
            class="p-3">
          {`<script>
  import Toggle from "svelte-toggle";

  let toggled = true;
<\/script>
        
<Toggle hideLabel label="My toggle label" bind:toggled />`}
        </code>
      </pre>
      </Box.Box>

      <h3 class="mt-6 mb-3">Fully controlled</h3>
      <p>
        The
        <code>ToggleCore</code>
        component is completely unstyled. You must write your own mark-up and
        styles.
      </p>
      <Box.Box
        class="py-4 px-3"
        style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
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
      </Box.Box>
      <Box.Box
        class="d-flex border-top-0"
        style="border-top-left-radius: 0; border-top-right-radius: 0;">
        <pre class="d-flex flex-1 overflow-x-auto">
        <code
            class="p-3">
          {`<script>
  import { ToggleCore } from "svelte-toggle";

  let toggled = true;
<\/script>
        
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
</ToggleCore>`}
        </code>
      </pre>
      </Box.Box>
    </div>
  </div>
</main>
