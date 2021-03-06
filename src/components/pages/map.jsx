import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useUi } from "../../hooks/queries/useUi";
import { useAuth } from "../../hooks/queries/useAuth";
import { useLocation } from "../../hooks/queries/useLocation";
import { useModal } from "../../hooks/queries/useModal";
import { useUiActions } from "../../hooks/commands/useUiActions";
import { useLocationActions } from "../../hooks/commands/useLocationActions";
import { useModalActions } from "../../hooks/commands/useModalActions";
import { useListActions } from "../../hooks/commands/useListActions"
import { useList } from "../../hooks/queries/useList"
import GoogleMap from "../shared/GoogleMap";
import EventFormModal from "../shared/eventFormModal";
import EventDetailModal from "../shared/eventDetailModal"

const Container = styled.div`
  position: relative;

  #create-event--btn {
    position: absolute;
    bottom: 4%;
    left: 4%;
    padding: 1rem;
    background: #fcfcfc;
  }
`;

// Info needed for creating event:
// name
// address: {
//   street,
//   city,
//   state,
//   zip
// }
// Will be retrieved via Google API:
// lat
// lon
// initialComment
// eventDate <- will be retrieved via JavaScript (current time)

export default function Map() {
  const { loading } = useUi();
  const { currentUser } = useAuth();
  const { center } = useLocation();
  const { createEventModalVisible, eventDetailsModalVisible } = useModal();
  const { getLocation } = useLocationActions();
  const { toggleLoaderTrue, toggleLoaderFalse } = useUiActions();
  const { listEvent } = useListActions();
  const { list } = useList()
  const {
    showCreateEventModal,
    hideCreateEventModal,
    showEventDetailsModal,
    hideEventDetailsModal
  } = useModalActions();

  // useEffect(() => {
  //   const interval = setInterval(function() {
  //     if (loading) return toggleLoaderFalse();
  //     else return toggleLoaderTrue();
  //   }, 20000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [loading]);

  useEffect(() => {
    // TODO: remove,
    // but this was the request used to quickly test that axios is sending the cookie
    // along with the request.
    // const result = await axios.post("http://localhost:4000/api/events/test", {
    //   payload: { message: "Data on the request" }
    // });
    // console.log("the result of POST /api/events/test: ", result);
    toggleLoaderFalse();
    getLocation();
  }, []);

  useEffect(() => {
    console.log(center)
    listEvent(center)
  }, [center])

  return (
    // TODO:
    // Just styling modal for now... But we'll have two separate modals
    // 1. To create an event
    // 2. To list the details of a single event.
    // We'll need to provide additional data in the modalReducer to determine which
    // modal should appear.
    <Container>
      <GoogleMap center={center} list={list} handleOpenModal={showEventDetailsModal} />
      <button id="create-event--btn" onClick={showCreateEventModal}>
        Create an Event!
      </button>
      <EventFormModal
        createEventModalVisible={createEventModalVisible}
        handleCloseModal={hideCreateEventModal}
      />
      <EventDetailModal
        eventDetailsModalVisible={eventDetailsModalVisible}
        hideEventDetailsModal={hideEventDetailsModal}
      />
      {/* <EventDetailsModal /> */}
    </Container>
  );
}
