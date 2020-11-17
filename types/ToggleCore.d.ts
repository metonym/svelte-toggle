/// <reference types="svelte" />

export interface ToggleCoreProps {
  /**
   * @default "toggle" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default true
   */
  toggled?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;
}

export default class ToggleCore {
  $$prop_def: ToggleCoreProps;
  $$slot_def: {
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
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
