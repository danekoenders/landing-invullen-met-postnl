import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { FrameIcon } from './FrameIcon';
import { FrameIcon2 } from './FrameIcon2';
import { FrameIcon3 } from './FrameIcon3';
import { FrameIcon4 } from './FrameIcon4';
import { FrameIcon5 } from './FrameIcon5';
import classes from './WwvdElementTestimonialCard.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    testimonial?: string;
  };
  hide?: {
    stars?: boolean;
  };
  text?: {
    testimonial?: ReactNode;
    temporLabori?: ReactNode;
    temporEsseAuteMagna?: ReactNode;
  };
}
/* @figmaId 191:39138 */
export const WwvdElementTestimonialCard: FC<Props> = memo(function WwvdElementTestimonialCard(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.stars && (
        <div className={classes.stars}>
          <div className={classes.rating1}>
            <div className={classes.frame}>
              <FrameIcon className={classes.icon} />
            </div>
            <div className={classes.frame2}>
              <FrameIcon2 className={classes.icon2} />
            </div>
            <div className={classes.frame3}>
              <FrameIcon3 className={classes.icon3} />
            </div>
            <div className={classes.frame4}>
              <FrameIcon4 className={classes.icon4} />
            </div>
            <div className={classes.frame5}>
              <FrameIcon5 className={classes.icon5} />
            </div>
          </div>
        </div>
      )}
      <div className={`${props.classes?.testimonial || ''} ${classes.testimonial}`}>
        {props.text?.testimonial != null ? (
          props.text?.testimonial
        ) : (
          <div className={classes.testimonial2}>
            “Het conversiepercentage van mensen die interactie met de knop van Invullen met PostNL tonen, is hoger dan
            het gemiddelde van de webshop”
          </div>
        )}
      </div>
      <div className={classes.photo}>
        <div className={classes.frame9288}>
          {props.text?.temporLabori != null ? (
            props.text?.temporLabori
          ) : (
            <div className={classes.temporLabori}>Randy de Decker</div>
          )}
          {props.text?.temporEsseAuteMagna != null ? (
            props.text?.temporEsseAuteMagna
          ) : (
            <div className={classes.temporEsseAuteMagna}>Co-owner Mostert Juweliers Online B.V.</div>
          )}
        </div>
      </div>
    </div>
  );
});
