import styles from "../pages/HomepageLandingPage.module.css";

import { FunctionComponent } from "react";


export const Copyright: FunctionComponent = () => {

  return (
    <div className={styles.copyright2023} style={{ marginBottom: "20px" }}>
      <hr className={styles.SeparationHr} />
      Copyright © 2023 SportVen LLC. All rights Reserved.
      {/* <script language="javascript" src='./resource.js' ></ script> */}
    </div>
  );
};
