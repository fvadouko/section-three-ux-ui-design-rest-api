import { FunctionComponent } from 'react';
import styles from '../pages/HomepageLandingPage.module.css';
import { ChoosePlan } from './ChoosePlan';
import { TextBanner } from './TextBanner';

export const Banner: FunctionComponent = () => {
  return (
    <>
      <div className={styles.banner}>
        <img
          src="/assets/imgs/banner_bg_1.png"
          alt=""
          className={styles.imgBanner}
        />
        <TextBanner />
        <div className={styles.xFactor}></div>
      </div>
      <ChoosePlan />
    </>
  );
};
