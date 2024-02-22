import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_VariantPrimaryStateDefa } from '../Button_VariantPrimaryStateDefa/Button_VariantPrimaryStateDefa';
import classes from './WwvdElementHeroTitle.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    subTitle?: ReactNode;
    title?: ReactNode;
    content?: ReactNode;
  };
}
/* @figmaId 178:27172 */
export const WwvdElementHeroTitle: FC<Props> = memo(function WwvdElementHeroTitle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.containerTitle}>
        {props.text?.subTitle != null ? (
          props.text?.subTitle
        ) : (
          <div className={classes.subTitle}>Digitaal portfolio</div>
        )}
        {props.text?.title != null ? (
          props.text?.title
        ) : (
          <div className={classes.title}>Adrescheck-API: valideer adressen in je checkout</div>
        )}
      </div>
      <div className={classes.containerContent}>
        {props.text?.content != null ? (
          props.text?.content
        ) : (
          <div className={classes.content}>
            Onze adrescheck-API valideert razendsnel alle adressen in je checkout. Beschikbaar voor Nederland, Benelux
            en internationaal en direct in de juiste adresstructuur
          </div>
        )}
      </div>
      <Button_VariantPrimaryStateDefa
        text={{
          Text: <div className={classes.Text}>Lees meer</div>,
        }}
      />
    </div>
  );
});
