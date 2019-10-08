import { useSelector } from "react-redux";

export function useList() {
  return useSelector(state => state.list);
}
