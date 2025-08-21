import type { FilterParam } from '../constants/sidebar';
import type { Workspace } from '../types/workspaces';

interface FilteredWorkspacesProp {
  allWorkspaces: {
    personalWorkspaces: Workspace[];
    otherPublicWorkspace: Workspace[];
    workspaceAmIn: Workspace[];
  };
  filter: FilterParam;
  searchTerm: string;
}

function useFilteredWorkspaces({
  allWorkspaces,
  filter,
  searchTerm,
}: FilteredWorkspacesProp): Workspace[] {
  let currentWorkspacesView: Workspace[] = [];

  switch (filter) {
    case 'explore':
      currentWorkspacesView = [...allWorkspaces.otherPublicWorkspace];
      break;

    case 'personal':
      currentWorkspacesView = [
        ...allWorkspaces.personalWorkspaces,
        ...allWorkspaces.workspaceAmIn,
      ];
      break;

    case 'public':
      currentWorkspacesView = [
        ...allWorkspaces.personalWorkspaces.filter((ws) => ws.visibility),
        ...allWorkspaces.workspaceAmIn.filter((ws) => ws.visibility),
      ];
      break;

    case 'private':
      currentWorkspacesView = [
        ...allWorkspaces.personalWorkspaces.filter((ws) => !ws.visibility),
        ...allWorkspaces.workspaceAmIn.filter((ws) => !ws.visibility),
      ];
      break;

    case 'business':
      currentWorkspacesView = [
        ...allWorkspaces.otherPublicWorkspace.filter(
          (ws) => ws.category.toLowerCase() === 'business',
        ),
        ...allWorkspaces.personalWorkspaces.filter(
          (ws) => ws.category.toLowerCase() === 'business',
        ),
        ...allWorkspaces.workspaceAmIn.filter(
          (ws) => ws.category.toLowerCase() === 'business',
        ),
      ];
      break;

    case 'development':
      currentWorkspacesView = [
        ...allWorkspaces.otherPublicWorkspace.filter(
          (ws) => ws.category.toLowerCase() === 'development',
        ),
        ...allWorkspaces.personalWorkspaces.filter(
          (ws) => ws.category.toLowerCase() === 'development',
        ),
        ...allWorkspaces.workspaceAmIn.filter(
          (ws) => ws.category.toLowerCase() === 'development',
        ),
      ];
      break;

    case 'design':
      currentWorkspacesView = [
        ...allWorkspaces.otherPublicWorkspace.filter(
          (ws) => ws.category.toLowerCase() === 'design',
        ),
        ...allWorkspaces.personalWorkspaces.filter(
          (ws) => ws.category.toLowerCase() === 'design',
        ),
        ...allWorkspaces.workspaceAmIn.filter(
          (ws) => ws.category.toLowerCase() === 'design',
        ),
      ];
      break;

    case 'education':
      currentWorkspacesView = [
        ...allWorkspaces.otherPublicWorkspace.filter(
          (ws) => ws.category.toLowerCase() === 'education',
        ),
        ...allWorkspaces.personalWorkspaces.filter(
          (ws) => ws.category.toLowerCase() === 'education',
        ),
        ...allWorkspaces.workspaceAmIn.filter(
          (ws) => ws.category.toLowerCase() === 'education',
        ),
      ];
      break;

    default:
      currentWorkspacesView = [];
      break;
  }

  if (searchTerm.trim()) {
    return currentWorkspacesView.filter((workspace) =>
      workspace.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }
  return currentWorkspacesView;
}

export default useFilteredWorkspaces;
