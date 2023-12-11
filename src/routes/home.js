import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import imgChatIcon from "../img/icon-chat.png";
import imgMoneyIcon from "../img/icon-money.png";
import imgSecurityIcon from "../img/icon-security.png";
import FeatureItem from "../components/featureItem.js";

const Home = () => {
  const featuresContent = [
    {
      img: imgChatIcon,
      alt: "logo chat",
      title: "You are our #1 priority",
      paragraphe:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      img: imgMoneyIcon,
      alt: "logo money",
      title: "More savings means higher rates",
      paragraphe:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      img: imgSecurityIcon,
      alt: "logo security",
      title: "Security you can trust",
      paragraphe:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];
  return (
    <>
      <Nav />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {featuresContent.map((feature) => {
            return (
              <FeatureItem
                key={feature.alt + feature.title}
                img={feature.img}
                alt={feature.alt}
                title={feature.title}
                paragraphe={feature.paragraphe}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
