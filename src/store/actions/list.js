export const GET_EVENT_LIST = "GET_EVENT_LIST";
export const GET_EVENT_LIST_ERROR = "GET_EVENT_LIST_ERROR";

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

export const getEventList = (events) => ({
  type: GET_EVENT_LIST,
  payload: {
    events
  },
  meta: {
    trigger:
      "Get event list was successful."
  }
});

export const getEventListError = error => {
  console.log("the console.log of get event list error: ");
  console.log(error);
  console.log("the console.dir of get event list error: ");
  console.dir(error);
};
