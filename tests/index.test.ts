import * as API from "svelte-toggle";
import { expect, test } from "vitest";

test("Library has exports", () => {
  expect(Object.keys(API)).toMatchInlineSnapshot(`
    [
      "default",
      "ToggleCore",
    ]
  `);
});
