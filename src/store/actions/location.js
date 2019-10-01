export const SET_LOCATION = "SET_LOCATION";
export const SET_LOCATION_ERROR = "SET_LOCATION_ERROR";

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

export const locationRequest = ({
  method = "GET",
  url,
  payload = {},
  onSuccess,
  onError
}) => ({
  type: 'LOCATION_REQUEST',
  payload,
  meta: { method, url, onSuccess, onError }
});


export const setLocation = ({center}) => ({
  type: SET_LOCATION,
  payload: {
    center: center
  },
  meta: {
    trigger:
      "Set location was successful."
  }
});

export const setLocationError = error => {
  console.log("the console.log of set location error: ");
  console.log(error);
  console.log("the console.dir of set location error: ");
  console.dir(error);
};
