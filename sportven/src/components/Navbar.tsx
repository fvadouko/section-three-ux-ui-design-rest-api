import styles from '../pages/HomepageLandingPage.module.css';
import { FunctionComponent, useState } from 'react';

export const Navbar: FunctionComponent = () => {
  const [navOpenMenuResponsive, setNnavOpenMenuResponsive] =
    useState<boolean>(false);

  const toggleNav = () => {
    setNnavOpenMenuResponsive(!navOpenMenuResponsive);
  };

  return (
    <nav className={styles.navBar}>
      <img
        className={styles.navLogo}
        src="/assets/imgs/image-12@2x.png"
        alt=""
        id="logo"
      />
      <div className={styles.navBarToggle}>
        {!navOpenMenuResponsive ? (
          <i className="fas fa-bars" onClick={toggleNav}></i>
        ) : (
          <i className="fas fa-times" onClick={toggleNav}></i>
        )}
      </div>
      {navOpenMenuResponsive && (
        <div
          id="navMenuResponsive"
          className={styles.navBarToggleResponsive}
        >
          <ul id="navMenu" className={styles.navBarToggleResponsive}>
            <li>
              <a href="" className={styles.homepage}>
                Homepage
              </a>
            </li>
            <li>
              <a href="" className={styles.allVenues}>
                All Venues
              </a>
            </li>
            <li>
              <a href="" className={styles.allVenues}>
                Our Mission
              </a>
            </li>
            <li>
              <a href="" className={styles.allVenues}>
                Contact Us
              </a>
            </li>
            <li>
              <a
                href=""
                className={styles.allVenues}
                style={{ marginLeft: '0px' }}
              >
                Login
              </a>
            </li>
            <li className={styles.btnLogin}>
              <a href="" className={styles.signUp}>
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      )}
      <ul id="navMenu" className={styles.navMenu}>
        <li>
          <a href="" className={styles.homepage}>
            Homepage
          </a>
        </li>
        <li>
          <a href="" className={styles.allVenues}>
            All Venues
          </a>
        </li>
        <li>
          <a href="" className={styles.allVenues}>
            Our Mission
          </a>
        </li>
        <li>
          <a href="" className={styles.allVenues}>
            Contact Us
          </a>
        </li>
        <li>
          <a
            href=""
            className={styles.allVenues}
            style={{ marginLeft: '150px' }}
          >
            Login
          </a>
        </li>
        <li className={styles.btnLogin}>
          <a href="" className={styles.signUp}>
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};
