import {
  BsBriefcase,
  BsBook,
  BsPalette,
  BsLaptop,
  BsMusicNoteBeamed,
  BsCamera,
  BsCpu,
  BsGraphDownArrow,
} from 'react-icons/bs';
import { FaGamepad, FaRegNewspaper } from 'react-icons/fa';
import { WorkspaceCategories } from '../types/workspaces';
import { FaBowlFood } from 'react-icons/fa6';
import { CiBank, CiBitcoin } from 'react-icons/ci';
import {
  MdOutlinePsychologyAlt,
  MdOutlineRealEstateAgent,
  MdOutlineScience,
} from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { GiShoppingBag } from 'react-icons/gi';
import { RiParentLine } from 'react-icons/ri';
import { FcEngineering } from 'react-icons/fc';
import { TiSocialAtCircular } from 'react-icons/ti';
import { TbBuildingSkyscraper } from 'react-icons/tb';

export const categoryMap: Record<
  WorkspaceCategories,
  { icon: React.ElementType; className: string }
> = {
  Business: {
    icon: BsBriefcase,
    className: 'bg-day-blue-200 text-day-blue-600',
  },
  Education: {
    icon: BsBook,
    className: 'bg-happy-orange-100 text-happy-orange-600',
  },
  Technology: { icon: BsCpu, className: 'bg-purple-100 text-purple-600' },
  Finance: { icon: CiBank, className: 'bg-green-100 text-green-600' },
  Lifestyle: {
    icon: BsMusicNoteBeamed,
    className: 'bg-pink-100 text-pink-600',
  },
  'Art & Culture': {
    icon: BsPalette,
    className: 'bg-indigo-100 text-indigo-600',
  },
  Science: { icon: MdOutlineScience, className: 'bg-cyan-100 text-cyan-600' },
  Food: { icon: FaBowlFood, className: 'bg-rose-100 text-rose-600' },
  Literature: { icon: BsBook, className: 'bg-violet-200 text-violet-700' },
  Marketing: { icon: GoGraph, className: 'bg-pink-200 text-pink-700' },
  Music: { icon: BsMusicNoteBeamed, className: 'bg-blue-200 text-blue-700' },
  Fashion: {
    icon: GiShoppingBag,
    className: 'bg-fuchsia-200 text-fuchsia-700',
  },
  Photography: { icon: BsCamera, className: 'bg-orange-200 text-orange-700' },
  Programming: { icon: BsLaptop, className: 'bg-purple-200 text-purple-700' },
  Nonprofit: { icon: BsGraphDownArrow, className: 'bg-sky-200 text-sky-700' },
  Gaming: { icon: FaGamepad, className: 'bg-indigo-200 text-indigo-700' },
  News: { icon: FaRegNewspaper, className: 'bg-gray-300 text-gray-700' },
  Parenting: { icon: RiParentLine, className: 'bg-rose-200 text-rose-700' },
  'Real Estate': {
    icon: MdOutlineRealEstateAgent,
    className: 'bg-teal-200 text-teal-700',
  },
  Engineering: { icon: FcEngineering, className: 'bg-blue-200 text-blue-700' },
  Psychology: {
    icon: MdOutlinePsychologyAlt,
    className: 'bg-pink-300 text-pink-700',
  },
  'Social Media': {
    icon: TiSocialAtCircular,
    className: 'bg-cyan-300 text-cyan-700',
  },
  Productivity: { icon: BsLaptop, className: 'bg-violet-300 text-violet-700' },
  Design: {
    icon: BsPalette,
    className: 'bg-electric-green-100 text-electric-green-600',
  },

  Startups: {
    icon: TbBuildingSkyscraper,
    className: 'bg-blue-300 text-blue-700',
  },
  'E-commerce': {
    icon: CiBank,
    className: 'bg-fuchsia-300 text-fuchsia-700',
  },
  Crypto: { icon: CiBitcoin, className: 'bg-yellow-300 text-yellow-700' },
  'AI & Machine Learning': {
    icon: BsCpu,
    className: 'bg-purple-300 text-purple-700',
  },
};
