export const common = {
  desktop_icons: {
    ABOUT: 'About Me',
    PROJECTS: 'Projects',
    EXPERIENCE: 'Experience',
    EDUCATION: 'Education',
    GITHUB: 'GitHub',
    LINKEDIN: 'LinkedIn',
    CONTACT: 'Contact',
    LATTES: 'Lattes Curriculum',
  },
  ui: {
    start: 'Start',
    view_source: 'View Source',
    language_switch: 'Português',
    installer: {
        welcome_title: 'Welcome to RomaOS!',
        welcome_description: 'This quick setup will guide you through the features of my interactive portfolio.',
        about_description: (verb: string) => `${verb} this icon to learn more about me, my skills, and my passion for development.`,
        projects_description: 'Explore a selection of my work, with details on the tech stack and links to the source code.',
        experience_education_title: (exp: string, edu: string) => `${exp} & ${edu}`,
        experience_education_description: 'Browse my professional journey and academic background to see my career path.',
        links_title: 'External Links',
        links_description: 'Connect with me! Find my code on GitHub and my professional profile on LinkedIn through these shortcuts.',
        contact_description: (verb: string) => `${verb} this icon to find the best ways to get in touch with me.`,
        all_set_title: 'All Set!',
        all_set_description: (verb: string) => `The "installation" is complete. Feel free to explore. ${verb} "Finish" to begin.`,
        finish: 'Finish',
        next: 'Next',
        back: 'Back',
        progress: 'Progress',
        setup_guide: 'Setup Guide - RomaOS',
        start_exploring: 'Start Exploring',
    }
  }
};