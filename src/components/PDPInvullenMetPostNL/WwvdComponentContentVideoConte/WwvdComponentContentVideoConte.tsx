import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { WwvdElementPlayer } from '../WwvdElementPlayer/WwvdElementPlayer';
import classes from './WwvdComponentContentVideoConte.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle1470?: string;
  };
  text?: {
    content?: ReactNode;
  };
}
/* @figmaId 184:33231 */
export const WwvdComponentContentVideoConte: FC<Props> = memo(function WwvdComponentContentVideoConte(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <WwvdElementPlayer
        className={classes.wwvdElementPlayer}
        classes={{
          rectangle1470: `${props.classes?.rectangle1470 || ''} ${classes.rectangle1470}`,
          XButton: classes.XButton,
        }}
      />
      <div className={classes.containerContent}>
        <div className={classes.titel}>Wat is Invullen met PostNL</div>
        {props.text?.content != null ? (
          props.text?.content
        ) : (
          <div className={classes.content}>
            Invullen met PostNL is een simpele checkout waarmee bezoekers veilig en eenvoudig hun gegevens kunnen
            invullen met hun PostNL account. Deze gegevens worden met jou als webshop eigenaar gedeeld zodat je een
            relatie kan opbouwen met jouw klanten.
          </div>
        )}
      </div>
    </div>
  );
});
