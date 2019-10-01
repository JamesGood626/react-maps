import React, { useState } from "react";
import { useEventActions } from "../../hooks/commands/createEventActions";

const initialEventDataState = {
  name: "",
  address: "",
  eventDate: ""
};

export default function EventForm() {
  const { createEvent } = useEventActions();
  const [eventData, setEventData] = useState(initialEventDataState);

  const updateEventData = key => ({ target: { value } }) =>
    setEventData({ ...eventData, [key]: value });

  const handleSubmit = e => {
    e.preventDefault();
    createEvent(eventData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Event Name:</label>
      <input
        id="name"
        type="text"
        value={eventData.name}
        onChange={updateEventData("name")}
      />
      <label htmlFor="address">Address:</label>
      <input
        id="address"
        type="text"
        value={eventData.address}
        onChange={updateEventData("address")}
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
  );
}
