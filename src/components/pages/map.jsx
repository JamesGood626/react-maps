import React, { useEffect } from "react";
import { useUi } from "../../hooks/queries/useUi";
import { useAuth } from "../../hooks/queries/useAuth";
import { useLocation } from "../../hooks/queries/useLocation";
import { useModal } from "../../hooks/queries/useModal";
import { useUiActions } from "../../hooks/commands/useUiActions";
import { useLocationActions } from "../../hooks/commands/useLocationActions";
import { useModalActions } from "../../hooks/commands/useModalActions";
import GoogleMap from "../shared/GoogleMap";
import EventFormModal from "../shared/eventFormModal";
import axios from "axios";

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
  const { toggle_modal } = useModal();
  const { toggleLoaderTrue, toggleLoaderFalse } = useUiActions();
  const { toggleModalTrue, toggleModalFalse } = useModalActions();
  const { getLocation } = useLocationActions();

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

  return (
    // TODO:
    // Just styling modal for now... But we'll have two separate modals
    // 1. To create an event
    // 2. To list the details of a single event.
    // We'll need to provide additional data in the modalReducer to determine which
    // modal should appear.
    <div>
      <GoogleMap center={center} handleOpenModal={toggleModalTrue} />
      <EventFormModal
        toggle_modal={toggle_modal}
        handleCloseModal={toggleModalFalse}
      />
    </div>
  );
}
