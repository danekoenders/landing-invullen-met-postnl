import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Laptop_coffee.module.css';
import { Page1Icon } from './Page1Icon';

interface Props {
  className?: string;
  classes?: {
    page1?: string;
    root?: string;
  };
  swap?: {
    page1?: ReactNode;
  };
}
/* @figmaId 122:15596 */
export const Laptop_coffee: FC<Props> = memo(function Laptop_coffee(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.page1 || ''} ${classes.page1}`}>
        {props.swap?.page1 || <Page1Icon className={classes.icon} />}
      </div>
    </div>
  );
});
