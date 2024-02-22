import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './WwvdComponentButtonVertical.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 178:27152 */
export const WwvdComponentButtonVertical: FC<Props> = memo(function WwvdComponentButtonVertical(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.Text}>Meer weten?</div>
    </button>
  );
});
