export type WorkspaceMemberRoles = 'viewer' | 'admin' | 'member';

export enum WorkspaceCategories {
  Business = 'Business',
  Education = 'Education',
  Technology = 'Technology',
  Finance = 'Finance',
  Lifestyle = 'Lifestyle',
  Art = 'Art & Culture',
  Science = 'Science',
  Food = 'Food',
  Literature = 'Literature',
  Marketing = 'Marketing',
  Music = 'Music',
  Fashion = 'Fashion',
  Photography = 'Photography',
  Programming = 'Programming',
  Nonprofit = 'Nonprofit',
  Gaming = 'Gaming',
  News = 'News',
  Parenting = 'Parenting',
  RealEstate = 'Real Estate',
  Engineering = 'Engineering',
  Psychology = 'Psychology',
  SocialMedia = 'Social Media',
  Productivity = 'Productivity',
  Design = 'Design',
  Startups = 'Startups',
  Ecommerce = 'E-commerce',
  Crypto = 'Crypto',
  AI_MachineLearning = 'AI & Machine Learning',
}

export interface Workspace {
  id: string;
  url: string;
  visibility: boolean;
  totalMembers: number;
  name: string;
  description: string;
  RandR: string;
  image: string;
  owner: string;
  plan: string;
  members: string[];
  integrations: string[];
  category: WorkspaceCategories;
  updatedAt: string;
  createdAt: string;
}

export interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  image: string;
  role: WorkspaceMemberRoles;
  userId: string;
  workspaceId: string;
}

export interface AllWorkspacesData {
  // personalWorkspaces: Workspace[];
  // otherPublicWorkspace: Workspace[];
  // workspaceAmIn: Workspace[];
  workspaces: Workspace[];
  total: number;
}

export interface GetAllWorkspacesResponse {
  messages: string;
  data: AllWorkspacesData;
}
export interface GetWorkspaceResponse {
  messages: string;
  data: Workspace;
}
export interface GetWorkspaceAllMembersResponse {
  messages: string;
  data: WorkspaceMember[];
}

export enum EPage {
  EXPLORE_WORKSPACE = 'explore_workspaces',
  PUBLIC_WORKSPACES = 'public_workspaces',
  PRIVATE_WORKSPACES = 'private_workspaces',
  PERSONAL_WORKSPACES = 'personal_workspaces',
  PARTICIPATING_WORKSPACES = 'participating_workspaces',
}
