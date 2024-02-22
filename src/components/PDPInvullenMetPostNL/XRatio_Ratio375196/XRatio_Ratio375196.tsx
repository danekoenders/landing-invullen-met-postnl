import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './XRatio_Ratio375196.module.css';

interface Props {
  className?: string;
  classes?: {
    aspectRatioKeeperRotatedAutoLa?: string;
    root?: string;
  };
}
/* @figmaId 122:14913 */
export const XRatio_Ratio375196: FC<Props> = memo(function XRatio_Ratio375196(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
