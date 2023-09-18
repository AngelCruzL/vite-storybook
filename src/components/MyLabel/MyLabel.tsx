import { FC, ReactElement } from 'react';

import { Label } from '../../types';

import classes from './MyLabel.module.css';

export const MyLabel: FC<Label> = ({
  label,
  size = 'normal',
}): ReactElement => {
  return <span className={classes[size]}>{label}</span>;
};
