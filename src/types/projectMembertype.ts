export type TProjects = {
    projects: Array<TProject>;
};

export type TProject = {
    id: string;
    name: string;
    purpose: string;
    workspaceId: string;
    createdAt: string;
    creator: string;
    visibility: boolean;
    members: string[];
};


export type TProjectMembership = {
    workspaceId: string,
    projectId: string,
    id: string,
    name: string,
    image: string,
    userId: string,
    email: string,
    role: string,
    memberId: string
}

export type TProjectContext = {
    updateProject: (projectMembership: TProjectMembership) => void;
    data: TProjectMembership | null
}