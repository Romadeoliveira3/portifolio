import type { Project } from '../../types';

export const projects: Project[] = [
  {
    title: 'Portfolio OS',
    description: 'This very portfolio you are using. An interactive desktop environment built with React and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    url: 'https://github.com/react-frame-community'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product catalogs, shopping cart, and a checkout process.',
    tech: ['Next.js', 'Stripe', 'GraphQL', 'PostgreSQL'],
    url: 'https://github.com/react-frame-community'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets using interactive charts and graphs.',
    tech: ['React', 'D3.js', 'Recharts', 'Redux'],
    url: 'https://github.com/react-frame-community'
  }
];
