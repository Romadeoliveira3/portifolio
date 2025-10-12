import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const windows = {
  ABOUT: {
    title: "Sobre Mim",
    content: `Olá! Sou Romário Jonas (ou Roma), Bacharelando em Engenharia Eletrônica e Desenvolvedor Fullstack Pleno com sólida experiência em análise de dados, automação e arquitetura de software. Atuo na criação de soluções escaláveis e eficientes, unindo tecnologia, sustentabilidade e inovação.

Com trajetória que inclui experiências na Ford Motor Company, SEMINE e FITec, venho aplicando tecnologias como FastAPI, NestJS, PostgreSQL, Docker, RabbitMQ, Prisma e Prometheus/Grafana no desenvolvimento de sistemas distribuídos e plataformas baseadas em microserviços.

Minha filosofia é construir soluções robustas e bem estruturadas, com foco em clareza, desempenho e impacto real. Acredito na união entre ciência de dados e engenharia de software para transformar informação em decisões inteligentes e sustentáveis.

Este portfólio reflete minha jornada técnica e criativa — um espaço onde tecnologia e propósito se encontram. Sinta-se à vontade para explorar meus projetos e trocar ideias!`,
  },
  PROJECTS: {
    title: "Meus Projetos",
    content: "Aqui estão alguns dos projetos em que trabalhei.",
  },
  EXPERIENCE: {
    title: "Experiência Profissional",
    content:
      "Um resumo da minha trajetória profissional e principais realizações.",
  },
  EDUCATION: {
    title: "Formação e Certificados",
    content:
      "Minha formação acadêmica e certificados profissionais relevantes.",
  },
  CONTACT: {
    title: "Entre em Contato",
    content: "Você pode entrar em contato comigo pelos seguintes canais:",
    contactItems: [
      {
        icon: MdEmail,
        label: "E-mails",
        value: "romariojonas@outlook.com.br | romario.veloso@ufpe.br",
        link: "mailto:romariojonas@outlook.com.br",
      },
      {
        icon: MdPhone,
        label: "Telefone",
        value: "+55 (81) 98538-4702",
        link: "tel:+5581985384702",
      },
      {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "Romario Jonas",
        link: "https://www.linkedin.com/in/romario-jonas-veloso-427373175",
      },
      {
        icon: FaInstagram,
        label: "Instagram",
        value: "romadeoliveira1",
        link: "https://www.instagram.com/romadeoliveira1/",
      },
      {
        icon: FaGithub,
        label: "GitHub",
        value: "Romadeoliveira3",
        link: "https://github.com/Romadeoliveira3",
      },
    ],
    footer:
      "Fique à vontade para entrar em contato para colaborações, projetos ou apenas trocar ideias sobre tecnologia e inovação.",
  },
};
