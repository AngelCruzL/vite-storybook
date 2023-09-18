export type LabelSize = 'h1' | 'h2' | 'h3' | 'normal';

export type Label = {
  /** Text to display */
  label: string;
  /** Size of the label */
  size?: LabelSize;
};
