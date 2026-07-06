export const projects = [
    {
        id: "agendamento_caminhoes_fox",
        title: "Agendamento de Caminhões - Fox Grãos",
        heroImageKey: "agendamento_caminhoes_fox/desktop/agendamento1.png",
        imagePath: "agendamento_caminhoes_fox",
        description: "Módulo avançado de logística desenvolvido para a gestão completa de frotas e controle operacional. Permite o agendamento eficiente de caminhões e o acompanhamento detalhado de viagens, otimizando o fluxo de transporte de grãos do produtor até o destino.",
        projectLink: "",
        repoLink: "",
        features: [
            "Sistema de alocação de caminhões com visualização em calendário, facilitando o controle diário e semanal de disponibilidades",
            "Envio automatizado de confirmações diretamente para o aplicativo do produtor rural, autorizando o início da operação de carregamento",
            "Dashboard completo com métricas de operações, separando volumes provisionados, executados e saldos a executar",
            "Gerenciamento detalhado de viagens, com rastreio de status (pendente, carregado, entregue, etc.), placas, tickets e datas de carregamento"
        ],
        technologies: ["Angular 17", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"]
    },
    {
        id: "indicacao_mesa_fox",
        title: "Indicação da Mesa - Fox Grãos",
        heroImageKey: "indicacao_mesa_fox/desktop/indicacao_mesa.png",
        imagePath: "indicacao_mesa_fox",
        description: "Módulo financeiro desenvolvido para o controle de operações de commodities. A 'Indicação da Mesa' atua como um painel estratégico que monitora ativos de grãos e contratos vinculados através de diferentes corretoras, gerando recomendações automatizadas de compra e venda para o balanceamento da carteira.",
        projectLink: "",
        repoLink: "",
        features: [
            "Monitoramento e rastreio de ativos de commodities (ex: Milho, Sorgo, Soja) em múltiplas corretoras",
            "Cálculo automatizado de totais para gerar indicações precisas de compra ou venda",
            "Renderização de dados complexos em tabelas dinâmicas, separadas por tipos de operações (como Tela, Call e Put)",
            "Interface responsiva e organizada para facilitar a tomada de decisão rápida pela equipe de operações"
        ],
        technologies: ["Angular 17", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"]
    },
    {
        id: "sga_online",
        title: "SGA Online",
        heroImageKey: "sga_online/desktop/dashboard_sga_online.png",
        imagePath: "sga_online",
        description: "O SGA (Sistema de Gestão Automotivo) Online é um projeto acadêmico que está sendo desenvolvido em equipe com mais quatro colegas. Nosso objetivo é criar uma versão moderna, web e responsiva de um sistema ERP desktop já utilizado por uma empresa do setor automotivo.",
        projectLink: "https://sga-web.github.io/SGA_ONLINE/Front_end/Principal/principal.html",
        repoLink: "https://github.com/SGA-WEB/SGA_ONLINE",
        features: ["Dashboard dinâmico com gráficos interativos e traz informações em tempo real do banco de dados do sistema", "CRUD Layout para criar, visualizar, editar e excluir dados das tabelas", "Possibilidade de fazer uma pesquisa por um campo especifico de uma tabela", "Editar dados do usuário como: nome, senha, email e foto de perfil"],
        technologies: ["HTML 5", "CSS 3", "JavaScript", "Node.js", "PostgreSQL 17", "Figma", "Neon DB (para hospedagem do banco de dados)"]
    },
    {
        id: "rotinas_fox",
        title: "Rotinas Operacionais - Fox Grãos",
        heroImageKey: "rotinas_fox/desktop/rotinas_operacionais.png",
        imagePath: "rotinas_fox",
        description: "Primeiro módulo desenvolvido durante minha atuação na Fox Grãos. Trata-se de uma interface interna focada em centralizar e facilitar o acesso às rotinas de cada setor da empresa, permitindo a abertura e leitura de arquivos em PDF com as diretrizes operacionais diretamente no navegador.",
        projectLink: "",
        repoLink: "",
        features: [
            "Acesso rápido às diretrizes de cada setor (Comercial, Logística, Clube FX, TI, Financeiro e Administrativo)",
            "Abertura e visualização de documentos em PDF integrados à plataforma interna",
            "Interface limpa e intuitiva focada na usabilidade do colaborador"
        ],
        technologies: ["Angular 17", "Tailwind CSS", "TypeScript"]
    },
    {
        id: "tabuada",
        title: "Tabuada",
        heroImageKey: "tabuada/desktop/home_page_tabuada.png",
        imagePath: "tabuada",
        description: "Um site onde é possível testar seus conhecimentos e aprender as tabuadas da matemática. O objetivo principal para o desenvolvimento desse projeto foi para testar e praticar meus conhecimentos em React, pois ele é feito 100% usando React.",
        projectLink: "https://matheushnunes.github.io/projeto-tabuada/",
        repoLink: "https://github.com/matheushnunes/projeto-tabuada",
        features: ["Responder operações matemáticas interativas.", "Definir alguns parâmetros para as operações.", "Visualizar tabuadas de multiplicação, divisão, adição e subtração.", "Alternar entre os temas claro e escuro."],
        technologies: ["React 19", "CSS 3", "JavaScript", "Figma"]
    },
    {
        id: "cxc",
        title: "Conex Consult",
        heroImageKey: "cxc/desktop/home_page_cxc.png",
        imagePath: "cxc",
        description: "O Conex Consult foi o primeiro projeto acadêmico do qual participei, desenvolvido em equipe no início do curso. O objetivo era criar uma plataforma web de vagas de emprego. Embora o projeto tenha sido descontinuado por questões de viabilidade, contribuiu significativamente para meu aprendizado em trabalho colaborativo e desenvolvimento web.",
        projectLink: "https://cxcconexconsult.github.io/Conex-Consult/",
        repoLink: "https://github.com/CXCConexConsult/Conex-Consult",
        features: ["Login e cadastro", "Página de vagas de emprego", "Detalhes de vagas limitadas para usuários não logados"],
        technologies: ["HTML 5", "CSS 3", "JavaScript", "Figma"]
    }
];
