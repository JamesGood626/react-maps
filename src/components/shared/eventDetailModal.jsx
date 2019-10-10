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

  #event-details-container {
    padding-left: 0;
  }

  #close-btn {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
  }

  #event-header {
    h2 {
        font-size: 2rem;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: -1rem;
  }

  #event-address {
    color: #fcfcfc;
    background: #02C39A;
    padding: 1rem 1rem;

      p {
          margin-top: 0;
          font-size: 1.2rem;
      }

      div {
          font-size: 1.1rem;
      }
  }

  #event-comment-list {
      margin-top: 1rem;
      padding: 0;
  }

  .event-comment {
    list-style-type: none;
    width: 50%;
    border: 2px solid #222;
    padding: 0.8rem;
    text-wrap: wrap;
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

  const formatHumanReadableDate = (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

  const showEventIfExists = (event) => {
      console.log("DOES THE EVENT EXIST? ", event)
    if (event !== undefined){
        if (Object.keys(event).length > 0) {
            return event
        }
        else {
            return null
        }

    }else {
        return null
    }
  }

  const showHideClassname = eventDetailsModalVisible
    ? "display-block"
    : "display-none";

    let modal = []
        modal = (event) => {
            return showEventIfExists(event) === null ? null : (
                    <>
                        <div id="event-header">
                            <h2>{event.name}</h2>
                            <div>{formatHumanReadableDate(date)}</div>
                        </div>
                        <div id="event-address">
                            <p>Come Join Us At!</p>
                            <div >{event.address.street}, {event.address.city}, {event.address.state}, {event.address.zip}</div>
                        </div>
                        <ul id="event-comment-list">
                        {
                        event.comments.map(comment => {
                            return(
                                <li className="event-comment">{comment.text}</li>
                            )
                        })}
                        </ul>
                    </>
                )
           
        }
    
    

  return (
    <>
      <ModalBackground className={showHideClassname} />
      <FormContainer className={showHideClassname}>
        <div id="event-details-container">
          {/* <TextArea
            label="Comment:"
            name="comment"
            type="text"
            // value={eventData.comment}
            // updateField={updateEventData}
          /> */}
            {modal(event)}
        </div>
        <button id="close-btn" onClick={hideEventDetailsModal}>
          Close
        </button>
      </FormContainer>
    </>
  );
}
