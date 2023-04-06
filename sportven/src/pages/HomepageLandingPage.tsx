import { FunctionComponent } from "react";
import styles from "./HomepageLandingPage.module.css";
import { Offers } from "../components/Offers";
import { Gallery } from "../components/Gallery";
import { Footer } from "../components/Footer";
import { SearchContainer } from "../components/SearchContainer";
import { Banner } from "../components/Banner";
import { Copyright } from "../components/Copyright";
import { Navbar } from "../components/Navbar";

const HomepageLandingPage: FunctionComponent = () => {
  return (
    <div className={styles.homepageLandingPage} id="landing">
      <Navbar />
      <div className={styles.container}>
        <Banner />
        <Offers />
      </div>
      <SearchContainer />
      <div className={styles.container}>
        <Gallery />
        <Footer />
      </div>
      <Copyright />
    </div>
  );
};

export default HomepageLandingPage;
