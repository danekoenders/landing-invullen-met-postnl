import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { WwvdElementHeroAfbeelding } from '../WwvdElementHeroAfbeelding/WwvdElementHeroAfbeelding';
import { WwvdElementHeroTitle } from '../WwvdElementHeroTitle/WwvdElementHeroTitle';
import classes from './WwvdComponentContentHero.module.css';

interface Props {
  className?: string;
  classes?: {
    Image?: string;
  };
  text?: {
    subTitle?: ReactNode;
    title?: ReactNode;
    content?: ReactNode;
  };
}
/* @figmaId 184:27253 */
export const WwvdComponentContentHero: FC<Props> = memo(function WwvdComponentContentHero(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <WwvdElementHeroTitle
        className={classes.wwvdElementHeroTitle}
        text={{
          subTitle: props.text?.subTitle,
          title: props.text?.title,
          content: props.text?.content,
        }}
      />
      <WwvdElementHeroAfbeelding classes={{ Image: `${props.classes?.Image || ''} ${classes.Image}` }} />
    </div>
  );
});
