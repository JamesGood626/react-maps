import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useModal } from "../../hooks/queries/useModal"
import { useEventActions } from "../../hooks/commands/useEventActions";
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


// const formatCreateEventData = ({ street, city, state, zip, ...rest }) => ({
//   address: {
//     street,
//     city,
//     state,
//     zip
//   },
//   ...rest
// });

export default function EventDetailModal({
    hideEventDetailsModal,
    eventDetailsModalVisible
}) {
    const { event } = useModal()
  const dateRef = useRef(null);

  useEffect(() => {
    console.log("the dateRef: ", dateRef);
  }, []);

//   const updateEventData = key => ({ target: { value } }) => {
//     setEventData({ ...eventData, [key]: value });
//   };

//   const updateEventDate = value => {
//     setEventData({ ...eventData, eventDate: value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log("dateRef.current.value: ", dateRef.current.value);
//     console.log(
//       "new Date(dateRef.current.value: ",
//       new Date(dateRef.current.value)
//     );
//     // const data = formatCreateEventData(eventData);
//     createEvent(eventData);
//   };

  const showHideClassname = eventDetailsModalVisible
    ? "display-block"
    : "display-none";

    let comments = []
    if (event !== undefined){
        comments = event.comments.map(comment => {
            return(
                <li>{comment.text}</li>
            )
        })
    }

  return (
    <>
      <ModalBackground className={showHideClassname} />
      <FormContainer className={showHideClassname}>
        <form>
          {/* <TextArea
            label="Comment:"
            name="comment"
            type="text"
            // value={eventData.comment}
            // updateField={updateEventData}
          /> */}
            <div>Event Name: {event.name}</div>
            <div>Event Date: {event.eventDate}</div>
            <div>Address: {event.address.street}, {event.address.city}, {event.address.state}, {event.address.zip}</div>
            <div>Comments: 
                {comments}
            </div>
        </form>
        <button id="close-btn" onClick={hideEventDetailsModal}>
          Close
        </button>
      </FormContainer>
    </>
  );
}
