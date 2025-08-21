import {
  BsBook,
  BsBriefcase,
  BsClock,
  BsFolder,
  BsLaptop,
  BsPalette,
} from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons/lib';

export type FilterParam =
  | 'explore'
  | 'personal'
  | 'recent'
  | 'public'
  | 'private'
  | 'business'
  | 'development'
  | 'design'
  | 'education';

interface SideBarType {
  name: string;
  param: FilterParam;
  icon?: IconType;
}

// Top navigation links
export const navLinks: SideBarType[] = [
  { name: 'Explore', param: 'explore', icon: BsFolder },
  { name: 'My Workspaces', param: 'personal', icon: FaUserAlt },
  { name: 'Recent', param: 'recent', icon: BsClock },
];

// Quick filters
export const quickFilters = [
  { name: 'Public Workspaces', param: 'public' },
  { name: 'Private Workspaces', param: 'private' },
];

// Categories
export const categories: SideBarType[] = [
  { name: 'Business', param: 'business', icon: BsBriefcase },
  { name: 'Development', param: 'development', icon: BsLaptop },
  { name: 'Design', param: 'design', icon: BsPalette },
  { name: 'Education', param: 'education', icon: BsBook },
];
