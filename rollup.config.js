import svelteReadme from "svelte-readme";

export default svelteReadme({
  style: `
    .code-fence > strong {
      display: block;
      margin-top: 1rem;
    }

    .code-fence > div {
      margin-bottom: 16px;
    }

    .code-fence strong {
      margin-left: 0.5rem;
    }
  `,
});
