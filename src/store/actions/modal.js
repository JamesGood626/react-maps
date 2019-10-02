export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const toggleModal = ({ modalVisible = false, trigger }) => ({
  type: TOGGLE_MODAL,
  payload: { modalVisible },
  meta: { trigger }
});
