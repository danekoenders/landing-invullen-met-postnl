import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { PathIcon } from './PathIcon';
import classes from './Play.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    path?: ReactNode;
  };
}
/* @figmaId 46:8146 */
export const Play: FC<Props> = memo(function Play(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.path}>{props.swap?.path || <PathIcon className={classes.icon} />}</div>
    </div>
  );
});
