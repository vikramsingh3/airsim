import React from "react";
import Card from "./Card/Card";
import classes from "./Cards.module.css";
import sim from "../../assets/sim.png";
import broadband from "../../assets/broadband.png";
import stream from "../../assets/stream.png";
import music from "../../assets/music.png";
import payment from "../../assets/payment.png";

const Cards = () => {
  let cardsData = [
    { service: "Prepaid", url: "/prepaid", logo: sim },
    { service: "Postpaid", url: "/postpaid", logo: sim },
    { service: "Braodband", url: "/broadband", logo: broadband },
    { service: "Stream", url: "/stream", logo: stream },
    { service: "Music", url: "/music", logo: music },
    { service: "Payment", url: "/payment", logo: payment },
  ];
  let cards = [];
  cardsData.forEach((card) => {
    cards.push(
      <li key={card.url}>
        <Card service={card.service} logo={card.logo} url={card.url}></Card>
      </li>
    );
  });
  return (
    <div className={classes.Cards}>
      <h3>Experience our Sevices</h3>
      <div className={classes.CardWrapper}>
        <ul>{cards}</ul>
      </div>
    </div>
  );
};

export default Cards;
