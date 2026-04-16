export const siteData = {
  services: [
    {
      index: "01",
      title: "Landing pages e websites orientados a conversao",
      audience: "Captacao digital",
      summary:
        "Para negocios que precisam organizar a oferta, melhorar a presenca digital e gerar contato sem depender de estrutura pesada.",
      deliverables: [
        "Arquitetura de pagina com CTA claro e fluxo de contato objetivo.",
        "Implementacao responsiva e pronta para analytics, formulario ou WhatsApp.",
        "Base enxuta para publicar rapido e evoluir sem refazer do zero.",
      ],
    },
    {
      index: "02",
      title: "Sistemas web, paineis e ferramentas internas",
      audience: "Operacao interna",
      summary:
        "Para equipes que precisam sair da planilha, organizar regras de negocio e centralizar processos em software sob medida.",
      deliverables: [
        "Modelagem de dominio e organizacao de fluxos internos.",
        "CRUDs, dashboards e estrutura pronta para manutencao.",
        "Repositorio coerente para crescimento gradual da aplicacao.",
      ],
    },
    {
      index: "03",
      title: "APIs, integracoes e automacoes",
      audience: "Conexao entre sistemas",
      summary:
        "Para conectar formularios, operacao, sistemas internos e servicos de terceiros com menos retrabalho e mais controle.",
      deliverables: [
        "APIs com regras claras e estrutura para integracoes futuras.",
        "Automacoes de fluxo operacional e endpoints sob medida.",
        "Base preparada para evolucao sem acoplamento desnecessario.",
      ],
    },
    {
      index: "04",
      title: "Reestruturacao tecnica e sustentacao",
      audience: "Bases existentes",
      summary:
        "Para repositorios, projetos ou frentes digitais que ja existem, mas precisam de mais clareza tecnica e apresentacao profissional.",
      deliverables: [
        "Diagnostico tecnico e reorganizacao de repositorio.",
        "Padronizacao de documentacao, servicos e estudos de caso.",
        "Melhoria de percepcao de valor para cliente, parceiro ou recrutador.",
      ],
    },
  ],
  principles: [
    {
      title: "Contato direto na entrega",
      description:
        "O cliente fala com quem analisa escopo, toma decisao tecnica e escreve codigo. Isso reduz ruido e acelera alinhamento.",
    },
    {
      title: "Arquitetura proporcional ao problema",
      description:
        "A Nexus7 evita stack exibicionista e escolhe a base tecnica que faz sentido para o contexto, o prazo e a manutencao.",
    },
    {
      title: "Documentacao minima util",
      description:
        "Em vez de acumular texto que nao ajuda, a equipe registra o necessario para manter clareza, continuidade e controle de evolucao.",
    },
    {
      title: "Entrega por fase",
      description:
        "Projetos ficam mais seguros quando o escopo e quebrado em blocos entendiveis, com prioridade e criterio de aceite claros.",
    },
    {
      title: "Repositorio como ativo comercial",
      description:
        "A base publica tambem precisa convencer. Estrutura, README, projetos e cases precisam demonstrar criterio, nao improviso.",
    },
    {
      title: "Sem prova social artificial",
      description:
        "Nada de depoimento inventado ou numero sem contexto. A confianca vem de clareza, de trabalho real e de narrativa honesta.",
    },
  ],
  process: [
    {
      step: "ETAPA 01",
      title: "Diagnostico",
      description:
        "Leitura do contexto, do objetivo de negocio, das restricoes e do nivel de maturidade da base atual.",
    },
    {
      step: "ETAPA 02",
      title: "Arquitetura e escopo",
      description:
        "Definicao do que entra na fase atual, da stack adequada e de como a entrega sera organizada sem inflar o projeto.",
    },
    {
      step: "ETAPA 03",
      title: "Implementacao",
      description:
        "Construcao da interface, da logica e da estrutura do repositorio com foco em manutencao e clareza tecnica.",
    },
    {
      step: "ETAPA 04",
      title: "Publicacao e evolucao",
      description:
        "Validacao final, documentacao minima e base preparada para sustentacao, novas fases ou integracoes futuras.",
    },
  ],
  projects: [
    {
      title: "Centro de Estetica Katia Tiso",
      status: "PUBLICO",
      description:
        "Landing page mobile-first pensada para captar leads com baixa friccao, CTA recorrente e base facil de publicar e evoluir.",
      stack: ["HTML", "CSS", "JavaScript modular"],
      highlights: [
        "Separacao clara entre conteudo, configuracao e renderizacao.",
        "Estrutura pronta para formulario, UTM e fluxo de WhatsApp.",
        "Arquitetura simples, rapida e barata de sustentar.",
      ],
      links: [
        {
          label: "Projeto",
          href: "projects/centro-de-estetica-katia-tiso.md",
        },
        {
          label: "Case study",
          href: "case-studies/centro-de-estetica-katia-tiso.md",
        },
        {
          label: "Repositorio publico",
          href: "https://github.com/CristianoRFB/landing-page-clinica-estetica",
          external: true,
        },
      ],
    },
    {
      title: "Lan House Manager",
      status: "PUBLICO",
      description:
        "Base de sistema cliente-servidor para operacao com regras por perfil, fila offline e caminho de evolucao para painel administrativo.",
      stack: ["Python", "FastAPI", "SQLite", "Tests"],
      highlights: [
        "Modelagem de dominio para usuarios, maquinas, sessoes e comandos.",
        "Pensamento de sistema em cenario com conectividade imperfeita.",
        "Base desenhada para crescer sem refazer a fundacao.",
      ],
      links: [
        {
          label: "Projeto",
          href: "projects/lan-house-manager.md",
        },
        {
          label: "Case study",
          href: "case-studies/lan-house-manager.md",
        },
        {
          label: "Repositorio publico",
          href: "https://github.com/CristianoRFB/Lan-House",
          external: true,
        },
      ],
    },
  ],
  repositoryAreas: [
    {
      title: "README.md",
      description: "Apresenta a empresa, a proposta de valor e a leitura inicial do repositorio.",
    },
    {
      title: "docs/",
      description: "Centraliza posicionamento, diagnostico, arquitetura editorial e melhorias.",
    },
    {
      title: "services/",
      description: "Explica a oferta da Nexus7 a partir de problema resolvido, nao de buzzword.",
    },
    {
      title: "projects/",
      description: "Resume projetos publicados com contexto, problema, stack e valor para cliente.",
    },
    {
      title: "case-studies/",
      description: "Aprofunda raciocinio tecnico e contexto de entrega sem inventar prova social.",
    },
    {
      title: "styles/ e scripts/",
      description: "Mantem a vitrine viva do estudio em codigo simples, legivel e facil de evoluir.",
    },
  ],
  faq: [
    {
      question: "A Nexus7 e uma software house grande?",
      answer:
        "Nao. A proposta e ser um estudio boutique: menos camadas, mais contato direto com quem entende o escopo e implementa a entrega. Isso aumenta clareza e reduz repasse de informacao.",
    },
    {
      question: "Que tipo de projeto faz mais sentido contratar com a Nexus7?",
      answer:
        "Projetos web, landing pages, sistemas internos, integracoes, automacoes e reestruturacao tecnica. A equipe funciona melhor quando o desafio pede organizacao, criterio e base pronta para crescer.",
    },
    {
      question: "Por que este repositorio e importante na percepcao do cliente?",
      answer:
        "Porque ele nao deveria parecer um deposito de arquivos. Um bom repositorio mostra como a empresa pensa, organiza e documenta. Isso comunica maturidade antes mesmo da primeira conversa comercial.",
    },
    {
      question: "O que a Nexus7 evita repetir em relacao a referencias como a 404 devs?",
      answer:
        "Evita concentrar tudo em impacto visual, evita depoimento ficticio, evita posicionamento amplo demais e evita deixar a parte documental e estrutural fraca. A ideia e parecer mais solida, mais clara e mais confiavel.",
    },
  ],
  contactChannels: [
    {
      label: "GitHub",
      value: "https://github.com/Nexus7-DevStudio",
      href: "https://github.com/Nexus7-DevStudio",
    },
    {
      label: "Fiverr",
      value: "Adicionar perfil oficial",
    },
    {
      label: "99Freelas",
      value: "Adicionar perfil oficial",
    },
    {
      label: "Email comercial",
      value: "Adicionar canal oficial",
    },
  ],
};
