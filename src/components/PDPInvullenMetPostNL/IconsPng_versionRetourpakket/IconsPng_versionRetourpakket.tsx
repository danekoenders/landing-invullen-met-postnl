import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsPng_versionRetourpakket.module.css';

interface Props {
  className?: string;
  classes?: {
    pNL_05_Retourpakket_ID23?: string;
    root?: string;
  };
}
/* @figmaId 392:20558 */
export const IconsPng_versionRetourpakket: FC<Props> = memo(function IconsPng_versionRetourpakket(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.pNL_05_Retourpakket_ID23 || ''} ${classes.pNL_05_Retourpakket_ID23}`}></div>
    </div>
  );
});
