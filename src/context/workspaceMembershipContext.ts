import { createContext } from "react";
import type { WorkspaceMemberType } from "../types/workspaceMemberType";

export const workspaceMemberShipContext =
    createContext<WorkspaceMemberType | null>(null);