import styles from '../pages/HomepageLandingPage.module.css';
import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
  return (
    <>
      <hr className={styles.SeparationHr} />
      <div className={styles.rectangleParent} id="footer">
        {/* <img className={styles.frameChild15} alt="" src="/assets/imgs/rectangle-42@2x.png" />
      <img className={styles.frameChild16} alt="" src="/assets/imgs/rectangle-42@2x.png" /> */}

        <div>
          {/* LOGO */}
          <div className={styles.image12Group}>
            <img
              className={styles.image12Icon1}
              alt=""
              src="/assets/imgs/image-121@2x.png"
            />
            <p
              className={styles.bookPlayConnect}
              style={{ marginBottom: '30px' }}
            >
              Book, Play, Connect - Elevate Your Game!
            </p>
          </div>
          {/* SOCIAL*/}
          <div className={styles.frameParent6}>
            <div className={styles.akarIconslinkedinFillWrapper}>
              <img
                className={styles.akarIconslinkedinFill}
                alt=""
                src="/assets/imgs/akariconslinkedinfill.svg"
              />
            </div>
            <div className={styles.bxlfacebookWrapper}>
              <img
                className={styles.akarIconslinkedinFill}
                alt=""
                src="/assets/imgs/bxlfacebook.svg"
              />
            </div>
            <div className={styles.bxlfacebookWrapper}>
              <img
                className={styles.akarIconslinkedinFill}
                alt=""
                src="/assets/imgs/antdesigninstagramfilled.svg"
              />
            </div>
            <div className={styles.bxlfacebookWrapper}>
              <img
                className={styles.akarIconslinkedinFill}
                alt=""
                src="/assets/imgs/bxltiktok.svg"
              />
            </div>
          </div>
        </div>
        <ul
          className="footernavMenu"
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%',
            gap: '20px',
          }}
        >
          <li>
            <a href="">Homepage</a>
          </li>
          <li>
            <a href="">All Venues</a>
          </li>
          <li>
            <a href="">Our Mission</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>

        {/* SUBSCRIBE FORM*/}
        <div className={styles.frameParent7}>
          <p className={styles.wellSendYouANiceLetterOWrapper}>
            <span className={styles.wellSendYou}>
              We’ll send you a nice letter once per week. No spam, we
              promise.
            </span>
          </p>
          <div className={styles.frameParent8}>
            <textarea
              className={styles.frameTextarea}
              placeholder="Enter your email"
            />
            <button className={styles.button5}>
              <span className={styles.getStartedNow}>Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
