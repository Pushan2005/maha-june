import { useContext } from "react";
import { TmaContex } from "./context";

export function useTma() {
    return useContext(TmaContex);
}
