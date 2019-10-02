import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/actions/modal";

export function useModalActions() {
  const dispatch = useDispatch();

  const toggleModalTrue = () => {
    console.log("dispatching toggleModalTrue w/ modalVisible: true");
    dispatch(
      toggleModal({
        modalVisible: true,
        trigger: "Dispatching toggleModalTrue"
      })
    );
  };

  const toggleModalFalse = () => {
    console.log("dispatching toggleLoader w/ loaderVisible: false");
    dispatch(toggleModal({ trigger: "Dispatching toggleModalFalse" }));
  };

  return { toggleModalTrue, toggleModalFalse };
}
