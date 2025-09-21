import { EPage } from '../types/workspaces';
import type { FilterParam } from './sidebar';

export const filterToPage: Record<FilterParam, EPage> = {
  explore: EPage.EXPLORE_WORKSPACE,
  personal: EPage.PERSONAL_WORKSPACES,
  recent: EPage.PARTICIPATING_WORKSPACES,
  public: EPage.PUBLIC_WORKSPACES,
  private: EPage.PRIVATE_WORKSPACES,
  business: EPage.EXPLORE_WORKSPACE,
  development: EPage.EXPLORE_WORKSPACE,
  design: EPage.EXPLORE_WORKSPACE,
  education: EPage.EXPLORE_WORKSPACE,
};
