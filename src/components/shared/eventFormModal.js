import React, { useState } from "react";
import { useEventActions } from "../../hooks/commands/createEventActions";

const initialEventDataState = {
  name: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  eventDate: ""
};

export default function EventFormModal({handleClose, toggle_modal}) {
  const { createEvent } = useEventActions();
  const [eventData, setEventData] = useState(initialEventDataState);

  const updateEventData = key => ({ target: { value } }) => {
    setEventData({ ...eventData, [key]: value })};

  const handleSubmit = e => {
    e.preventDefault();
    createEvent(eventData);
  };

  const showHideClassname = toggle_modal ? "event-modal display-block" : "event-modal display-none"

  return (
    <div className={showHideClassname}>
      <section className="event-modal-main">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Event Name:</label>
          <input
            id="name"
            type="text"
            value={eventData.name}
            onChange={updateEventData("name")}
          />
          <label htmlFor="street">Street Address:</label>
          <input
            id="street"
            type="text"
            value={eventData.street}
            onChange={updateEventData('street')}
          />
          <label htmlFor="address.city">City:</label>
          <input
            id="address.city"
            type="text"
            value={eventData.city}
            onChange={updateEventData('city')}
          />
          <label htmlFor="state">State:</label>
          <input
            id="state"
            type="text"
            value={eventData.state}
            onChange={updateEventData("state")}
          />
          <label htmlFor="zip">Zip Code:</label>
          <input
            id="zip"
            type="text"
            value={eventData.zip}
            onChange={updateEventData("zip")}
          />
          <label htmlFor="eventDate">Event Date:</label>
          <input
            id="eventDate"
            type="text"
            value={eventData.eventDate}
            onChange={updateEventData("eventDate")}
          />
          <button>Submit</button>
        </form>
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
}
