import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AndroidRefresh2 } from '../AndroidRefresh2/AndroidRefresh2';
import classes from './Button_VariantPrimaryStateDefa2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    Text?: ReactNode;
  };
}
/* @figmaId 689:27922 */
export const Button_VariantPrimaryStateDefa2: FC<Props> = memo(function Button_VariantPrimaryStateDefa2(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.Text != null ? props.text?.Text : <div className={classes.Text}>Button</div>}
    </button>
  );
});
