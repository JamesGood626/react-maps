import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { useEvents } from "../../hooks/queries/useEvents";
import { GOOGLE_KEY } from "../../secrets";
import styled from "styled-components";

const Pin = styled.div`
  position: relative;
  width: 1.8rem;
  height: 1.8rem;
  background: #222;
  border-radius: 50%;

  &:before {
    content: "";
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 50%;
    background: #fcfcfc;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0.18rem;
    bottom: -1.05rem;
    background: transparent;
    border: 0.7rem solid rgba(0, 0, 0, 0);
    border-bottom: 0.7rem solid #222;
    transform: rotate(180deg);
  }

  &:hover {
    cursor: default;
  }
`;

export default function GoogleMap({ center, list, handleOpenModal }) {

  const MapPin = ({ lat, lng, event }) => (
    // TODO:
    // Pass in eventId of the particular event to the handleOpenModal function
    // so that you may update the currentlyViewedEvent in redux state with data from
    // an API request to fetch the event + comments so that it may be accessible
    // from the modal that displayed an Event's details.
    <Pin lat={lat} lng={lng} onClick={() => handleOpenModal(event)} />
  );
  const events = list.events
  let markers = []
  if (events !== undefined){
    markers = events.map(event => {
      const coords = event.location.coordinates
      const lat = coords[0]
      const lng = coords[1]
      return (
        <MapPin lat={lat} lng={lng} event={event} />
      )
    })
  }
    
  

  // const defaultProps = {
  //     center: {
  //         lat: lat,
  //         lng: lng
  //     },
  //     zoom: 15
  // }
  // console.log(typeof lng)
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_KEY }}
        center={center}
        zoom={15}
      >
        {markers}
        {/* <MapPin lat={40.7600473} lng={-73.9911963} />
        <MapPin lat={59.955413} lng={30.337844} /> */}
      </GoogleMapReact>
    </div>
  );
}
