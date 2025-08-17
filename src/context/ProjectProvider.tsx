import React, { useState, type ReactNode } from "react";
import type {
  Project,
  ProjectMember,
  ProjectContextType,
} from "../types/types";
import { ProjectContext } from "./ProjectContext";

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({
  children,
}) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateProject = async (updatedData: Partial<Project>) => {
    if (!activeProject) return;
    setActiveProject((prev) => (prev ? { ...prev, ...updatedData } : prev));
  };

  const deleteProject = async () => {
    setActiveProject(null);
  };

  const addMemberToProject = async (member: ProjectMember) => {
    if (!activeProject) return;
    setActiveProject({
      ...activeProject,
      members: [...activeProject.members, member],
    });
  };

  const removeMemberFromProject = async (memberId: string) => {
    if (!activeProject) return;
    setActiveProject({
      ...activeProject,
      members: activeProject.members.filter((m) => m.memberId !== memberId),
    });
  };

  const value: ProjectContextType = {
    activeProject,
    isLoading,
    setActiveProject,
    setIsLoading,
    updateProject,
    deleteProject,
    addMemberToProject,
    removeMemberFromProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
