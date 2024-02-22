import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_VariantPrimaryStateDefa2 } from './Button_VariantPrimaryStateDefa2/Button_VariantPrimaryStateDefa2';
import { Divider } from './Divider/Divider';
import { IconsPng_versionDesktopMetGraf } from './IconsPng_versionDesktopMetGraf/IconsPng_versionDesktopMetGraf';
import { IconsPng_versionRetourpakket } from './IconsPng_versionRetourpakket/IconsPng_versionRetourpakket';
import { IconsPng_versionSpeechbubble } from './IconsPng_versionSpeechbubble/IconsPng_versionSpeechbubble';
import { Logo_VariantInverseWhite } from './Logo_VariantInverseWhite/Logo_VariantInverseWhite';
import classes from './PDPInvullenMetPostNL.module.css';
import { Postlijn } from './Postlijn/Postlijn';
import { VectorIcon } from './VectorIcon';
import { WwvdComponentButtonVertical } from './WwvdComponentButtonVertical/WwvdComponentButtonVertical';
import { WwvdComponentContentHero } from './WwvdComponentContentHero/WwvdComponentContentHero';
import { WwvdComponentContentReviews } from './WwvdComponentContentReviews/WwvdComponentContentReviews';
import { WwvdComponentContentScreens } from './WwvdComponentContentScreens/WwvdComponentContentScreens';
import { WwvdComponentContentVideoConte } from './WwvdComponentContentVideoConte/WwvdComponentContentVideoConte';
import { WwvdComponentContentVoordelen } from './WwvdComponentContentVoordelen/WwvdComponentContentVoordelen';

interface Props {
  className?: string;
  hide?: {
    stars?: boolean;
    wwvdElementTestimonialCard?: boolean;
  };
}
/* @figmaId 688:27100 */
export const PDPInvullenMetPostNL: FC<Props> = memo(function PDPInvullenMetPostNL(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame16}>
        <WwvdComponentContentHero
          classes={{ Image: classes.Image }}
          text={{
            subTitle: <div className={classes.subTitle}>Meer groei met</div>,
            title: <div className={classes.title}>Invullen met PostNL</div>,
            content: (
              <div className={classes.content}>
                Met Invullen met PostNL maak je de checkout van jouw webshop eenvoudiger doordat bezoekers veilig en
                makkelijk hun gegevens kunnen invullen met hun PostNL account. Van afhaken in de checkout naar afmaken
                van de bestelling met onze betrouwbare PostNL bezorggegevens.
              </div>
            ),
          }}
        />
        <WwvdComponentContentVideoConte
          classes={{ rectangle1470: classes.rectangle1470 }}
          text={{
            content: (
              <div className={classes.content2}>
                Je investeert als webshopeigenaar ongetwijfeld veel in het genereren van traffic naar je webshop. Dan
                wil je toch ook dat jouw bezoekers niet afhaken bij de checkout omdat het invullen ervan zorgt voor
                frustratie? Voor alle PostNL klanten die slim bezig zijn met het optimaliseren van hun webshop heeft
                PostNL nu een nieuwe dienst: Invullen met PostNL. Hiermee kunnen jouw bezoekers veilig en eenvoudig hun
                gegevens invullen met hun PostNL account. En profiteer jij van de betrouwbare bezorggegevens van onze
                ruim 8,5 miljoen PostNL accounts.
              </div>
            ),
          }}
        />
        <WwvdComponentContentVoordelen
          swap={{
            laptop_cases: (
              <IconsPng_versionDesktopMetGraf
                className={classes.iconsPng}
                classes={{ pNL_05_TDesktopMetGrafiek_ID23: classes.pNL_05_TDesktopMetGrafiek_ID23 }}
              />
            ),
            laptop_api: (
              <IconsPng_versionRetourpakket
                className={classes.iconsPng2}
                classes={{ pNL_05_Retourpakket_ID23: classes.pNL_05_Retourpakket_ID23 }}
              />
            ),
            laptop_coffee: (
              <IconsPng_versionSpeechbubble
                className={classes.iconsPng3}
                classes={{ pNL_05_TLike_Speechbubble_ID23: classes.pNL_05_TLike_Speechbubble_ID23 }}
              />
            ),
          }}
          text={{
            deVoordelenVanDeAdrescheck: (
              <div className={classes.deVoordelenVanDeAdrescheck}>De voordelen van Invullen met PostNL</div>
            ),
            occaecatEstIpsumReprehenderitR: (
              <div className={classes.occaecatEstIpsumReprehenderitR}>Hogere conversies</div>
            ),
            occaecatEstIpsumReprehenderitR2: (
              <div className={classes.occaecatEstIpsumReprehenderitR2}>
                Door een eenvoudige checkout met onze ruim 8,5 miljoen PostNL accounts.
              </div>
            ),
            occaecatEstIpsumReprehenderitR3: (
              <div className={classes.occaecatEstIpsumReprehenderitR3}>Voorkom onnodige retouren</div>
            ),
            occaecatEstIpsumReprehenderitR4: (
              <div className={classes.occaecatEstIpsumReprehenderitR4}>
                Door gebruik te maken van onze betrouwbare bezorggegevens
              </div>
            ),
            occaecatEstIpsumReprehenderitR5: (
              <div className={classes.occaecatEstIpsumReprehenderitR5}>Meer vertrouwen</div>
            ),
            occaecatEstIpsumReprehenderitR6: (
              <div className={classes.occaecatEstIpsumReprehenderitR6}>
                Het betrouwbare PostNL logo geeft jouw bezoekers nog meer vertrouwen in jouw webshop.
              </div>
            ),
          }}
        />
        <WwvdComponentContentScreens
          className={classes.wwvdComponentContentScreens}
          classes={{
            containerContent: classes.containerContent,
            image1: classes.image1,
            bezorgvoorkeurenInInvullenMetP: classes.bezorgvoorkeurenInInvullenMetP,
            iMG_61361: classes.iMG_61361,
            pasteYourDesignHere: classes.pasteYourDesignHere,
            image3: classes.image3,
            image4: classes.image4,
            frame9289: classes.frame9289,
            container: classes.container,
            containerContent2: classes.containerContent2,
            image12: classes.image12,
            bezorgvoorkeurenInInvullenMetP2: classes.bezorgvoorkeurenInInvullenMetP2,
            iMG_613612: classes.iMG_613612,
            pasteYourDesignHere2: classes.pasteYourDesignHere2,
            image32: classes.image32,
            image42: classes.image42,
            frame92892: classes.frame92892,
            container2: classes.container2,
            containerContent3: classes.containerContent3,
            image13: classes.image13,
            image2: classes.image2,
            bezorgvoorkeurenInInvullenMetP3: classes.bezorgvoorkeurenInInvullenMetP3,
            image6: classes.image6,
            pasteYourDesignHere3: classes.pasteYourDesignHere3,
            image33: classes.image33,
            image43: classes.image43,
            frame92893: classes.frame92893,
            container3: classes.container3,
            containerContent4: classes.containerContent4,
            image14: classes.image14,
            image22: classes.image22,
            bezorgvoorkeurenInInvullenMetP4: classes.bezorgvoorkeurenInInvullenMetP4,
            iMG_613613: classes.iMG_613613,
            pasteYourDesignHere4: classes.pasteYourDesignHere4,
            image34: classes.image34,
            image44: classes.image44,
            frame92894: classes.frame92894,
            container4: classes.container4,
          }}
        />
        <WwvdComponentContentReviews
          hide={{
            wwvdElementTestimonialCard: true,
          }}
          text={{
            testimonial: (
              <div className={classes.testimonial}>
                “Het conversiepercentage van mensen die interactie met de knop van Invullen met PostNL tonen is hoger
                dan het gemiddelde van de webshop.&quot;
              </div>
            ),
          }}
        />
        <div className={classes.wwvdComponentContentFooter}>
          <Postlijn className={classes.postlijn2} />
          <div className={classes.wwvdElementFooterContact}>
            <div className={classes.frame9283}>
              <div className={classes.lookingForSomething}>Gratis proberen gedurende heel 2024?</div>
              <div className={classes.subscribeToOurNewsletter}>
                Klik op de knop hieronder, vul je gegevens in en we nemen zo snel mogelijk contact met je op!
              </div>
              <Button_VariantPrimaryStateDefa2
                className={classes.button}
                text={{
                  Text: <div className={classes.Text}>Aanmelden</div>,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <WwvdComponentButtonVertical className={classes.wwvdComponentButtonVertical} />
      <div className={classes.wwvdComponentHeaderLarge}>
        <div className={classes.wrapper}></div>
        <Divider className={classes.Divider} />
        <Logo_VariantInverseWhite
          className={classes.Logo}
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
      </div>
    </div>
  );
});
