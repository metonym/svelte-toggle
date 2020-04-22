<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    line-height: 1.42;
  }

  :global(body) {
    font-family: "Public Sans", sans-serif;
    font-weight: 500;
    letter-spacing: 0.01rem;
    color: #161616;
    overflow-y: scroll;
  }

  main {
    position: relative;
    max-width: 36rem;
    padding: 1rem;
    margin: 0 auto;
  }
</style>

<main>
  <slot />
</main>
