export const common = {
  desktop_icons: {
    ABOUT: 'Sobre Mim',
    PROJECTS: 'Projetos',
    EXPERIENCE: 'Experiência',
    EDUCATION: 'Formação',
    GITHUB: 'GitHub',
    LINKEDIN: 'LinkedIn',
    CONTACT: 'Contato',
    LATTES: 'Currículo Lattes',
  },
  ui: {
    start: 'Iniciar',
    view_source: 'Ver Código',
    language_switch: 'English',
    installer: {
        welcome_title: 'Bem-vindo ao RomaOS!',
        welcome_description: 'Este guia rápido irá apresentá-lo às funcionalidades do meu portfólio interativo.',
        about_description: (verb: string) => `${verb} neste ícone para saber mais sobre mim, minhas habilidades e minha paixão por desenvolvimento.`,
        projects_description: 'Explore uma seleção dos meus trabalhos, com detalhes sobre as tecnologias utilizadas e links para o código-fonte.',
        experience_education_title: (exp: string, edu: string) => `${exp} & ${edu}`,
        experience_education_description: 'Navegue pela minha jornada profissional e formação acadêmica para conhecer minha trajetória.',
        links_title: 'Links Externos',
        links_description: 'Conecte-se comigo! Encontre meu código no GitHub e meu perfil profissional no LinkedIn através destes atalhos.',
        contact_description: (verb: string) => `${verb} neste ícone para encontrar as melhores formas de entrar em contato comigo.`,
        all_set_title: 'Tudo Pronto!',
        all_set_description: (verb: string) => `A "instalação" está completa. Sinta-se à vontade para explorar. ${verb} em "Concluir" para começar.`,
        finish: 'Concluir',
        next: 'Próximo',
        back: 'Anterior',
        progress: 'Progresso',
        setup_guide: 'Guia de Configuração - RomaOS',
        start_exploring: 'Começar a Explorar',
    }
  }
};
