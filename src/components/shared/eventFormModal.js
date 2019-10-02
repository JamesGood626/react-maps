import React, { useState } from "react";
import { useEventActions } from "../../hooks/commands/createEventActions";
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #222;
  opacity: 0.5;
`

const FormContainer = styled.section`
  position: fixed;
  z-index: 100;
  background: #fcfcfc;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  max-width: 24rem;
  padding: 2rem 14vw;
  padding-top: 4rem;
  border-radius: 0.4rem;
  max-height: 30rem;
  overflow-y: scroll;

  form {
    background: #fcfcfc;

    span {
      display: flex;
      flex-direction: column;
      height: 4rem;
      margin-bottom: 0.6rem;

      label {
        /* TODO: Apply a nice font-family */
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
      }

      input {
        height: 1.8rem;
        border: 0.1rem solid #222;
        background: rgba(0, 0, 0, 0);
      }
    }
  }

  #close-btn {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
  }
`

const initialEventDataState = {
  name: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  eventDate: ""
};

export default function EventFormModal({ handleClose, toggle_modal }) {
  const { createEvent } = useEventActions();
  const [eventData, setEventData] = useState(initialEventDataState);

  const updateEventData = key => ({ target: { value } }) => {
    setEventData({ ...eventData, [key]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createEvent(eventData);
  };

  const showHideClassname = toggle_modal
    ? "display-block"
    : "display-none";

  return (
    <>
      <ModalBackground className={showHideClassname} />
      <FormContainer>
        <form className={showHideClassname} onSubmit={handleSubmit}>
          <span>
            <label htmlFor="name">Event Name:</label>
            <input
              id="name"
              type="text"
              value={eventData.name}
              onChange={updateEventData("name")}
            />
          </span>
          <span>
            <label htmlFor="street">Street Address:</label>
            <input
              id="street"
              type="text"
              value={eventData.street}
              onChange={updateEventData("street")}
            />
          </span>
          <span>
            <label htmlFor="address.city">City:</label>
            <input
              id="address.city"
              type="text"
              value={eventData.city}
              onChange={updateEventData("city")}
            />
          </span>
          <span>
            <label htmlFor="state">State:</label>
            <input
              id="state"
              type="text"
              value={eventData.state}
              onChange={updateEventData("state")}
            />
          </span>
          <span>
            <label htmlFor="zip">Zip Code:</label>
            <input
              id="zip"
              type="text"
              value={eventData.zip}
              onChange={updateEventData("zip")}
            />
          </span>
          <span>
            <label htmlFor="eventDate">Event Date:</label>
            <input
              id="eventDate"
              type="text"
              value={eventData.eventDate}
              onChange={updateEventData("eventDate")}
            />
          </span>
          <span>
            <label htmlFor="eventDate">Event Date:</label>
            <input
              id="eventDate"
              type="text"
              value={eventData.eventDate}
              onChange={updateEventData("eventDate")}
            />
          </span>
          <span>
            <label htmlFor="eventDate">Event Date:</label>
            <input
              id="eventDate"
              type="text"
              value={eventData.eventDate}
              onChange={updateEventData("eventDate")}
            />
          </span>
          <button>Submit</button>
        </form>
        <button id="close-btn" onClick={handleClose}>Close</button>
      </FormContainer>
    </>
  );
}
