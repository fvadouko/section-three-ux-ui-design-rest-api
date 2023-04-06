import styles from "../pages/HomepageLandingPage.module.css";
import { FunctionComponent } from "react";

export const TextBanner: FunctionComponent = () => {
  return (
    <>
      <div className={styles.TextBanner}>
        <h1 className={styles.gameOn}>Game on:</h1>
        <h4 className={styles.bookYourNext}>
          Book Your Next Sports Adventure Today!
        </h4>
        <div className={styles.findNewTrainingPartnersAndWrapper}>
            <h4 className={styles.findNewTraining}>
              Find new training partners and opponents for your favorite sports
            </h4>
          </div>
        <button className={styles.findButon}>
          <span>Find Venue</span>
        </button>
      </div>
    </>
  );
};
