import React from "react";
import "../../assets/css/home.css";
import BannerHome from "../../components/BannerHome/BannerHome";
import Thumb from "../../components/Thumb/Thumb";


const Home = function () {
  return (
    <main>
      <BannerHome />

      <section className="cardTable">
        <Thumb />
      </section>
    </main>
  );
};

export default Home;
