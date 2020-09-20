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
    { service: "Prepaid", url: "", logo: sim },
    { service: "Postpaid", url: "", logo: sim },
    { service: "Braodband", url: "", logo: broadband },
    { service: "AirStream", url: "", logo: stream },
    { service: "AirMusic", url: "", logo: music },
    { service: "AirPayment", url: "", logo: payment },
  ];
  let cards = [];
  cardsData.forEach((card) => {
    cards.push(
      <li>
        <Card service={card.service} logo={card.logo}></Card>
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
