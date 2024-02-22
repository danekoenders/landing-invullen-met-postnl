import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { WwvdElementTestimonialCard } from '../WwvdElementTestimonialCard/WwvdElementTestimonialCard';
import classes from './WwvdComponentContentReviews.module.css';

interface Props {
  className?: string;
  hide?: {
    stars?: boolean;
    stars2?: boolean;
    wwvdElementTestimonialCard?: boolean;
  };
  text?: {
    testimonial?: ReactNode;
  };
}
/* @figmaId 191:39111 */
export const WwvdComponentContentReviews: FC<Props> = memo(function WwvdComponentContentReviews(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.title}>Wat zeggen onze klanten?</div>
      <div className={classes.testimonials}>
        <WwvdElementTestimonialCard
          className={classes.wwvdElementTestimonialCard}
          hide={{
            stars: true,
          }}
          text={{
            testimonial: props.text?.testimonial,
          }}
        />
        {!props.hide?.wwvdElementTestimonialCard && (
          <WwvdElementTestimonialCard
            className={classes.wwvdElementTestimonialCard2}
            classes={{ testimonial: classes.testimonial2 }}
            hide={{
              stars: true,
            }}
            text={{
              testimonial: (
                <div className={classes.testimonial}>
                  “18% van de consumenten die de knop ziet, gebruikt “Invullen met PostNL”
                </div>
              ),
              temporLabori: <div className={classes.temporLabori}>Eleon Jonker</div>,
              temporEsseAuteMagna: <div className={classes.temporEsseAuteMagna}>Marketing Manager GSMpunt.nl</div>,
            }}
          />
        )}
      </div>
    </div>
  );
});
