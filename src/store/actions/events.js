export const SET_EVENT = "SET_EVENT";
export const SET_CREATE_EVENT_ERROR = "SET_CREATE_EVENT_ERROR";

// NOTE:
// success response when hitting POST /api/events/
// Event Data retrieved back from the server that setEvent will be called with:
// {
//    name: String
//    address: Object,
//    latitude: String,
//    longitude: String,
//    eventDate: String
// }
// Expected to be passed in as the object argument to setUser

export const setEvent = (event) => ({
  type: SET_EVENT,
  payload: {
    event
  },
  meta: {
    trigger:
      "Event creation was successful and the created event is being set."
  }
});

export const setCreateEventError = error => {
  console.log("the console.log of create event error: ");
  console.log(error);
  console.log("the console.dir of create event error: ");
  console.dir(error);
};
