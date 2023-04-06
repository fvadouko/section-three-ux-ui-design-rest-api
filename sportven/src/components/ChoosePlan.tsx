import styles from "../pages/HomepageLandingPage.module.css";
import { FunctionComponent } from "react";

export const ChoosePlan: FunctionComponent = () => {
  return (
    <div className={styles.planChoose}>
      <p className={styles.planChooseTitle}>Choose a Plan That Fits Your Needs</p>
      <p className={styles.planChooseText}>
        Find the perfect plan for your sports team or organization whether
        you're <br/>just starting out or looking to take your game to the next level.
      </p>
    </div>
  );
};
