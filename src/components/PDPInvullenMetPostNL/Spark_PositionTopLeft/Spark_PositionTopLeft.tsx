import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Spark_PositionTopLeft.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 122:14919 */
export const Spark_PositionTopLeft: FC<Props> = memo(function Spark_PositionTopLeft(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.bG}></div>
      <div className={classes.corner}></div>
    </div>
  );
});
