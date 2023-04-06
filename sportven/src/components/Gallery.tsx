import styles from '../pages/HomepageLandingPage.module.css';
import { FunctionComponent } from 'react';

export const Gallery: FunctionComponent = () => {
  return (
    <>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameParent11}>
          <div className={styles.sporttypeParent}>
            <div className={styles.sporttype}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon5@2x.png"
              />
              <span className={styles.basketball}>All</span>
            </div>
            <div className={styles.sporttype1}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon6@2x.png"
              />
              <span className={styles.basketball}>Basketball</span>
            </div>
            <div className={styles.sporttype2}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon7@2x.png"
              />
              <span className={styles.basketball}>Tennis</span>
            </div>
            <div className={styles.sporttype2}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon8@2x.png"
              />
              <span className={styles.basketball}>Ping Pong</span>
            </div>

            <div className={styles.sporttype2}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon9@2x.png"
              />
              <span className={styles.basketball}>Soccer</span>
            </div>
            <div className={styles.sporttype2}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon10@2x.png"
              />
              <span className={styles.basketball}>Rugby</span>
            </div>
            <div className={styles.sporttype2}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon11@2x.png"
              />
              <span className={styles.basketball}>Golf</span>
            </div>
            <div className={styles.sporttype2}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon12@2x.png"
              />
              <span className={styles.basketball}>Swimming</span>
            </div>
            <div className={styles.sporttype2}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon13@2x.png"
              />
              <span className={styles.basketball}>Baseball</span>
            </div>
            <div className={styles.sporttype2}>
              <img
                className={styles.sportsIcon5}
                alt=""
                src="/assets/imgs/sports-icon14@2x.png"
              />
              <span className={styles.basketball}>Chess</span>
            </div>

            <img
              className={styles.interfaceEssentialcheckmark}
              alt=""
              src="/assets/imgs/arrows-diagramsarrow.svg"
            />
            <button className={styles.button7}>
              <span className={styles.filters}>Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.frameParent12} id="gallery">
        <div className={styles.sporttypeParent}>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/assets/imgs/rectangle-25@2x.png"
            />
            <div className={styles.victoryParkSportsComplexParent}>
              <h4 className={styles.victoryParkSports}>
                Victory Park Sports Complex
              </h4>
              <h6 className={styles.downtown}>Golf</h6>
              <h6 className={styles.downtown}>Downtown</h6>
              <div className={styles.parent}>
                <span className={styles.span}>$45</span>
                <span className={styles.basketball}>hour</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/assets/imgs/rectangle-251@2x.png"
            />
            <div className={styles.victoryParkSportsComplexParent}>
              <h4 className={styles.victoryParkSports}>
                Spin City Tennis Club
              </h4>
              <h6 className={styles.downtown}>Tennis</h6>
              <h6 className={styles.downtown}>Eastside</h6>
              <div className={styles.parent}>
                <span className={styles.span}>$20</span>
                <span className={styles.basketball}>hour</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/assets/imgs/rectangle-252@2x.png"
            />
            <div className={styles.victoryParkSportsComplexParent}>
              <h4 className={styles.victoryParkSports}>
                NetBusters Basketball Arena
              </h4>
              <h6 className={styles.downtown}>Basketball / Rubgy</h6>
              <h6 className={styles.downtown}>West End</h6>
              <div className={styles.parent}>
                <span className={styles.span}>$25</span>
                <span className={styles.basketball}>hour</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/assets/imgs/rectangle-253@2x.png"
            />
            <div className={styles.victoryParkSportsComplexParent}>
              <h4 className={styles.victoryParkSports}>
                Field of Dreams Soccer Fields
              </h4>
              <h6 className={styles.downtown}>Soccer / Basketball</h6>
              <h6 className={styles.downtown}>North Shore</h6>
              <div className={styles.parent}>
                <span className={styles.span}>$42</span>
                <span className={styles.basketball}>hour</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/assets/imgs/rectangle-254@2x.png"
            />
            <div className={styles.victoryParkSportsComplexParent}>
              <h4 className={styles.victoryParkSports}>
                Hoops Central Basketball Courts
              </h4>
              <h6 className={styles.downtown}>
                Tennis / Basketball / Rugby / Soccer
              </h6>
              <h6 className={styles.downtown}>Downtown</h6>
              <div className={styles.parent}>
                <span className={styles.span}>$15</span>
                <span className={styles.basketball}>hour</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/assets/imgs/rectangle-255@2x.png"
            />
            <div className={styles.victoryParkSportsComplexParent}>
              <h4 className={styles.victoryParkSports}>
                Handball Heaven
              </h4>
              <h6 className={styles.downtown}>
                Pools / Table Tennis / Basketball
              </h6>
              <h6 className={styles.downtown}>Downtown</h6>
              <div className={styles.parent}>
                <span className={styles.span}>$15</span>
                <span className={styles.basketball}>hour</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/assets/imgs/rectangle-256@2x.png"
            />
            <div className={styles.victoryParkSportsComplexParent}>
              <h4 className={styles.victoryParkSports}>
                Ace Ping Pong Palace
              </h4>
              <h6 className={styles.downtown}>Tennis</h6>
              <h6 className={styles.downtown}>Uptown</h6>
              <div className={styles.parent}>
                <span className={styles.span}>$19</span>
                <span className={styles.basketball}>hour</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/assets/imgs/rectangle-257@2x.png"
            />
            <div className={styles.victoryParkSportsComplexParent}>
              <h4 className={styles.victoryParkSports}>
                The Cage Indoor Football Center
              </h4>
              <h6 className={styles.downtown}>Golf</h6>
              <h6 className={styles.downtown}>Southside</h6>
              <div className={styles.parent}>
                <span className={styles.span}>$80</span>
                <span className={styles.basketball}>hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
