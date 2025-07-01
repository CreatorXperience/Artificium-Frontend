export type Role = 'Owner' | 'Editor' | 'Viewer';
export type AccessLevels = 'can view' | 'can edit' | 'No access';

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface ProjectMember {
  id: string;
  name: string;
  username: string;
  avatar: string;
  role: Role;
}

export const projectRoles: Role[] = ['Owner', 'Editor', 'Viewer'];
export const publicAccessLevels: AccessLevels[] = [
  'can view',
  'can edit',
  'No access',
];

export const workSpaceMembers: User[] = [
  {
    id: 'user1',
    name: 'Sophia Zhang',
    username: 'sophia.z',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 'user2',
    name: 'Olivia Sharma',
    username: 'olivia.s',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 'user3',
    name: 'You',
    username: 'ryan',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'user4',
    name: 'Mia Park',
    username: 'cute-mia',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 'user5',
    name: 'Isabella Chen',
    username: 'issa',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 'user6',
    name: 'Andrew Garcia',
    username: 'garci28',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 'user7',
    name: 'Liam Wilson',
    username: 'liam.w',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 'user8',
    name: 'Emma Brown',
    username: 'emma.b',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 'user9',
    name: 'Noah Davis',
    username: 'noah.d',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 'user10',
    name: 'Ava Miller',
    username: 'ava.m',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },

  {
    id: 'user11',
    name: 'Ethan Smith',
    username: 'ethan.s',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 'user12',
    name: 'Olivia Brown',
    username: 'olivia.b',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'user13',
    name: 'Liam Johnson',
    username: 'liam.j',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 'user14',
    name: 'Ava Davis',
    username: 'ava.d',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 'user15',
    name: 'Noah Wilson',
    username: 'noah.w',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 'user16',
    name: 'Isabella Garcia',
    username: 'isabella.g',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 'user17',
    name: 'Jackson Martinez',
    username: 'jackson.m',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 'user18',
    name: 'Mia Rodriguez',
    username: 'mia.r',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 'user19',
    name: 'Lucas Hernandez',
    username: 'lucas.h',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 'user20',
    name: 'Charlotte Moore',
    username: 'charlotte.m',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 'user21',
    name: 'Benjamin Hall',
    username: 'benjamin.h',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 'user22',
    name: 'Amelia Young',
    username: 'amelia.y',
    avatar: 'https://i.pravatar.cc/150?img=13',
  },
  {
    id: 'user23',
    name: 'James King',
    username: 'james.k',
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
  {
    id: 'user24',
    name: 'Harper Wright',
    username: 'harper.w',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

export const initialProjectMembers: ProjectMember[] = [
  {
    id: 'user3',
    name: 'You',
    username: 'ryan',
    role: 'Owner',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'user4',
    name: 'Mia Park',
    username: 'cute-mia',
    role: 'Editor',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 'user5',
    name: 'Isabella Chen',
    username: 'issa',
    role: 'Editor',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 'user6',
    name: 'Andrew Garcia',
    username: 'garci28',
    role: 'Viewer',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },

  {
    id: 'user7',
    name: 'Liam Wilson',
    username: 'liam.w',
    role: 'Viewer',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 'user8',
    name: 'Emma Brown',
    username: 'emma.b',
    role: 'Viewer',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 'user9',
    name: 'Noah Davis',
    username: 'noah.d',
    role: 'Viewer',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 'user10',
    name: 'Ava Miller',
    username: 'ava.m',
    role: 'Viewer',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
];
