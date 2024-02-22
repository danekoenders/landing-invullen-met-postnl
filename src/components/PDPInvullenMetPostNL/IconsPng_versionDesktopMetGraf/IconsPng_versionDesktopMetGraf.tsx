import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsPng_versionDesktopMetGraf.module.css';

interface Props {
  className?: string;
  classes?: {
    pNL_05_TDesktopMetGrafiek_ID23?: string;
    root?: string;
  };
}
/* @figmaId 392:20551 */
export const IconsPng_versionDesktopMetGraf: FC<Props> = memo(function IconsPng_versionDesktopMetGraf(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.pNL_05_TDesktopMetGrafiek_ID23 || ''} ${classes.pNL_05_TDesktopMetGrafiek_ID23}`}
      ></div>
    </div>
  );
});
