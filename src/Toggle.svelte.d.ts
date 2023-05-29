import type { SvelteComponentTyped } from "svelte";

export interface ToggleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * Specify whether the toggle switch is toggled
   * @default true
   */
  toggled?: boolean;

  /**
   * Specify the label text
   * @default "Label"
   */
  label?: string;

  /**
   * Set to `true` to visually hide the label
   * @default false
   */
  hideLabel?: boolean;

  /**
   * Set to `true` to use the small variant
   * @default false
   */
  small?: boolean;

  /**
   * Set to `true` to disable the button
   * @default false
   */
  disabled?: boolean;

  /**
   * Set a descriptor for the toggled state
   */
  on?: string;

  /**
   * Set a descriptor for the untoggled state
   */
  off?: string;

  /**
   * Specify the switch color
   * @default "#fff"
   */
  switchColor?: string;

  /**
   * Specify the toggled switch background color
   * @default "#0f62fe"
   */
  toggledColor?: string;

  /**
   * Specify the untoggled switch background color
   * @default "#8d8d8d"
   */
  untoggledColor?: string;

  /**
   * `$$restProps` are forwarded to `<button>`
   */
  [key: string]: any;
}

export default class Toggle extends SvelteComponentTyped<
  ToggleProps,
  {
    toggle: CustomEvent<boolean>;
    click: WindowEventMap["click"];
    focus: WindowEventMap["focus"];
    blur: WindowEventMap["blur"];
  },
  { default: { toggled: boolean } }
> {}
