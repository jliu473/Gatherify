import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import EventDashboard from "./EventDashboard.tsx";
import { get, post } from "../../utilities";
import CopyLinkButton from "../modules/CopyLinkButton";
import EventChange from "./EventChange.tsx";

type Dashboard = RouteComponentProps & {
  id: String;
};
const EventDisplay = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [currentComponent, setCurrentComponent] = useState("EventDashboard");

  useEffect(() => {
    get("/api/events", { id: props.id }).then((event) => {
      setName(event.name);
      setDate(event.date);
      setTime(event.time);
      setLocation(event.location);
      setDescription(event.description);
    });
  }, []);

  return (
    <>
      <div>
      {currentComponent === 'EventDashboard' ? (<EventDashboard/>) : (<EventChange></EventChange>)}
      </div> 
      {/* Event Details


      {/* Change Button
      <div>
        <button className="Edit-button" onClick = {() => setCurrentComponent(currentComponent === 'A' ? 'B' : 'A')}>Edit Event </button>
      </div> */}

      {/* Invite Link */}
      {/* <div> Here is your invite link</div>
      <div> gatherify.herokuapp.com/invite/{props.id}</div>
      <CopyLinkButton link = "gatherify.herokuapp.com/invite/" eventId = {props.id}></CopyLinkButton> */}

    </>
  );
};

export default EventDisplay;