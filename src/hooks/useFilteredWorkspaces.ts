import type { FilterParam } from '../constants/sidebar';
import type { Workspace } from '../types/workspaces';

interface FilteredWorkspacesProp {
  allWorkspaces: Workspace[];
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
    case 'business':
      currentWorkspacesView = [
        ...allWorkspaces.filter(
          (ws) => ws.category.toLowerCase() === 'business',
        ),
      ];
      break;

    case 'development':
      currentWorkspacesView = [
        ...allWorkspaces.filter(
          (ws) => ws.category.toLowerCase() === 'development',
        ),
      ];
      break;

    case 'design':
      currentWorkspacesView = [
        ...allWorkspaces.filter((ws) => ws.category.toLowerCase() === 'design'),
      ];
      break;

    case 'education':
      currentWorkspacesView = [
        ...allWorkspaces.filter(
          (ws) => ws.category.toLowerCase() === 'education',
        ),
      ];
      break;

    default:
      currentWorkspacesView = [...allWorkspaces];
      break;
  }

  if (searchTerm.trim()) {
    console.log(searchTerm);
    return currentWorkspacesView.filter((workspace) =>
      workspace.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
    );
  }
  return currentWorkspacesView;
}

export default useFilteredWorkspaces;
