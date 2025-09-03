import { createContext } from "react";
import type { TProjectContext } from "../types/projectMembertype";

export const projectMemberShipContext = createContext<TProjectContext | null>(
  null
);
