export const TOGGLE_CREATE_EVENT_MODAL = "TOGGLE_CREATE_EVENT_MODAL";
export const TOGGLE_EVENT_DETAILS_MODAL = "TOGGLE_EVENT_DETAILS_MODAL";

export const toggleCreateEventModal = ({
  createEventModalVisible = false,
  trigger
}) => ({
  type: TOGGLE_CREATE_EVENT_MODAL,
  payload: { createEventModalVisible },
  meta: { trigger }
});

export const toggleEventDetailsModal = ({
  eventDetailsModalVisible = false,
  trigger
}) => ({
  type: TOGGLE_EVENT_DETAILS_MODAL,
  payload: { eventDetailsModalVisible },
  meta: { trigger }
});
