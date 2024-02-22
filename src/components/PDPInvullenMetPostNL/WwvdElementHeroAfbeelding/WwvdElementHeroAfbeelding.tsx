import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Spark_PositionTopLeft } from '../Spark_PositionTopLeft/Spark_PositionTopLeft';
import { XRatio_Ratio375196 } from '../XRatio_Ratio375196/XRatio_Ratio375196';
import classes from './WwvdElementHeroAfbeelding.module.css';

interface Props {
  className?: string;
  classes?: {
    Image?: string;
  };
}
/* @figmaId 184:27226 */
export const WwvdElementHeroAfbeelding: FC<Props> = memo(function WwvdElementHeroAfbeelding(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <XRatio_Ratio375196
        className={`${props.classes?.Image || ''} ${classes.Image}`}
        classes={{ aspectRatioKeeperRotatedAutoLa: classes.aspectRatioKeeperRotatedAutoLa }}
      />
      <Spark_PositionTopLeft className={classes.spark} />
    </div>
  );
});
