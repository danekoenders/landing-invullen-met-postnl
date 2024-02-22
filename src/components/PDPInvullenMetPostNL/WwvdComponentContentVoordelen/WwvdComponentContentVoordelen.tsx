import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Laptop_api } from '../Laptop_api/Laptop_api';
import { Laptop_cases } from '../Laptop_cases/Laptop_cases';
import { Laptop_coffee } from '../Laptop_coffee/Laptop_coffee';
import { GroupIcon } from './GroupIcon';
import { GroupIcon2 } from './GroupIcon2';
import { Page1Icon } from './Page1Icon';
import classes from './WwvdComponentContentVoordelen.module.css';

interface Props {
  className?: string;
  swap?: {
    laptop_cases?: ReactNode;
    laptop_api?: ReactNode;
    laptop_coffee?: ReactNode;
  };
  text?: {
    deVoordelenVanDeAdrescheck?: ReactNode;
    occaecatEstIpsumReprehenderitR?: ReactNode;
    occaecatEstIpsumReprehenderitR2?: ReactNode;
    occaecatEstIpsumReprehenderitR3?: ReactNode;
    occaecatEstIpsumReprehenderitR4?: ReactNode;
    occaecatEstIpsumReprehenderitR5?: ReactNode;
    occaecatEstIpsumReprehenderitR6?: ReactNode;
  };
}
/* @figmaId 184:27422 */
export const WwvdComponentContentVoordelen: FC<Props> = memo(function WwvdComponentContentVoordelen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame13}>
        {props.text?.deVoordelenVanDeAdrescheck != null ? (
          props.text?.deVoordelenVanDeAdrescheck
        ) : (
          <div className={classes.deVoordelenVanDeAdrescheck}>De voordelen van de adrescheck</div>
        )}
        <div className={classes.frame12}>
          <div className={classes.frame8}>
            {props.swap?.laptop_cases || (
              <Laptop_cases
                className={classes.laptop_cases}
                classes={{ group: classes.group }}
                swap={{
                  group: (
                    <div className={classes.group}>
                      <GroupIcon className={classes.icon} />
                    </div>
                  ),
                }}
              />
            )}
            <div className={classes.frame19}>
              {props.text?.occaecatEstIpsumReprehenderitR != null ? (
                props.text?.occaecatEstIpsumReprehenderitR
              ) : (
                <div className={classes.occaecatEstIpsumReprehenderitR}>Altijd de juiste adresstructuur</div>
              )}
              {props.text?.occaecatEstIpsumReprehenderitR2 != null ? (
                props.text?.occaecatEstIpsumReprehenderitR2
              ) : (
                <div className={classes.occaecatEstIpsumReprehenderitR2}>
                  Door eenvoudigere check out middels 8,2 miljoen PostNL accounts. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse Lorem ipsum dolo.
                </div>
              )}
            </div>
          </div>
          <div className={classes.frame9}>
            {props.swap?.laptop_api || (
              <Laptop_api
                className={classes.laptop_api}
                classes={{ group: classes.group2 }}
                swap={{
                  group: (
                    <div className={classes.group2}>
                      <GroupIcon2 className={classes.icon2} />
                    </div>
                  ),
                }}
              />
            )}
            <div className={classes.frame18}>
              {props.text?.occaecatEstIpsumReprehenderitR3 != null ? (
                props.text?.occaecatEstIpsumReprehenderitR3
              ) : (
                <div className={classes.occaecatEstIpsumReprehenderitR3}>Direct je API-key</div>
              )}
              {props.text?.occaecatEstIpsumReprehenderitR4 != null ? (
                props.text?.occaecatEstIpsumReprehenderitR4
              ) : (
                <div className={classes.occaecatEstIpsumReprehenderitR4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu suscipit purus, eget malesuada
                  magna. Fusce pretium mattis dui. Quisque facilisis lobortis sapien
                </div>
              )}
            </div>
          </div>
          <div className={classes.frame10}>
            {props.swap?.laptop_coffee || (
              <Laptop_coffee
                className={classes.laptop_coffee}
                classes={{ page1: classes.page1 }}
                swap={{
                  page1: (
                    <div className={classes.page1}>
                      <Page1Icon className={classes.icon3} />
                    </div>
                  ),
                }}
              />
            )}
            <div className={classes.frame17}>
              {props.text?.occaecatEstIpsumReprehenderitR5 != null ? (
                props.text?.occaecatEstIpsumReprehenderitR5
              ) : (
                <div className={classes.occaecatEstIpsumReprehenderitR5}>Werkt met veelgebruikte plug-ins</div>
              )}
              {props.text?.occaecatEstIpsumReprehenderitR6 != null ? (
                props.text?.occaecatEstIpsumReprehenderitR6
              ) : (
                <div className={classes.occaecatEstIpsumReprehenderitR6}>
                  Vergroot je betrouwbaarheid met Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  eu suscipit purus, eget malesuada magna. Fusce pretium mattis dui.{' '}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
