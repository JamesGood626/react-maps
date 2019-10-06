import { useDispatch } from "react-redux";
import {
  toggleCreateEventModal,
  toggleEventDetailsModal
} from "../../store/actions/modal";

export function useModalActions() {
  const dispatch = useDispatch();

  const showCreateEventModal = () => {
    dispatch(
      toggleCreateEventModal({
        createEventModalVisible: true,
        trigger: "Dispatching showCreateEventModal"
      })
    );
  };

  const hideCreateEventModal = () => {
    dispatch(
      toggleCreateEventModal({
        createEventModalVisible: false,
        trigger: "Dispatching hideCreateEventModal"
      })
    );
  };

  const showEventDetailsModal = () => {
    dispatch(
      toggleEventDetailsModal({
        eventDetailsModalMisible: true,
        trigger: "Dispatching showEventDetailsModal"
      })
    );
  };

  const hideEventDetailsModal = () => {
    dispatch(
      toggleEventDetailsModal({
        eventDetailsModalMisible: false,
        trigger: "Dispatching hideEventDetailsModal"
      })
    );
  };

  return {
    showCreateEventModal,
    hideCreateEventModal,
    showEventDetailsModal,
    hideEventDetailsModal
  };
}
