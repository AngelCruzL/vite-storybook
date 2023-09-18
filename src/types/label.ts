export type LabelSize = 'h1' | 'h2' | 'h3' | 'normal';
export type LabelColor = 'text-primary' | 'text-secondary' | 'text-tertiary';

export type Label = {
  /** Text to display */
  label: string;
  /** Size of the label */
  size?: LabelSize;
  /** Capitalize all letters */
  allCaps?: boolean;
  /** Custom background color */
  color?: LabelColor;
  /** Color of the label */
  textColor?: string;
};
