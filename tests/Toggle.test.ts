import { fireEvent, screen } from "@testing-library/svelte";
import { type SvelteComponent } from "svelte";
import { afterEach, describe, expect, test } from "vitest";
import Toggle from "./Toggle.test.svelte";

describe("Toggle", () => {
  let instance: null | SvelteComponent = null;

  afterEach(() => {
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
  });

  test("Uncontrolled", async () => {
    const target = document.body;

    instance = new Toggle({ target });

    const testCase = () => screen.getByTestId("uncontrolled");
    const textContent = () => testCase().textContent!;

    expect(/Label/.test(textContent())).toBe(true);
    expect(/Yes/.test(textContent())).toBe(true);

    await fireEvent.click(testCase().querySelector("button")!);

    expect(/No/.test(textContent())).toBe(true);
  });

  test("Two-way binding", async () => {
    const target = document.body;

    instance = new Toggle({ target });

    const testCase = () => screen.getByTestId("two-way-binding");
    const textContent = () => testCase().textContent!;

    expect(/Two-way binding/.test(textContent())).toBe(true);
    expect(/isToggled/.test(textContent())).toBe(true);

    await fireEvent.click(testCase().querySelector("button")!);

    expect(/isNotToggled/.test(textContent())).toBe(true);
  });
});
