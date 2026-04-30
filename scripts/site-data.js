const siteData = {
  services: [
    {
      index: "01",
      title: "Landing pages e websites orientados à conversão",
      audience: "Captação digital",
      summary:
        "Para negócios que precisam organizar a oferta, fortalecer a presença digital e gerar contato sem depender de estrutura pesada.",
      deliverables: [
        "Arquitetura de página com CTA claro e fluxo de contato objetivo.",
        "Implementação responsiva e pronta para analytics, formulário ou WhatsApp.",
        "Base enxuta para publicar rápido e evoluir sem refazer do zero.",
      ],
    },
    {
      index: "02",
      title: "Sistemas web, painéis e ferramentas internas",
      audience: "Operação interna",
      summary:
        "Para equipes que precisam sair da planilha, organizar regras de negócio e centralizar processos em software sob medida.",
      deliverables: [
        "Modelagem de domínio e organização de fluxos internos.",
        "CRUDs, dashboards e estrutura pronta para manutenção.",
        "Repositório coerente para crescimento gradual da aplicação.",
      ],
    },
    {
      index: "03",
      title: "APIs, integrações e automações",
      audience: "Conexão entre sistemas",
      summary:
        "Para conectar formulários, operação, sistemas internos e serviços de terceiros com menos retrabalho e mais controle.",
      deliverables: [
        "APIs com regras claras e estrutura para integrações futuras.",
        "Automações de fluxo operacional e endpoints sob medida.",
        "Base preparada para evolução sem acoplamento desnecessário.",
      ],
    },
    {
      index: "04",
      title: "Reestruturação técnica e sustentação",
      audience: "Bases existentes",
      summary:
        "Para repositórios, projetos ou frentes digitais que já existem, mas precisam de mais clareza técnica e apresentação profissional.",
      deliverables: [
        "Diagnóstico técnico e reorganização de repositório.",
        "Padronização de documentação, serviços e estudos de caso.",
        "Melhoria de percepção de valor para cliente, parceiro ou recrutador.",
      ],
    },
  ],
  principles: [
    {
      title: "Contato direto na entrega",
      description:
        "O cliente fala com quem analisa escopo, toma decisão técnica e escreve código. Isso reduz ruído e acelera alinhamento.",
    },
    {
      title: "Arquitetura proporcional ao problema",
      description:
        "A Nexus7 evita stack exibicionista e escolhe a base técnica que faz sentido para o contexto, o prazo e a manutenção.",
    },
    {
      title: "Documentação mínima útil",
      description:
        "Em vez de acumular texto que não ajuda, a equipe registra o necessário para manter clareza, continuidade e controle de evolução.",
    },
    {
      title: "Entrega por fase",
      description:
        "Projetos ficam mais seguros quando o escopo é quebrado em blocos entendíveis, com prioridade e critério de aceite claros.",
    },
    {
      title: "Repositório como ativo comercial",
      description:
        "A base pública também precisa convencer. Estrutura, README, projetos e cases precisam demonstrar critério, não improviso.",
    },
    {
      title: "Sem prova social artificial",
      description:
        "Nada de depoimento inventado ou número sem contexto. A confiança vem de clareza, de trabalho real e de narrativa honesta.",
    },
  ],
  process: [
    {
      step: "ETAPA 01",
      title: "Diagnóstico",
      description:
        "Leitura do contexto, do objetivo de negócio, das restrições e do nível de maturidade da base atual.",
    },
    {
      step: "ETAPA 02",
      title: "Arquitetura e escopo",
      description:
        "Definição do que entra na fase atual, da stack adequada e de como a entrega será organizada sem inflar o projeto.",
    },
    {
      step: "ETAPA 03",
      title: "Implementação",
      description:
        "Construção da interface, da lógica e da estrutura do repositório com foco em manutenção e clareza técnica.",
    },
    {
      step: "ETAPA 04",
      title: "Publicação e evolução",
      description:
        "Validação final, documentação mínima e base preparada para sustentação, novas fases ou integrações futuras.",
    },
  ],
  projects: [
    {
      title: "Centro de Estética Katia Tiso",
      status: "PÚBLICO",
      description:
        "Landing page mobile-first pensada para captar leads com baixa fricção, CTA recorrente e base fácil de publicar e evoluir.",
      stack: ["HTML", "CSS", "JavaScript modular"],
      highlights: [
        "Separação clara entre conteúdo, configuração e renderização.",
        "Estrutura pronta para formulário, UTM e fluxo de WhatsApp.",
        "Arquitetura simples, rápida e barata de sustentar.",
      ],
      links: [
        {
          label: "Projeto",
          href: "projects/centro-de-estetica-katia-tiso.md",
        },
        {
          label: "Estudo de caso",
          href: "case-studies/centro-de-estetica-katia-tiso.md",
        },
        {
          label: "Repositório público",
          href: "https://github.com/CristianoRFB/landing-page-clinica-estetica",
          external: true,
        },
      ],
    },
    {
      title: "Lan House Manager",
      status: "PÚBLICO",
      description:
        "Base de sistema cliente-servidor para operação com regras por perfil, fila offline e caminho de evolução para painel administrativo.",
      stack: ["Python", "FastAPI", "SQLite", "Testes"],
      highlights: [
        "Modelagem de domínio para usuários, máquinas, sessões e comandos.",
        "Pensamento de sistema em cenário com conectividade imperfeita.",
        "Base desenhada para crescer sem refazer a fundação.",
      ],
      links: [
        {
          label: "Projeto",
          href: "projects/lan-house-manager.md",
        },
        {
          label: "Estudo de caso",
          href: "case-studies/lan-house-manager.md",
        },
        {
          label: "Repositório público",
          href: "https://github.com/CristianoRFB/Lan-House",
          external: true,
        },
      ],
    },
  ],
  repositoryAreas: [
    {
      title: "README.md",
      description: "Apresenta a empresa, a proposta de valor e a leitura inicial do repositório.",
    },
    {
      title: "docs/",
      description: "Centraliza posicionamento, diagnóstico, arquitetura editorial e melhorias.",
    },
    {
      title: "services/",
      description: "Explica a oferta da Nexus7 a partir de problema resolvido, não de buzzword.",
    },
    {
      title: "projects/",
      description: "Resume projetos publicados com contexto, problema, stack e valor para o cliente.",
    },
    {
      title: "case-studies/",
      description: "Aprofunda raciocínio técnico e contexto de entrega sem inventar prova social.",
    },
    {
      title: "styles/ e scripts/",
      description: "Mantêm a vitrine viva do estúdio em código simples, legível e fácil de evoluir.",
    },
  ],
  faq: [
    {
      question: "A Nexus7 é uma software house grande?",
      answer:
        "Não. A proposta é ser um estúdio boutique: menos camadas, mais contato direto com quem entende o escopo e implementa a entrega. Isso aumenta clareza e reduz repasse de informação.",
    },
    {
      question: "Que tipo de projeto faz mais sentido contratar com a Nexus7?",
      answer:
        "Projetos web, landing pages, sistemas internos, integrações, automações e reestruturação técnica. A equipe funciona melhor quando o desafio pede organização, critério e base pronta para crescer.",
    },
    {
      question: "Como a Nexus7 organiza o trabalho do início à entrega?",
      answer:
        "O trabalho é organizado em fases claras: diagnóstico, arquitetura, implementação e publicação. Isso ajuda a alinhar expectativa, escopo e prioridade desde o começo.",
    },
    {
      question: "Qual é o melhor canal para entrar em contato?",
      answer:
        "Para conversa rápida, o WhatsApp é o canal mais direto. Para briefing, referências ou detalhes formais, o e-mail funciona muito bem. Se preferir contratar pela plataforma, o perfil do 99Freelas também está disponível.",
    },
  ],
  contactChannels: [
    {
      label: "WhatsApp",
      value: "+55 17 99751-0663",
      href: "https://wa.me/5517997510663",
      note: "Canal mais rápido para alinhar escopo, prazo e proposta.",
    },
    {
      label: "E-mail",
      value: "nexus7devstudio@gmail.com",
      href: "mailto:nexus7devstudio@gmail.com",
      note: "Ideal para enviar briefing, referências e detalhes do projeto.",
    },
    {
      label: "99Freelas",
      value: "Perfil Nexus7 Dev Studio",
      href: "https://www.99freelas.com.br/user/nexus7-dev-studio",
      note: "Canal profissional para contratação e negociação pela plataforma.",
    },
    {
      label: "GitHub",
      value: "github.com/Nexus7-DevStudio",
      href: "https://github.com/Nexus7-DevStudio",
      note: "Portfólio técnico e base pública do estúdio.",
    },
  ],
};
