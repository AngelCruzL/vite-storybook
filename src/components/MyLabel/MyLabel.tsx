import { FC, ReactElement } from 'react';

import { Label } from '../../types';

import classes from './MyLabel.module.css';

export const MyLabel: FC<Label> = ({
  label,
  size = 'normal',
  allCaps = false,
  color,
  textColor = '',
}): ReactElement => {
  return (
    <span
      className={`${classes.label} ${classes[size]} ${classes[color ?? '']}`}
      style={{ color: textColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
