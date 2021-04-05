import React from "react";
import {
  Html5,
  CssThree,
  Javascript,
  Jquery,
  Mysql,
  Firebase,
  Mongodb,
  Php,
  Wordpress,
  Shopify,
  NodeDotJs,
  Express,
  ReactJs,
  Ionic,
  Tailwindcss,
} from "@icons-pack/react-simple-icons";
import "./home.css";
import portrait from "./images/julius.png";

// Components
import PortfolioItem from "./PortfolioItem";
import Tech from "./Tech";
import Footer from "./Footer";

// Portfolio images
import cribsRender from "./images/cribs-render.jpg";
import doRender from "./images/do-render.jpg";
import elevpraktikRender from "./images/elevpraktik-render.jpg";
import qknivesRender from "./images/qknives-render.jpg";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="container heroInner">
          <div className="heroText">
            <h1>
              Hi, I'm Julius Lissau 👋
              <br />
              I design and develop
              <br />
              apps and websites
            </h1>
          </div>
          <div className="heroImage">
            <img src={portrait} alt="Portrait of Julius" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="center spacer">
          <h3 className="mbm">Check out my work 👇</h3>
          <p className="mbl">
            Have a look at a few of the websites and apps I've created.
            <br />
            For each project I've been responsible for both the design,
            front-end and back-end development.
          </p>
        </div>
      </div>
      <PortfolioItem
        image={elevpraktikRender}
        color="#5b8c8e"
        title="Denmarks largest platform for early internships and jobs"
        website="https://elevpraktik.dk"
        features={[
          "Advanced sign-up and admin panel",
          "Infinite scroll and instant filtering",
          "Several user roles",
          "SEO: Ranks #1 on Google",
        ]}
      />
      <PortfolioItem
        image={qknivesRender}
        color="#983d51"
        title="Webshop for japanese knives"
        website="https://qknives.dk"
        features={[
          "High conversion rate",
          "Easy checkout and shipping flow",
          "Easily customizable",
        ]}
      />
      <PortfolioItem
        image={doRender}
        color="#bea177"
        title="Denmarks largest platform for horse stables"
        website="https://danskopstaldning.dk"
        features={[
          "Custom Google Maps integration",
          "SEO: Ranks #1 on Google",
          "Full admin panel for hosts",
          "Subscribtion payments integration",
        ]}
      />
      <PortfolioItem
        image={cribsRender}
        color="#849bc5"
        title="Hybrid property-rental platform"
        website="https://cribs.dk"
        features={[
          "Hybrid code – run on both web and mobile",
          "Live chat between users",
          "Single-page applicaiton",
          "Advanced search and filtering",
        ]}
      />
      <div className="container">
        <div className="spacer">
          <div className="center">
            <h3 className="mbsm">My tech toolbelt</h3>
            <p className="mbl">
              These are the programming languages, frameworks, databases and
              CMSs I'm experienced in using. I'm a fast learner, so even if your
              project requires another skill than listed below, feel free to
              contact me anyway.
            </p>
          </div>
          <div className="techContainer">
            <Tech text="HTML" color="#E34F26">
              <Html5 size={22} color="#fff" />
            </Tech>
            <Tech text="CSS" color="#1572B6">
              <CssThree size={22} color="#fff" />
            </Tech>
            <Tech text="Tailwind CSS" color="#38B2AC">
              <Tailwindcss size={22} color="#fff" />
            </Tech>
            <Tech text="Javascript" color="#F7DF1E">
              <Javascript size={22} color="#000" />
            </Tech>
            <Tech text="jQuery" color="#0769AD">
              <Jquery size={22} color="#fff" />
            </Tech>
            <Tech text="React" color="#000">
              <ReactJs size={22} color="#61DAFB" />
            </Tech>
            <Tech text="React Native" color="#000">
              <ReactJs size={22} color="#61DAFB" />
            </Tech>
            <Tech text="Ionic" color="#3880FF">
              <Ionic size={22} color="#fff" />
            </Tech>
            <Tech text="Node.js" color="#339933">
              <NodeDotJs size={22} color="#fff" />
            </Tech>
            <Tech text="Express" color="#000000">
              <Express size={22} color="#fff" />
            </Tech>
            <Tech text="PHP" color="#777BB4">
              <Php size={22} color="#fff" />
            </Tech>
            <Tech text="MySQL" color="#4479A1">
              <Mysql size={22} color="#fff" />
            </Tech>
            <Tech text="Firebase" color="#FFCA28">
              <Firebase size={22} color="#000" />
            </Tech>
            <Tech text="MongoDB" color="#47A248">
              <Mongodb size={22} color="#fff" />
            </Tech>
            <Tech text="Wordpress" color="#21759B">
              <Wordpress size={22} color="#fff" />
            </Tech>
            <Tech text="Shopify" color="#7AB55C">
              <Shopify size={22} color="#fff" />
            </Tech>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
