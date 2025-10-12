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
    title: "Plataforma de E-commerce",
    description:
      "Um site de e-commerce completo com catálogos de produtos, carrinho de compras e processo de checkout.",
    tech: ["Next.js", "Stripe", "GraphQL", "PostgreSQL"],
    url: "https://github.com/react-frame-community",
  },
  {
    title: "Painel de Visualização de Dados",
    description:
      "Um painel para visualizar conjuntos de dados complexos usando gráficos interativos.",
    tech: ["React", "D3.js", "Recharts", "Redux"],
    url: "https://github.com/react-frame-community",
  },
];
