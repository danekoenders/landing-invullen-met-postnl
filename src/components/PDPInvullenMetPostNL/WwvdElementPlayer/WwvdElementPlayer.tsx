import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { XButton_IconPlayStateDefault } from '../XButton_IconPlayStateDefault/XButton_IconPlayStateDefault';
import { PathIcon } from './PathIcon';
import classes from './WwvdElementPlayer.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle1470?: string;
    XButton?: string;
    root?: string;
  };
}
/* @figmaId 184:33200 */
export const WwvdElementPlayer: FC<Props> = memo(function WwvdElementPlayer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle1470 || ''} ${classes.rectangle1470}`}></div>
      <XButton_IconPlayStateDefault
        className={`${props.classes?.XButton || ''} ${classes.XButton}`}
        swap={{
          path: <PathIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
