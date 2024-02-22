import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AndroidRefresh.module.css';
import { IconIcon } from './IconIcon';

interface Props {
  className?: string;
}
/* @figmaId 11:351 */
export const AndroidRefresh: FC<Props> = memo(function AndroidRefresh(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.Icon}>
        <IconIcon className={classes.icon} />
      </div>
    </div>
  );
});
