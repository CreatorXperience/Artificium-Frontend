import { createContext } from "react";
import type { ProjectContextType } from "../types/types";
export const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined
);
