import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AndroidRefresh2.module.css';
import { IconIcon } from './IconIcon';

interface Props {
  className?: string;
}
/* @figmaId 689:27853 */
export const AndroidRefresh2: FC<Props> = memo(function AndroidRefresh2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.Icon}>
        <IconIcon className={classes.icon} />
      </div>
    </div>
  );
});
