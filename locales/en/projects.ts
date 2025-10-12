import type { Project } from '../../types';

export const projects: Project[] = [
  {
    title: 'OS Portfolio',
    description:
      'This very portfolio you are using. An interactive desktop-like environment built with React and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    url: 'https://github.com/Romadeoliveira3/portifolio',
  },
  {
    title: 'UFRPE Candidates',
    description:
      'Exploratory data analysis on applicants admitted to the Federal Rural University of Pernambuco (UFRPE) via SISU. The repository brings together reports and Python notebooks to examine cut-off scores, quota types, and distribution by course and shift, focusing on identifying academic patterns and trends. Designed as a technical and educational study, it demonstrates practical data science applied to the Brazilian education context.',
    tech: ['Python', 'Pandas', 'Jupyter Notebook', 'Matplotlib'],
    url: 'https://github.com/Romadeoliveira3/Candidados_UFRPE',
  },
  {
    title: 'Official Gazette PDF Extractor',
    description:
      'Python script to automate data extraction from PDFs published in the Official Gazette. The utility navigates the site with Selenium, downloads relevant PDFs, and extracts text snippets using PyMuPDF and regular expressions, streamlining automated queries and data integration.',
    tech: ['Python', 'Selenium', 'PyMuPDF', 'Regular Expressions'],
    url: 'https://github.com/Romadeoliveira3/DiarioOficial-PDFExtractor',
  },
  {
    title: 'Business Messages Manager',
    description:
      'Full‑stack application for managing business messages. Includes a React/Vite frontend and a FastAPI backend with API routes, database persistence, and Docker orchestration. Enables sending, storing, and viewing messages between users or systems.',
    tech: [
      'React',
      'Vite',
      'TypeScript',
      'FastAPI',
      'Python',
      'SQLAlchemy',
      'Alembic',
      'Docker',
      'Makefile',
    ],
    url: 'https://github.com/Romadeoliveira3/Business-Messages',
  },
];
