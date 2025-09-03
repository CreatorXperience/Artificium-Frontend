export type WorkspaceMemberType = {
    id: string;
    userId: string;
    name: string;
    email: string;
    image: string;
    workspaceId: string;
    role: "member" | "admin" | "owner";
};