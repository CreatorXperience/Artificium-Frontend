import { type Socket } from "socket.io-client";
export interface User {
  id: string;
  email: string;
  firstname: string; // Consider renaming to firstName to match API
  lastname: string; // Consider renaming to lastName to match API
  image?: string;
  username?: string;
  isVerified: boolean; // Changed from boolean | string to just boolean
}

export interface UserContextType {
  user: User;
  isLoading: boolean;
  isError: boolean;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateUser: (newData: Partial<User>) => void;
}
export interface SocketContextProps {
  socket: Socket | null;
  isConnected: boolean;
}
export type Member = {
  id: string;
  name: string;
  email: string;
  image: string;
  role?: string;
  userId: string;
  workspaceId: string;
  memberId?: string;
};
export interface ProjectMember {
  memberId: string;
  name: string;
  email: string;
  image: string;
  workspaceId: string;
  userId: string;
}

export interface Project {
  name: string;
  purpose: string;
  workspaceId: string;
  visibility: boolean;
  id: string;
  members: ProjectMember[];
  color: string;
  Shape: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
}
export type ProjectContextType = {
  activeProject: Project | null;
  isLoading: boolean;
  setActiveProject: React.Dispatch<React.SetStateAction<Project | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  updateProject: (updatedData: Partial<Project>) => Promise<void>;
  deleteProject: () => Promise<void>;
  addMemberToProject: (member: ProjectMember) => Promise<void>;
  removeMemberFromProject: (memberId: string) => Promise<void>;
};
