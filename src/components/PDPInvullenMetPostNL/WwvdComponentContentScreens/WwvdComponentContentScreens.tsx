import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BodyIcon } from './BodyIcon';
import { BodyIcon2 } from './BodyIcon2';
import { BodyIcon3 } from './BodyIcon3';
import { BodyIcon4 } from './BodyIcon4';
import classes from './WwvdComponentContentScreens.module.css';

interface Props {
  className?: string;
  classes?: {
    containerContent?: string;
    image1?: string;
    bezorgvoorkeurenInInvullenMetP?: string;
    iMG_61361?: string;
    pasteYourDesignHere?: string;
    image3?: string;
    image4?: string;
    frame9289?: string;
    container?: string;
    containerContent2?: string;
    image12?: string;
    bezorgvoorkeurenInInvullenMetP2?: string;
    iMG_613612?: string;
    pasteYourDesignHere2?: string;
    image32?: string;
    image42?: string;
    frame92892?: string;
    container2?: string;
    containerContent3?: string;
    image13?: string;
    image2?: string;
    bezorgvoorkeurenInInvullenMetP3?: string;
    image6?: string;
    pasteYourDesignHere3?: string;
    image33?: string;
    image43?: string;
    frame92893?: string;
    container3?: string;
    containerContent4?: string;
    image14?: string;
    image22?: string;
    bezorgvoorkeurenInInvullenMetP4?: string;
    iMG_613613?: string;
    pasteYourDesignHere4?: string;
    image34?: string;
    image44?: string;
    frame92894?: string;
    container4?: string;
    root?: string;
  };
}
/* @figmaId 391:20356 */
export const WwvdComponentContentScreens: FC<Props> = memo(function WwvdComponentContentScreens(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame13}>
        <div className={classes.zoWerktInvullenMetPostNL}>Zo werkt Invullen met PostNL</div>
        <div className={classes.frame12}>
          <div className={`${props.classes?.container || ''} ${classes.container}`}>
            <div className={`${props.classes?.containerContent || ''} ${classes.containerContent}`}>
              <div className={classes.occaecatEstIpsumReprehenderitR}>1. Bezoeker rekent de winkelmand af</div>
            </div>
            <div className={classes.flatIPhone}>
              <div className={classes.body}>
                <BodyIcon className={classes.icon} />
              </div>
              <div className={`${props.classes?.pasteYourDesignHere || ''} ${classes.pasteYourDesignHere}`}>
              </div>
            </div>
          </div>
          <div className={`${props.classes?.container2 || ''} ${classes.container2}`}>
            <div className={`${props.classes?.containerContent2 || ''} ${classes.containerContent2}`}>
              <div className={classes.occaecatEstIpsumReprehenderitR2}>2. Gebruikt de ‘Invullen met PostNL’ knop</div>
            </div>
            <div className={classes.flatIPhone2}>
              <div className={classes.body2}>
                <BodyIcon2 className={classes.icon2} />
              </div>
              <div className={`${props.classes?.pasteYourDesignHere2 || ''} ${classes.pasteYourDesignHere2}`}>
              </div>
            </div>
          </div>
          <div className={`${props.classes?.container3 || ''} ${classes.container3}`}>
            <div className={`${props.classes?.containerContent3 || ''} ${classes.containerContent3}`}>
              <div className={classes.occaecatEstIpsumReprehenderitR3}>3. Gegevens vanuit PostNL worden ingevuld</div>
            </div>
            <div className={classes.flatIPhone3}>
              <div className={classes.body3}>
                <BodyIcon3 className={classes.icon3} />
              </div>
              <div className={`${props.classes?.pasteYourDesignHere3 || ''} ${classes.pasteYourDesignHere3}`}>
              </div>
            </div>
          </div>
          <div className={`${props.classes?.container4 || ''} ${classes.container4}`}>
            <div className={`${props.classes?.containerContent4 || ''} ${classes.containerContent4}`}>
              <div className={classes.occaecatEstIpsumReprehenderitR4}>
                <div className={classes.textBlock}>4. Vervolgt gemakkelijk</div>
                <div className={classes.textBlock2}>de bestelling</div>
              </div>
            </div>
            <div className={classes.flatIPhone4}>
              <div className={classes.body4}>
                <BodyIcon4 className={classes.icon4} />
              </div>
              <div className={`${props.classes?.pasteYourDesignHere4 || ''} ${classes.pasteYourDesignHere4}`}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
