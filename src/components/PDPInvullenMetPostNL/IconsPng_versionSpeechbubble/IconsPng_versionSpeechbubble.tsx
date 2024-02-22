import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsPng_versionSpeechbubble.module.css';

interface Props {
  className?: string;
  classes?: {
    pNL_05_TLike_Speechbubble_ID23?: string;
    root?: string;
  };
}
/* @figmaId 392:20553 */
export const IconsPng_versionSpeechbubble: FC<Props> = memo(function IconsPng_versionSpeechbubble(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.pNL_05_TLike_Speechbubble_ID23 || ''} ${classes.pNL_05_TLike_Speechbubble_ID23}`}
      ></div>
    </div>
  );
});
