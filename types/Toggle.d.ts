/// <reference types="svelte" />
import { SvelteComponent } from "svelte";

export interface ToggleProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * @default "Label"
   */
  label?: string;

  /**
   * @default false
   */
  hideLabel?: boolean;

  /**
   * @default false
   */
  small?: boolean;

  /**
   * @default true
   */
  toggled?: boolean;

  /**
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
   * @default "#fff"
   */
  switchColor?: string;

  /**
   * @default "#0f62fe"
   */
  toggledColor?: string;

  /**
   * @default "#8d8d8d"
   */
  untoggledColor?: string;
}

export default class Toggle extends SvelteComponent<
  ToggleProps,
  {
    toggle: CustomEvent<boolean>;
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseout: WindowEventMap["mouseout"];
    focus: WindowEventMap["focus"];
    blur: WindowEventMap["blur"];
    keydown: WindowEventMap["keydown"];
  },
  { default: { toggled: boolean } }
> {}
