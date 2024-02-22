import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AndroidRefresh } from '../AndroidRefresh/AndroidRefresh';
import classes from './Button_VariantPrimaryStateDefa.module.css';

interface Props {
  className?: string;
  text?: {
    Text?: ReactNode;
  };
}
/* @figmaId 11:348 */
export const Button_VariantPrimaryStateDefa: FC<Props> = memo(function Button_VariantPrimaryStateDefa(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.Text != null ? props.text?.Text : <div className={classes.Text}>Button</div>}
    </button>
  );
});
