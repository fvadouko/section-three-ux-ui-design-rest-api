import styles from '../pages/HomepageLandingPage.module.css';
import { FunctionComponent } from 'react';

export const Offers: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv} id="offers">
      {/*BOX OFFER*/}
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <img
            alt=""
            src="/assets/imgs/sports-icon2@2x.png"
            className={styles.boxHeaderImg}
          />
          <div className={styles.boxHeaderContent}>
            <p className={styles.boxHeaderTitle}>Fremium</p>
            <p className={styles.boxHeaderSousTitle}>Basic</p>
          </div>
        </div>
        <hr className={styles.boxHr} />
        <div className={styles.boxContentPrice}>
          <p className={styles.boxContentPriceTitle}>Free</p>
        </div>
        <button className={styles.btnCurrent}>Current</button>
        <hr className={styles.boxHr} />
        <div
          className={styles.boxContentDescription}
          id="fremium-description"
        >
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>Free to use</p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              Access to all platform features
            </p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              Pay-as-you-go venue reservations
            </p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              Limited customer support
            </p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              No discounts or exclusive access
            </p>
          </div>
        </div>
      </div>

      {/*BOX OFFER*/}
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <img
            alt=""
            src="/assets/imgs/sports-icon3@2x.png"
            className={styles.boxHeaderImg}
          />
          <div className={styles.boxHeaderContent}>
            <p className={styles.boxHeaderTitle}>Fremium</p>
            <p className={styles.boxHeaderSousTitle}>Basic</p>
          </div>
        </div>
        <hr className={styles.boxHr} />
        <div className={styles.boxContentPrice}>
          <p className={styles.boxContentPriceTitle}>45 USDT</p>
          <p className={styles.boxContentPriceSousTitle}>
            /per month
          </p>
        </div>
        <button className={styles.btnUpgrade}>Upgrade</button>
        <hr className={styles.boxHr} />
        <div className={styles.boxContentDescription}>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>45 USDT per month</p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              Access to all platform features
            </p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              10% discount on venue reservations
            </p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              Access to exclusive competitions
            </p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              Priority customer support
            </p>
          </div>
        </div>
      </div>

      {/*BOX OFFER*/}
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <img
            alt=""
            src="/assets/imgs/sports-icon4@2x.png"
            className={styles.boxHeaderImg}
          />
          <div className={styles.boxHeaderContent}>
            <p className={styles.boxHeaderTitle}>Professional</p>
            <p className={styles.boxHeaderSousTitle}>Basic</p>
          </div>
        </div>
        <hr className={styles.boxHr} />
        <div className={styles.boxContentPrice}>
          <p className={styles.boxContentPriceTitle}>90 USDT</p>
          <p className={styles.boxContentPriceSousTitle}>
            /per month
          </p>
        </div>
        <button className={styles.btnUpgrade}>Upgrade</button>
        <hr className={styles.boxHr} />
        <div className={styles.boxContentDescription}>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>Custom branding</p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              Advanced analytics and reporting
            </p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              Dedicated account management
            </p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              Bulk reservations and payments
            </p>
          </div>
          <div className={styles.interfaceEssentialcheckmarkParent}>
            <img
              className={styles.interfaceEssentialcheckmarkIcon}
              alt=""
              src="/assets/imgs/interface-essentialcheckmarksqaure@2x.png"
            />
            <p className={styles.freeToUse}>
              On-site support and training
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
