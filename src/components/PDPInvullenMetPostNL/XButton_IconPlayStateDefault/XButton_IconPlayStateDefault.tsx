import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Play } from '../Play/Play';
import { PathIcon } from './PathIcon';
import classes from './XButton_IconPlayStateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    path?: ReactNode;
  };
}
/* @figmaId 46:8159 */
export const XButton_IconPlayStateDefault: FC<Props> = memo(function XButton_IconPlayStateDefault(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Play
        className={classes.Icon}
        swap={{
          path: props.swap?.path || <PathIcon className={classes.icon} />,
        }}
      />
    </button>
  );
});
