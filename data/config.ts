import { AboutIcon, ProjectsIcon, ContactIcon, GithubIcon, LinkedInIcon, ExperienceIcon, EducationIcon, LattesIcon } from '../components/icons/Icons';
import type { DesktopIconType } from '../types';
import { WindowType } from '../types';

export const DESKTOP_ICONS_CONFIG: Omit<DesktopIconType, 'label'>[] = [
  { id: WindowType.ABOUT, icon: AboutIcon, type: 'window' },
  { id: WindowType.PROJECTS, icon: ProjectsIcon, type: 'window' },
  { id: WindowType.EXPERIENCE, icon: ExperienceIcon, type: 'window' },
  { id: WindowType.EDUCATION, icon: EducationIcon, type: 'window' },
  { id: 'GITHUB', icon: GithubIcon, type: 'link', url: 'https://github.com/romaveloso' },
  { id: 'LINKEDIN', icon: LinkedInIcon, type: 'link', url: 'https://www.linkedin.com/' },
  { id: 'LATTES', icon: LattesIcon, type: 'link', url: 'http://lattes.cnpq.br/9546596599129535' },
  { id: WindowType.CONTACT, icon: ContactIcon, type: 'window' },
];
