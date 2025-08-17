import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import type { ProjectContextType } from "../types/types";

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
};
