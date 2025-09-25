export const profileData = {
  name: "Paulo Luiz Fachini",
  tag: "@paulofachini",
  title: "Senior QA Engineer",
  profileImage: "/paulo-fachini-profile.jpg",

  keywords: [
    {
      id: "hard-skills",
      title: "Habilidades Técnicas",
      words: [
        "QA Engineer",
        "Automação de Testes",
        "Testes de API",
        "Testes de Performance",
        "CI/CD",
        "DevOps",
        "Go",
        "JavaScript",
        "CSharp",
      ],
    },
    {
      id: "soft-skills",
      title: "Habilidades Interpessoais",
      words: [
        "Comunicação",
        "Trabalho em Equipe",
        "Adaptabilidade",
        "Resolução de Problemas",
        "Resiliência",
      ],
    },
  ],

  links: [
    {
      id: "company",
      text: "Stone.Co / Pagar.me",
      url: "https://www.stoneco.com.br/",
      icon: "FaBuilding",
    },
    {
      id: "location",
      text: "Blumenau/SC",
      url: "https://www.google.com/maps/place/Blumenau,+SC",
      icon: "FaMapMarkerAlt",
    },
    {
      id: "email",
      text: "paulofachini@gmail.com",
      url: "mailto:paulofachini@gmail.com",
      icon: "FaEnvelope",
    },
    {
      id: "linkedin",
      text: "linkedin.com",
      url: "https://www.linkedin.com/in/paulofachini",
      icon: "FaLinkedinIn",
    },
    {
      id: "github",
      text: "github.com",
      url: "https://github.com/paulofachini",
      icon: "FaGithub",
    },
    {
      id: "devto",
      text: "dev.to",
      url: "https://dev.to/paulofachini",
      icon: "FaDev",
    },
    {
      id: "medium",
      text: "medium.com",
      url: "https://medium.com/@paulofachini",
      icon: "FaMediumM",
    },
  ],

  sections: [
    {
      id: "resume",
      type: "intro",
      title: "Olá, eu sou o Paulo 👨‍💻",
      description:
        "Minha missão é clara: construir software de alta qualidade. Para mim, isso vai além de encontrar bugs. É sobre trabalhar lado a lado com times de desenvolvimento e integrar a automação de testes como um pilar essencial, garantindo que o código seja robusto, seguro e entregue com confiança.",
    },
    {
      id: "skills",
      type: "list",
      title: "Minhas habilidades",
      itens: [
        {
          title: "Garantia de Qualidade (QA)",
          description:
            "Experiência em testes funcionais, exploratórios e de regressão, além de ministrar treinamentos para equipes.",
        },
        {
          title: "Automação de Testes de API",
          description:
            "Desenvolvimento e arquitetura de frameworks do zero em JavaScript (Node.js, Jest, Supertest), C# (xUnit, RestSharp) e Go (Testify).",
        },
        {
          title: "Testes de Performance",
          description:
            "Experiência completa, desde o planejamento até o reporte, com foco em carga, capacidade e escalabilidade para eventos como a Black Friday.",
        },
        {
          title: "Pipelines (CI/CD)",
          description:
            "Experiência com migração e manutenção de pipelines de CircleCI para GitHub Actions, incluindo etapas de Linter e Sonar.",
        },
        {
          title: "DevOps e Qualidade",
          description:
            "Suporte a times de desenvolvimento em questões de Sonar, massa de testes e criação de testes de unidade e integração.",
        },
        {
          title: "Sistemas Financeiros",
          description:
            "Sólido conhecimento e experiência com sistemas financeiros e habilidades analíticas para resolução de problemas.",
        },
      ],
    },
    {
      id: "works",
      type: "list",
      title: "Meus trabalhos",
      itens: [
        {
          title: "Frameworks de Automação de API",
          description:
            "Criei a arquitetura e desenvolvi frameworks de testes regressivos e E2E para APIs REST em JavaScript, C# e Go.",
        },
        {
          title: "Testes de Performance para a Black Friday",
          description:
            "Fui responsável pelo ciclo completo de testes de performance para eventos de alto tráfego, garantindo a estabilidade da plataforma.",
        },
        {
          title: "Evolução de Processos de Qualidade",
          description:
            "Proponho e implemento novos processos e boas práticas, atuando como QA Tech Lead para guiar a equipe e elevar o padrão de qualidade.",
        },
      ],
    },
    {
      id: "portfolio",
      type: "portfolioGrid",
      title: "Meus projetos",
      description: "Alguns dos meus projetos pessoais.",
      itens: [
        {
          title: "Página Pessoal",
          description:
            "Desenvolvi minha página pessoal utilizando React e Next.js",
          image: "/portfolio/personal-page.png",
          url: "https://github.com/paulofachini/paulofachini",
        },
        {
          title: "Clone Tabnews - em desenvolvimento 🚧",
          description:
            "Projeto criado como parte dos estudos do Curso de Programação do Filipe Deschamps `curso.dev`.",
          image: "/portfolio/clone-tabnews.png",
          url: "https://github.com/paulofachini/clone-tabnews",
        },
        {
          title: "Control - em desenvolvimento 🚧",
          description: "Sistema para o controle financeiro pessoal.",
          image: "/portfolio/control.png",
          url: "https://github.com/paulofachini/control",
        },
      ],
    },
  ],
};
