import { RootState } from "@/store";
import { useSelector } from "react-redux";

export function useStore() {
  return useSelector((state: RootState) => state);
}
