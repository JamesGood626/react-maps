import { useDispatch } from "react-redux";
import { toggleLoader } from "../../store/actions/ui";

export function useUiActions() {
  const dispatch = useDispatch();

  const toggleLoaderTrue = () => {
    console.log("dispatching toggleLoader w/ loaderVisible: true");
    dispatch(
      toggleLoader({
        loaderVisible: true,
        trigger: "Dispatching toggleLoaderTrue"
      })
    );
  };

  const toggleLoaderFalse = () => {
    console.log("dispatching toggleLoader w/ loaderVisible: false");
    dispatch(toggleLoader({ trigger: "Dispatching toggleLoaderFalse" }));
  };

  return { toggleLoaderTrue, toggleLoaderFalse };
}
