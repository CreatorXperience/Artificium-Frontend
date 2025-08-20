export interface Workspace {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  visibility: boolean;
  owner: string;
  plan: string;
  totalMembers: number;
  url: string;
  members: string[];
  integrations: unknown[]; // you can replace `any` with a proper integration type if you have it
  worksaceRandR: string; // I’m keeping your exact spelling, but you might mean "workspaceRandR"
}
