import * as React from 'react';
import "./EventCardHome.css";
import FontAwesome from "react-fontawesome";
import {ImageBox} from "./ImageBox";

export default class EventCardHome extends React.Component {
  render() {
    return (
      <div className="event-card-home">
        <div className="event-card-home__wrapper">
          <div className="event-card-home__image">
            {/*<div className="event-card-home__src intrinsic"/>*/}
            <ImageBox image={"/image/example.jpg"}></ImageBox>
            <div className="event-card__date">
              <strong>08 Mar 2019 - 01 Jul 2022</strong>
            </div>
          </div>
          <div className="conversion-button">
            <div className="buy-ticket-button">
              <FontAwesome
                className=""
                name="ticket"
                style={{ color: "#9CD08E", fontSize: "1.9em", marginTop: "9px"}}
              />
            </div>
          </div>
          <div className="event-card-home__title">Haarlem Heroes. Other Masters</div>
        </div>
        <div className="event-card-home__info">

        </div>
      </div>
    );
  };
};