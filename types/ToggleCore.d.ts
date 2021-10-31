/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToggleCoreProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * Specify the id
   * @default "toggle" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Specify whether the toggle switch is toggled
   * @default true
   */
  toggled?: boolean;

  /**
   * Set to `true` to disable the button
   * @default false
   */
  disabled?: boolean;
}

export default class ToggleCore extends SvelteComponentTyped<
  ToggleCoreProps,
  {},
  {
    default: {
      label: { for: string };
      button: {
        id: string;
        disabled: boolean;
        "aria-checked": boolean;
        type: "button";
        role: "switch";
        [key: string]: any;
      };
    };
  }
> {}
