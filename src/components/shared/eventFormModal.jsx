import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useEventActions } from "../../hooks/commands/useEventActions";
import Calendar from "react-calendar";
import Input from "./input";
import TextArea from "./textarea";

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #222;
  opacity: 0.6;
`;

const FormContainer = styled.section`
  position: fixed;
  z-index: 100;
  background: #fcfcfc;
  top: 50%;
  left: 50%;
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
  }

  #close-btn {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
  }
`;

// const initialEventDataState = {
//   name: "",
//   street: "",
//   city: "",
//   state: "",
//   zip: "",
//   eventDate: "",
//   comment: ""
// };

const date = new Date("October 17, 2019");
console.log("the future created date: ", date);

const initialEventDataState = {
  name: "Birthday Bash",
  street: "630 9th Ave Suite",
  city: "New York",
  state: "NY",
  zip: "10036",
  eventDate: date,
  comment: "It''ll be great fun"
};

// const formatCreateEventData = ({ street, city, state, zip, ...rest }) => ({
//   address: {
//     street,
//     city,
//     state,
//     zip
//   },
//   ...rest
// });

export default function EventFormModal({
  handleCloseModal,
  createEventModalVisible
}) {
  const { createEvent } = useEventActions();
  const [eventData, setEventData] = useState(initialEventDataState);
  const dateRef = useRef(null);

  useEffect(() => {
    console.log("the dateRef: ", dateRef);
  }, []);

  const updateEventData = key => ({ target: { value } }) => {
    setEventData({ ...eventData, [key]: value });
  };

  const updateEventDate = value => {
    setEventData({ ...eventData, eventDate: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("dateRef.current.value: ", dateRef.current.value);
    console.log(
      "new Date(dateRef.current.value: ",
      new Date(dateRef.current.value)
    );
    // const data = formatCreateEventData(eventData);
    createEvent(eventData);
  };

  const showHideClassname = createEventModalVisible
    ? "display-block"
    : "display-none";

  return (
    <>
      <ModalBackground className={showHideClassname} />
      <FormContainer className={showHideClassname}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Event Name:"
            name="name"
            type="text"
            value={eventData.name}
            updateField={updateEventData}
          />
          <Input
            label="Street Address:"
            name="street"
            type="text"
            value={eventData.street}
            updateField={updateEventData}
          />
          <Input
            label="City:"
            name="city"
            type="text"
            value={eventData.city}
            updateField={updateEventData}
          />
          <Input
            label="State:"
            name="state"
            type="text"
            value={eventData.state}
            updateField={updateEventData}
          />
          <Input
            label="Zip Code:"
            name="zip"
            type="text"
            value={eventData.zip}
            updateField={updateEventData}
          />
          <Input
            label="Event Date:"
            name="eventDate"
            type="text"
            value={eventData.eventDate}
            updateField={updateEventData}
          />
          {/* <Calendar onChange={updateEventDate} value={eventData.eventDate} /> */}
          <input type="date" ref={dateRef} />
          <TextArea
            label="Comment:"
            name="comment"
            type="text"
            value={eventData.comment}
            updateField={updateEventData}
          />
          <button>Submit</button>
        </form>
        <button id="close-btn" onClick={handleCloseModal}>
          Close
        </button>
      </FormContainer>
    </>
  );
}
