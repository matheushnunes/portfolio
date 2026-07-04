export const projects = [
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
    },
    {
        id: "rotinas_fox",
        title: "Rotinas Operacionais - Fox Grãos",
        heroImageKey: "rotinas_fox/desktop/rotinas_operacionais.png", // Lembre-se de ajustar este caminho para o local onde você vai salvar a imagem no seu projeto
        imagePath: "rotinas_fox",
        description: "Primeiro módulo desenvolvido durante minha atuação na Fox Grãos. Trata-se de uma interface interna focada em centralizar e facilitar o acesso às rotinas de cada setor da empresa, permitindo a abertura e leitura de arquivos em PDF com as diretrizes operacionais diretamente no navegador.",
        projectLink: "", // Vazio por ser um sistema corporativo privado
        repoLink: "", // Vazio por ser um repositório corporativo privado
        features: [
            "Acesso rápido às diretrizes de cada setor (Comercial, Logística, Clube FX, TI, Financeiro e Administrativo)",
            "Abertura e visualização de documentos em PDF integrados à plataforma interna",
            "Interface limpa e intuitiva focada na usabilidade do colaborador"
        ],
        technologies: ["Angular 17", "Tailwind CSS", "TypeScript"] // Altere se tiver utilizado outras ferramentas específicas nesta tela
    }
];
