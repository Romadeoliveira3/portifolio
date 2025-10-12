import type { Project } from "../../types";

export const projects: Project[] = [
  {
    title: "Portfólio SO",
    description:
      "Este mesmo portfólio que você está usando. Um ambiente de desktop interativo construído com React e Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    url: "https://github.com/Romadeoliveira3/portifolio",
  },
  {
    title: "Candidatos UFRPE",
    description:
      "Projeto de análise exploratória de dados sobre os candidatos ingressantes na Universidade Federal Rural de Pernambuco (UFRPE) via SISU. O repositório reúne relatórios e notebooks em Python para examinar notas de corte, tipos de cota e distribuição por curso e turno, com foco em identificar padrões e tendências acadêmicas. Idealizado como um estudo técnico e educativo, demonstra o uso prático de ciência de dados aplicada ao contexto educacional brasileiro.",
    tech: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],
    url: "https://github.com/Romadeoliveira3/Candidados_UFRPE",
  },
  {
    title: "Diário Oficial PDF Extractor",
    description:
      "Script em Python para automação da extração de dados de PDFs publicados no Diário Oficial. O utilitário navega no site com Selenium, baixa PDFs de interesse e extrai trechos de texto relevantes usando PyMuPDF e expressões regulares, facilitando consultas automatizadas e integração de dados.",
    tech: ["Python", "Selenium", "PyMuPDF", "Regular Expressions"],
    url: "https://github.com/Romadeoliveira3/DiarioOficial-PDFExtractor",
  },
  {
    title: "Business Messages Manager",
    description:
      "Aplicação fullstack para gerenciar mensagens empresariais. Inclui interface frontend em React/Vite e backend em FastAPI com rotas API, persistência em banco de dados e orquestração Docker. Permite envio, armazenamento e visualização de mensagens entre usuários ou sistemas.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Makefile",
    ],
    url: "https://github.com/Romadeoliveira3/Business-Messages",
  },
];
