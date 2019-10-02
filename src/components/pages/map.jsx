import React, { useEffect } from "react";
import { useUi } from "../../hooks/queries/useUi";
import { useAuth } from "../../hooks/queries/useAuth";
import { useLocation } from "../../hooks/queries/useLocation";
import { useModal } from "../../hooks/queries/useModal";
import { useUiActions } from "../../hooks/commands/useUiActions";
import { useLocationActions } from "../../hooks/commands/getLocationActions"
import { useModalActions } from "../../hooks/commands/useModalActions"
import GoogleMap from "../shared/GoogleMap"
import EventFormModal from '../shared/eventFormModal'

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
  const { getLocation } = useLocationActions()
  

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
    toggleLoaderFalse();
    getLocation();
  }, []);

  const handleOpenModal = () => {
    toggleModalTrue()
  }

  const handleCloseModal = () => {
    toggleModalFalse()
  }
  
    return (
      <div>
        <GoogleMap center={center}/>
        <EventFormModal toggle_modal={toggle_modal} handleClose={handleCloseModal} />
        <button type='button' onClick={handleOpenModal}>Click</button>
      </div>
    );
}
