import { fireEvent, screen } from "@testing-library/svelte";
import { type SvelteComponent } from "svelte";
import { afterEach, describe, expect, test } from "vitest";
import ToggleCore from "./ToggleCore.test.svelte";

describe("ToggleCore", () => {
  let instance: null | SvelteComponent = null;

  afterEach(() => {
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
  });

  test("Fully controlled", async () => {
    const target = document.body;

    instance = new ToggleCore({ target });

    const testCase = () => screen.getByTestId("fully-controlled");
    const textContent = () => testCase().textContent!;

    expect(/Label/.test(textContent())).toBe(true);
    expect(/Off/.test(textContent())).toBe(true);

    await fireEvent.click(testCase().querySelector("button")!);

    expect(/On/.test(textContent())).toBe(true);
  });
});
