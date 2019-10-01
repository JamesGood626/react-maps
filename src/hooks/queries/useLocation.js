import { useSelector } from "react-redux";

export function useLocation() {
  return useSelector(state => state.location);
}
