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
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateUser: (newData: Partial<User>) => void;
}
export type Member = {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  userId: string;
  workspaceId: string;
};
