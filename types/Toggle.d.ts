/// <reference types="svelte" />

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

export default class Toggle {
  $$prop_def: ToggleProps;
  $$slot_def: {
    off: {};
    on: {};
  };

  $on(eventname: "change", cb: (event: CustomEvent<{ toggled: boolean }>) => void): () => void;
  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "mouseover", cb: (event: WindowEventMap["mouseover"]) => void): () => void;
  $on(eventname: "mouseenter", cb: (event: WindowEventMap["mouseenter"]) => void): () => void;
  $on(eventname: "mouseout", cb: (event: WindowEventMap["mouseout"]) => void): () => void;
  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "keydown", cb: (event: WindowEventMap["keydown"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
