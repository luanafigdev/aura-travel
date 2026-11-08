// Fotografias via images.unsplash.com. Consulte CREDITOS_IMAGENS.md antes de reutilizar.
const photo = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const classicDestinations = [
  {
    id: 'costa-amalfitana',
    name: 'Costa Amalfitana',
    short: 'Amalfi',
    country: 'Itália',
    region: 'Europa',
    kind: 'Mar & encanto',
    number: '01',
    tagline: 'Onde o azul encontra o infinito.',
    lead: 'Entre vilas coloridas, estradas que abraçam as montanhas e a brisa salgada do Mediterrâneo, cada curva revela uma nova história.',
    story: 'Na Costa Amalfitana, o tempo parece obedecer a outro ritmo. As casas se empilham delicadamente nos penhascos, os limoeiros perfumam o ar e o mar desenha o horizonte em incontáveis tons de azul. É o tipo de lugar que convida a trocar a pressa pelo prazer de simplesmente estar.',
    quote: 'Alguns lugares não precisam de roteiro. Só de tempo para acontecer.',
    bestSeason: 'Maio a setembro',
    duration: '4–6 dias',
    mood: 'Romance, mar e dolce vita',
    hero: photo('photo-1533105079780-92b9be482077', 2000),
    card: photo('photo-1533105079780-92b9be482077', 1100),
    gallery: [
      photo('photo-1533105079780-92b9be482077', 1100),
      photo('photo-1516483638261-f4dbaf036963', 1100),
      photo('photo-1523906834658-6e24ef2386f9', 1100),
    ],
    highlights: ['Caminhe pelas ruas de Positano', 'Descubra as praias e os caminhos de Amalfi', 'Veja o pôr do sol no alto de Ravello'],
    days: [
      { title: 'Primeiro encontro', text: 'Chegue sem pressa, percorra as ruelas de Positano e descubra um terraço para observar o mar.' },
      { title: 'Pela costa', text: 'Explore Amalfi e seus arredores, com pausas para cafés, pequenas lojas e paisagens inesperadas.' },
      { title: 'O tempo desacelera', text: 'Reserve o dia para Ravello, jardins, mirantes e uma despedida ao pôr do sol.' },
    ],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    short: 'Kyoto',
    country: 'Japão',
    region: 'Ásia',
    kind: 'Cultura & contemplação',
    number: '02',
    tagline: 'A beleza mora nos detalhes.',
    lead: 'Portais vermelhos, jardins silenciosos e pequenas ruas onde tradição e presente se encontram sem fazer barulho.',
    story: 'Kyoto é uma cidade feita para observar. Na sombra de um templo, no vapor que sobe de uma xícara de chá ou no instante em que as folhas mudam de cor, existe uma beleza serena que não se apressa em aparecer. Conhecê-la é aprender a olhar de novo.',
    quote: 'Há destinos que nos ensinam a desacelerar o olhar.',
    bestSeason: 'Março a maio · outubro a novembro',
    duration: '4–5 dias',
    mood: 'Tradição, arte e serenidade',
    hero: photo('photo-1493976040374-85c8e12f0c0e', 2000),
    card: photo('photo-1493976040374-85c8e12f0c0e', 1100),
    gallery: [
      photo('photo-1493976040374-85c8e12f0c0e', 1100),
      photo('photo-1528360983277-13d401cdc186', 1100),
      photo('photo-1493780474015-ba834fd0ce2f', 1100),
    ],
    highlights: ['Passeie pelo distrito de Gion', 'Explore os caminhos de Fushimi Inari', 'Aprecie a calma de Arashiyama'],
    days: [
      { title: 'Ruas e rituais', text: 'Comece pelo centro histórico, descubra ruas tradicionais e reserve um tempo para uma casa de chá.' },
      { title: 'Entre portais', text: 'Conheça Fushimi Inari e aprecie a arquitetura e os jardins no seu próprio ritmo.' },
      { title: 'Verde e silêncio', text: 'Passeie por Arashiyama e termine a jornada num jardim tranquilo.' },
    ],
  },
  {
    id: 'islandia',
    name: 'Islândia',
    short: 'Islândia',
    country: 'Islândia',
    region: 'Europa',
    kind: 'Natureza & aventura',
    number: '03',
    tagline: 'A natureza em sua forma mais pura.',
    lead: 'Cachoeiras imensas, montanhas vestidas de musgo e uma luz que transforma até o silêncio em espetáculo.',
    story: 'A Islândia parece ter sido criada para nos lembrar da escala do mundo. Há estradas que atravessam paisagens vulcânicas, praias de areia escura e cachoeiras que ecoam pelos vales. O céu muda, o vento muda, e a paisagem nunca é exatamente a mesma.',
    quote: 'O extraordinário acontece quando a natureza assume a direção.',
    bestSeason: 'Junho a agosto · inverno para auroras',
    duration: '6–9 dias',
    mood: 'Natureza, descobertas e liberdade',
    hero: photo('photo-1476610182048-b716b8518aae', 2000),
    card: photo('photo-1476610182048-b716b8518aae', 1100),
    gallery: [
      photo('photo-1476610182048-b716b8518aae', 1100),
      photo('photo-1531366936337-7c912a4589a7', 1100),
      photo('photo-1500534623283-312aade485b7', 1100),
    ],
    highlights: ['Observe a força de Skógafoss', 'Explore a costa sul e suas praias', 'Procure cenários de aurora em noites favoráveis'],
    days: [
      { title: 'Primeiros contrastes', text: 'Descubra os arredores de Reykjavík e conheça as primeiras paisagens vulcânicas.' },
      { title: 'Rota das águas', text: 'Siga pela costa sul para encontrar cachoeiras e praias de areia escura.' },
      { title: 'O céu como destino', text: 'Reserve tempo para paisagens amplas e, na estação certa, para observar o céu noturno.' },
    ],
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    short: 'Marrakech',
    country: 'Marrocos',
    region: 'África',
    kind: 'Cultura & cores',
    number: '04',
    tagline: 'Uma cidade para todos os sentidos.',
    lead: 'Pátios secretos, arquitetura em tons de terracota, tecidos coloridos e o ritmo vibrante dos mercados.',
    story: 'Marrakech pulsa em texturas, sabores e encontros. Por trás de uma porta discreta, pode existir um jardim silencioso; entre as ruas da medina, o movimento cria uma sinfonia própria. É uma cidade de contrastes, onde descobrir faz parte da experiência.',
    quote: 'Há lugares que não se visitam: se sentem.',
    bestSeason: 'Março a maio · setembro a novembro',
    duration: '3–5 dias',
    mood: 'Cor, cultura e descobertas',
    hero: photo('photo-1489749798305-4fea3ae63d43', 2000),
    card: photo('photo-1489749798305-4fea3ae63d43', 1100),
    gallery: [
      photo('photo-1489749798305-4fea3ae63d43', 1100),
      photo('photo-1539020140153-e479b8c22e70', 1100),
      photo('photo-1499856871958-5b9627545d1a', 1100),
    ],
    highlights: ['Perca-se pelas cores da medina', 'Descubra a arquitetura dos riads', 'Visite os jardins e mercados tradicionais'],
    days: [
      { title: 'Cores da medina', text: 'Explore os mercados e observe a vida cotidiana entre pequenas ruas e praças.' },
      { title: 'Portas e jardins', text: 'Descubra pátios, arquitetura tradicional e um jardim para desacelerar.' },
      { title: 'Sabores e encontros', text: 'Experimente a culinária local e contemple a cidade à luz do fim de tarde.' },
    ],
  },
  {
    id: 'bali',
    name: 'Bali',
    short: 'Bali',
    country: 'Indonésia',
    region: 'Ásia',
    kind: 'Bem-estar & natureza',
    number: '05',
    tagline: 'O luxo de estar presente.',
    lead: 'Arrozais infinitos, templos envoltos em verde e manhãs que parecem ter sido feitas para começar devagar.',
    story: 'Bali convida à conexão com a natureza e com os pequenos rituais do cotidiano. Entre vilas, arrozais e praias, a ilha reúne paisagens generosas, espiritualidade e uma energia que inspira novos começos.',
    quote: 'Talvez a melhor viagem seja aquela que nos devolve a nós mesmos.',
    bestSeason: 'Abril a outubro',
    duration: '7–10 dias',
    mood: 'Equilíbrio, natureza e mar',
    hero: photo('photo-1537996194471-e657df975ab4', 2000),
    card: photo('photo-1537996194471-e657df975ab4', 1100),
    gallery: [
      photo('photo-1537996194471-e657df975ab4', 1100),
      photo('photo-1537953773345-d172ccf13cf1', 1100),
      photo('photo-1500534314209-a25ddb2bd429', 1100),
    ],
    highlights: ['Explore os arrozais de Ubud', 'Descubra templos e tradições locais', 'Reserve tempo para o litoral'],
    days: [
      { title: 'Uma chegada tranquila', text: 'Encontre um café ou jardim em Ubud e descubra a ilha sem pressa.' },
      { title: 'Verde por todos os lados', text: 'Explore arrozais, paisagens tropicais e pequenos caminhos entre vilas.' },
      { title: 'O encontro com o mar', text: 'Siga para o litoral, conheça novos horizontes e assista ao entardecer.' },
    ],
  },
  {
    id: 'patagonia',
    name: 'Patagônia',
    short: 'Patagônia',
    country: 'Chile & Argentina',
    region: 'América do Sul',
    kind: 'Natureza & aventura',
    number: '06',
    tagline: 'O fim do mundo é só o começo.',
    lead: 'Montanhas imponentes, lagos gelados e horizontes que fazem qualquer pressa parecer pequena.',
    story: 'Na Patagônia, a paisagem é protagonista. O vento desenha caminhos, os picos recortam o céu e cada trilha revela uma nova perspectiva. É um convite à curiosidade, ao respeito pela natureza e à beleza dos lugares vastos.',
    quote: 'Quando o horizonte cresce, nossas possibilidades também.',
    bestSeason: 'Novembro a março',
    duration: '6–10 dias',
    mood: 'Montanhas, trilhas e amplitude',
    hero: photo('photo-1464822759023-fed622ff2c3b', 2000),
    card: photo('photo-1464822759023-fed622ff2c3b', 1100),
    gallery: [
      photo('photo-1464822759023-fed622ff2c3b', 1100),
      photo('photo-1486870591958-9b9d0d1dda99', 1100),
      photo('photo-1500530855697-b586d89ba3ee', 1100),
    ],
    highlights: ['Contemple os cenários de Torres del Paine', 'Explore vilas de montanha', 'Descubra lagos e mirantes panorâmicos'],
    days: [
      { title: 'O primeiro horizonte', text: 'Conheça a região, os mirantes e as paisagens que anunciam a imensidão patagônica.' },
      { title: 'Entre montanhas', text: 'Explore rotas adequadas ao seu preparo, respeitando as condições locais e climáticas.' },
      { title: 'Tempo de contemplar', text: 'Reserve um dia para lagos, trilhas leves e uma última fotografia do horizonte.' },
    ],
  },
];

const FULL_DESTINATION_DATA = [
  {
    "id": "salvador",
    "name": "Salvador",
    "short": "Salvador",
    "country": "Brasil",
    "region": "América do Sul",
    "kind": "Cultura & mar",
    "wikiTitle": "Salvador, Bahia",
    "tagline": "Onde cada esquina tem ritmo.",
    "lead": "Entre o azul da Baía de Todos-os-Santos, os casarões do Pelourinho e o pôr do sol no Farol da Barra, Salvador transforma cada caminhada em descoberta.",
    "story": "Primeira capital do Brasil, Salvador reúne história, arte, cozinha, música e uma presença afro-brasileira que se expressa nas ruas e nas festas. Subir e descer suas ladeiras é descobrir igrejas, ateliês, praias e histórias que continuam vivas.",
    "bestSeason": "Setembro a março, com atenção às chuvas",
    "duration": "4–6 dias",
    "mood": "Cultura, música e mar",
    "highlights": [
      "Explore as ruas e a história do Pelourinho",
      "Assista ao entardecer no Farol da Barra",
      "Conheça o Mercado Modelo e a Cidade Baixa"
    ]
  },
  {
    "id": "rio-de-janeiro",
    "name": "Rio de Janeiro",
    "short": "Rio de Janeiro",
    "country": "Brasil",
    "region": "América do Sul",
    "kind": "Paisagens & cidade",
    "wikiTitle": "Rio de Janeiro",
    "tagline": "Montanhas, mar e movimento.",
    "lead": "A cidade se desenha entre morros, praias e ruas onde a natureza está sempre por perto.",
    "story": "No Rio de Janeiro, o cenário é parte da experiência: as curvas da orla, os mirantes verdes e a vida cultural produzem encontros inesperados. Entre uma caminhada e um pôr do sol, a cidade mistura ritmos e panoramas.",
    "bestSeason": "Maio a outubro, em geral mais ameno",
    "duration": "4–6 dias",
    "mood": "Praias, arte e mirantes",
    "highlights": [
      "Veja a cidade do alto do Pão de Açúcar",
      "Conheça as trilhas e mirantes do Corcovado",
      "Passeie pela orla de Ipanema e Copacabana"
    ]
  },
  {
    "id": "fernando-de-noronha",
    "name": "Fernando de Noronha",
    "short": "Fernando de Noronha",
    "country": "Brasil",
    "region": "América do Sul",
    "kind": "Ilhas & natureza",
    "wikiTitle": "Fernando de Noronha",
    "tagline": "Um azul difícil de esquecer.",
    "lead": "Baías cristalinas e paisagens vulcânicas fazem do arquipélago uma pausa no meio do Atlântico.",
    "story": "A beleza de Fernando de Noronha está na transparência da água e no respeito aos ritmos da natureza. Mirantes, praias e projetos de conservação tornam a experiência especial e pedem atenção às regras ambientais.",
    "bestSeason": "Agosto a outubro para mar mais calmo em muitas praias",
    "duration": "4–6 dias",
    "mood": "Mar, conservação e tranquilidade",
    "highlights": [
      "Contemple a Baía do Sancho",
      "Veja os mirantes do Morro Dois Irmãos",
      "Conheça as piscinas naturais quando permitido"
    ]
  },
  {
    "id": "lencois-maranhenses",
    "name": "Lençóis Maranhenses",
    "short": "Lençóis Maranhenses",
    "country": "Brasil",
    "region": "América do Sul",
    "kind": "Dunas & lagoas",
    "wikiTitle": "Lençóis Maranhenses National Park",
    "tagline": "Um deserto que guarda água.",
    "lead": "Dunas claras se estendem até o horizonte e revelam lagoas temporárias de tons surpreendentes.",
    "story": "Nos Lençóis Maranhenses, vento e chuva desenham uma paisagem em transformação. Caminhar pelas dunas e encontrar lagoas entre as curvas de areia é uma experiência de contemplação da natureza.",
    "bestSeason": "Junho a setembro, dependendo das chuvas",
    "duration": "3–5 dias",
    "mood": "Dunas, lagoas e vastidão",
    "highlights": [
      "Visite circuitos de lagoas com guia autorizado",
      "Veja as dunas ao amanhecer ou entardecer",
      "Conheça comunidades e paisagens do entorno"
    ]
  },
  {
    "id": "cataratas-do-iguacu",
    "name": "Cataratas do Iguaçu",
    "short": "Cataratas do Iguaçu",
    "country": "Brasil",
    "region": "América do Sul",
    "kind": "Natureza & aventura",
    "wikiTitle": "Iguazu Falls",
    "tagline": "A força da água em movimento.",
    "lead": "Um conjunto de quedas monumentais encontra a floresta subtropical na fronteira entre Brasil e Argentina.",
    "story": "As Cataratas do Iguaçu impressionam pelo som, pelo vapor e pelas mudanças de perspectiva ao longo das passarelas. O parque convida a observar a biodiversidade e a potência das águas.",
    "bestSeason": "Março a maio e agosto a outubro, conforme o objetivo",
    "duration": "2–4 dias",
    "mood": "Cachoeiras e biodiversidade",
    "highlights": [
      "Percorra as passarelas do lado brasileiro",
      "Conheça outros ângulos pelo lado argentino",
      "Observe a fauna e a floresta do parque"
    ]
  },
  {
    "id": "ouro-preto",
    "name": "Ouro Preto",
    "short": "Ouro Preto",
    "country": "Brasil",
    "region": "América do Sul",
    "kind": "História & arquitetura",
    "wikiTitle": "Ouro Preto",
    "tagline": "O passado desenhado em ladeiras.",
    "lead": "Casarões, igrejas e ateliês ocupam as ruas de pedra de uma cidade marcada pela história brasileira.",
    "story": "Ouro Preto mistura arte barroca, tradição universitária e paisagens montanhosas. Suas ladeiras convidam à descoberta de museus, detalhes arquitetônicos e histórias que merecem um olhar atento.",
    "bestSeason": "Abril a setembro, período em geral mais seco",
    "duration": "2–4 dias",
    "mood": "Patrimônio, arte e cultura",
    "highlights": [
      "Passeie pela Praça Tiradentes e pelo centro",
      "Explore igrejas e museus históricos",
      "Conheça ateliês e mirantes da cidade"
    ]
  },
  {
    "id": "buenos-aires",
    "name": "Buenos Aires",
    "short": "Buenos Aires",
    "country": "Argentina",
    "region": "América do Sul",
    "kind": "Cultura & cidade",
    "wikiTitle": "Buenos Aires",
    "tagline": "A cidade que dança com o tempo.",
    "lead": "Cafés antigos, livrarias e bairros criativos dão ritmo à capital argentina.",
    "story": "Buenos Aires tem ruas arborizadas, arquitetura e uma cena cultural vibrante. Entre livrarias, restaurantes e parques, é fácil descobrir um novo bairro favorito a cada dia.",
    "bestSeason": "Março a maio e setembro a novembro",
    "duration": "4–6 dias",
    "mood": "Arte, cafés e vida urbana",
    "highlights": [
      "Explore San Telmo e seus mercados",
      "Conheça Recoleta e seus museus",
      "Passeie por Palermo e seus parques"
    ]
  },
  {
    "id": "machu-picchu",
    "name": "Cusco & Machu Picchu",
    "short": "Cusco & Machu Picchu",
    "country": "Peru",
    "region": "América do Sul",
    "kind": "História & montanhas",
    "wikiTitle": "Machu Picchu",
    "tagline": "Entre nuvens, pedras e memória.",
    "lead": "Caminhos andinos conduzem a sítios históricos que atravessaram séculos.",
    "story": "Cusco reúne heranças andinas e arquitetura colonial, enquanto Machu Picchu revela a engenharia e a paisagem do mundo inca. A altitude pede adaptação, tempo e respeito às regras de visitação.",
    "bestSeason": "Maio a setembro, estação mais seca",
    "duration": "5–8 dias",
    "mood": "Andes, patrimônio e descoberta",
    "highlights": [
      "Explore o centro histórico de Cusco",
      "Conheça o Vale Sagrado dos Incas",
      "Visite Machu Picchu com ingresso e circuito reservado"
    ]
  },
  {
    "id": "atacama",
    "name": "Deserto do Atacama",
    "short": "Deserto do Atacama",
    "country": "Chile",
    "region": "América do Sul",
    "kind": "Deserto & estrelas",
    "wikiTitle": "Atacama Desert",
    "tagline": "Silêncio em escala infinita.",
    "lead": "Vulcões, salares e céus cristalinos compõem paisagens que parecem pertencer a outro planeta.",
    "story": "No Atacama, o deserto revela diferentes cores a cada hora do dia. Lagunas de altitude, formações rochosas e observação do céu fazem parte de uma viagem marcada pelos contrastes.",
    "bestSeason": "Março a maio e setembro a novembro",
    "duration": "4–6 dias",
    "mood": "Paisagens, astronomia e altitude",
    "highlights": [
      "Visite o Valle de la Luna",
      "Conheça lagunas e salares com orientação local",
      "Aprecie o céu noturno em passeio adequado"
    ]
  },
  {
    "id": "salar-de-uyuni",
    "name": "Salar de Uyuni",
    "short": "Salar de Uyuni",
    "country": "Bolívia",
    "region": "América do Sul",
    "kind": "Paisagens surreais",
    "wikiTitle": "Salar de Uyuni",
    "tagline": "O horizonte vira espelho.",
    "lead": "Uma imensidão de sal cria linhas infinitas e, na época das chuvas, reflexos extraordinários.",
    "story": "O Salar de Uyuni transforma a paisagem em abstração: céu e chão podem parecer o mesmo lugar. O passeio costuma incluir pequenas comunidades e ambientes de altitude, que exigem planejamento climático.",
    "bestSeason": "Dezembro a março para reflexos; maio a outubro para solo seco",
    "duration": "2–4 dias",
    "mood": "Deserto, reflexos e aventura",
    "highlights": [
      "Explore o salar com operadores locais",
      "Conheça a Ilha Incahuasi quando acessível",
      "Observe os contrastes de luz no horizonte"
    ]
  },
  {
    "id": "cartagena",
    "name": "Cartagena",
    "short": "Cartagena",
    "country": "Colômbia",
    "region": "América do Sul",
    "kind": "História & Caribe",
    "wikiTitle": "Cartagena, Colombia",
    "tagline": "Paredes coloridas, histórias vivas.",
    "lead": "Varandas floridas e muralhas antigas fazem contraste com o azul do Caribe.",
    "story": "Cartagena combina arquitetura colonial, música e a vida vibrante de suas praças. Entre ruas ensolaradas e brisa marítima, a cidade convida a caminhar e descobrir.",
    "bestSeason": "Dezembro a abril, período em geral menos chuvoso",
    "duration": "3–5 dias",
    "mood": "História, cor e mar",
    "highlights": [
      "Passeie pela cidade amuralhada",
      "Explore o bairro criativo de Getsemaní",
      "Reserve um dia para conhecer o litoral da região"
    ]
  },
  {
    "id": "galapagos",
    "name": "Ilhas Galápagos",
    "short": "Ilhas Galápagos",
    "country": "Equador",
    "region": "América do Sul",
    "kind": "Vida selvagem & ilhas",
    "wikiTitle": "Galápagos Islands",
    "tagline": "O mundo natural de perto.",
    "lead": "Ilhas vulcânicas e espécies singulares transformam cada passeio em uma aula de biodiversidade.",
    "story": "Nas Galápagos, a natureza é a protagonista. Praias, trilhas e visitas guiadas revelam um ecossistema especial, cuja conservação é parte essencial da experiência.",
    "bestSeason": "Dezembro a maio para clima mais quente; junho a novembro para águas mais frias",
    "duration": "5–8 dias",
    "mood": "Natureza, ciência e conservação",
    "highlights": [
      "Observe a fauna em trilhas autorizadas",
      "Conheça praias e paisagens vulcânicas",
      "Visite centros de conservação e interpretação"
    ]
  },
  {
    "id": "nova-york",
    "name": "Nova York",
    "short": "Nova York",
    "country": "Estados Unidos",
    "region": "América do Norte",
    "kind": "Arte & metrópole",
    "wikiTitle": "New York City",
    "tagline": "Uma cidade, infinitas histórias.",
    "lead": "Arranha-céus, parques, museus e bairros formam uma paisagem urbana sempre em movimento.",
    "story": "Nova York é feita de contrastes: a energia das avenidas convive com a calma de um parque e com pequenos cafés de bairro. Cada esquina revela uma mistura de culturas e possibilidades.",
    "bestSeason": "Abril a junho e setembro a outubro",
    "duration": "5–7 dias",
    "mood": "Cultura, arquitetura e energia",
    "highlights": [
      "Caminhe pelo Central Park",
      "Explore museus e bairros de Manhattan",
      "Atravesse a Brooklyn Bridge e veja o horizonte"
    ]
  },
  {
    "id": "banff",
    "name": "Banff",
    "short": "Banff",
    "country": "Canadá",
    "region": "América do Norte",
    "kind": "Montanhas & lagos",
    "wikiTitle": "Banff National Park",
    "tagline": "A serenidade tem cor de lago.",
    "lead": "Montanhas rochosas e lagos glaciais criam cenários de silêncio e grandeza.",
    "story": "No Parque Nacional de Banff, a paisagem muda com as estações: águas turquesa no verão e vales nevados no inverno. Trilhas e mirantes permitem conhecer a região respeitando o ambiente natural.",
    "bestSeason": "Junho a setembro para trilhas e lagos; inverno para neve",
    "duration": "4–6 dias",
    "mood": "Montanhas, lagos e natureza",
    "highlights": [
      "Contemple Lake Louise",
      "Explore mirantes nas Montanhas Rochosas",
      "Passeie pelo vilarejo de Banff"
    ]
  },
  {
    "id": "cidade-do-mexico",
    "name": "Cidade do México",
    "short": "Cidade do México",
    "country": "México",
    "region": "América do Norte",
    "kind": "Arte & gastronomia",
    "wikiTitle": "Mexico City",
    "tagline": "Uma metrópole de muitas camadas.",
    "lead": "Mercados, museus, parques e arquitetura contam histórias de diferentes épocas.",
    "story": "A Cidade do México reúne tradições antigas, arte contemporânea e uma cena gastronômica vibrante. Explorar seus bairros é descobrir espaços verdes, praças e novas formas de olhar a cidade.",
    "bestSeason": "Março a maio e outubro a novembro",
    "duration": "4–6 dias",
    "mood": "Museus, mercados e cultura",
    "highlights": [
      "Visite o Centro Histórico e o Zócalo",
      "Explore museus e jardins de Chapultepec",
      "Caminhe pelos bairros de Roma e Condesa"
    ]
  },
  {
    "id": "havana",
    "name": "Havana",
    "short": "Havana",
    "country": "Cuba",
    "region": "América Central & Caribe",
    "kind": "História & música",
    "wikiTitle": "Havana",
    "tagline": "O tempo ganha outra cadência.",
    "lead": "Praças históricas, fachadas coloridas e música compõem o cenário da capital cubana.",
    "story": "Havana tem uma identidade marcada por diferentes períodos da sua história. Uma caminhada pelo centro antigo revela arquitetura, arte e uma paisagem urbana única diante do mar.",
    "bestSeason": "Novembro a abril, período em geral menos chuvoso",
    "duration": "3–5 dias",
    "mood": "Música, arquitetura e história",
    "highlights": [
      "Explore Habana Vieja e suas praças",
      "Passeie pelo Malecón ao fim do dia",
      "Conheça museus e espaços culturais locais"
    ]
  },
  {
    "id": "costa-rica",
    "name": "Costa Rica",
    "short": "Costa Rica",
    "country": "Costa Rica",
    "region": "América Central & Caribe",
    "kind": "Florestas & aventura",
    "wikiTitle": "Costa Rica",
    "tagline": "Verde em todas as direções.",
    "lead": "Florestas tropicais, vulcões e praias convidam a encontros com a biodiversidade.",
    "story": "A Costa Rica reúne paisagens que mudam em poucas horas de viagem. Das florestas úmidas ao litoral, a experiência se conecta à conservação e à observação da natureza.",
    "bestSeason": "Dezembro a abril em muitas regiões, varia conforme a costa",
    "duration": "7–10 dias",
    "mood": "Floresta, biodiversidade e mar",
    "highlights": [
      "Conheça parques naturais e suas trilhas",
      "Explore a região do Vulcão Arenal",
      "Reserve tempo para praias do Pacífico ou Caribe"
    ]
  },
  {
    "id": "paris",
    "name": "Paris",
    "short": "Paris",
    "country": "França",
    "region": "Europa",
    "kind": "Arte & romance",
    "wikiTitle": "Paris",
    "tagline": "A cidade feita para caminhar.",
    "lead": "Boulevards, jardins, museus e pequenas livrarias criam uma atmosfera inconfundível.",
    "story": "Paris oferece beleza tanto nos monumentos quanto nos detalhes cotidianos. Tomar um café, observar o Sena e descobrir uma rua tranquila podem ser os melhores momentos da viagem.",
    "bestSeason": "Abril a junho e setembro a outubro",
    "duration": "4–6 dias",
    "mood": "Arte, cafés e arquitetura",
    "highlights": [
      "Caminhe às margens do Sena",
      "Conheça museus e galerias de arte",
      "Explore Montmartre e suas ruas"
    ]
  },
  {
    "id": "lisboa",
    "name": "Lisboa",
    "short": "Lisboa",
    "country": "Portugal",
    "region": "Europa",
    "kind": "Cidade & mar",
    "wikiTitle": "Lisbon",
    "tagline": "Entre azulejos e horizontes.",
    "lead": "Bonde amarelo, ladeiras e miradouros desenham uma cidade voltada para a luz do Atlântico.",
    "story": "Lisboa tem um ritmo acolhedor, marcado por praças, pequenos cafés e bairros históricos. Caminhar por suas ruas revela azulejos, música e vistas sobre o Tejo.",
    "bestSeason": "Março a junho e setembro a outubro",
    "duration": "3–5 dias",
    "mood": "História, gastronomia e mirantes",
    "highlights": [
      "Passeie por Alfama e seus miradouros",
      "Conheça Belém e sua história marítima",
      "Explore o centro e a Baixa lisboeta"
    ]
  },
  {
    "id": "londres",
    "name": "Londres",
    "short": "Londres",
    "country": "Reino Unido",
    "region": "Europa",
    "kind": "Cultura & arquitetura",
    "wikiTitle": "London",
    "tagline": "Tradição com energia de futuro.",
    "lead": "Museus, parques e ruas cosmopolitas convivem com ícones históricos às margens do Tâmisa.",
    "story": "Londres permite atravessar séculos em um dia: de mercados criativos a palácios, de galerias a parques tranquilos. É uma cidade para descobrir de muitas maneiras.",
    "bestSeason": "Maio a setembro, em geral mais ameno",
    "duration": "4–6 dias",
    "mood": "Museus, parques e diversidade",
    "highlights": [
      "Caminhe às margens do Tâmisa",
      "Explore museus e galerias gratuitas",
      "Conheça bairros como Notting Hill e Camden"
    ]
  },
  {
    "id": "roma",
    "name": "Roma",
    "short": "Roma",
    "country": "Itália",
    "region": "Europa",
    "kind": "História & gastronomia",
    "wikiTitle": "Rome",
    "tagline": "Um museu a céu aberto.",
    "lead": "Praças, fontes e ruínas antigas fazem parte do cotidiano de uma cidade cheia de vida.",
    "story": "Em Roma, cada rua oferece um encontro com a história. Entre vestígios da Antiguidade, igrejas e trattorias, a cidade cria um diálogo constante entre passado e presente.",
    "bestSeason": "Abril a junho e setembro a outubro",
    "duration": "4–5 dias",
    "mood": "Patrimônio, arte e sabores",
    "highlights": [
      "Conheça o Coliseu e o Fórum Romano",
      "Explore as praças e fontes do centro",
      "Caminhe pelo Trastevere no fim do dia"
    ]
  },
  {
    "id": "veneza",
    "name": "Veneza",
    "short": "Veneza",
    "country": "Itália",
    "region": "Europa",
    "kind": "Canais & arte",
    "wikiTitle": "Venice",
    "tagline": "A cidade que flutua na memória.",
    "lead": "Canais, pontes delicadas e fachadas antigas compõem uma paisagem única.",
    "story": "Veneza parece desafiar o tempo. A melhor maneira de conhecê-la é caminhar por ruas menos movimentadas e observar a vida cotidiana à beira dos canais.",
    "bestSeason": "Abril a maio e setembro a outubro",
    "duration": "2–4 dias",
    "mood": "Arte, água e contemplação",
    "highlights": [
      "Explore a Praça São Marcos",
      "Percorra os canais a pé e em transporte aquático",
      "Visite ilhas e ateliês de artesanato"
    ]
  },
  {
    "id": "santorini",
    "name": "Santorini",
    "short": "Santorini",
    "country": "Grécia",
    "region": "Europa",
    "kind": "Ilhas & pôr do sol",
    "wikiTitle": "Santorini",
    "tagline": "Azul sobre branco, luz sobre mar.",
    "lead": "Casas claras e falésias vulcânicas enquadram o horizonte do mar Egeu.",
    "story": "Santorini é conhecida pelas vilas construídas na borda da caldeira. Seus caminhos, praias e vistas mostram uma paisagem moldada pelo vulcanismo e pela vida insular.",
    "bestSeason": "Maio a junho e setembro a outubro",
    "duration": "3–5 dias",
    "mood": "Mar, arquitetura e luz",
    "highlights": [
      "Caminhe por Oia e seus mirantes",
      "Explore Fira e os caminhos da caldeira",
      "Conheça praias e vilas da ilha"
    ]
  },
  {
    "id": "barcelona",
    "name": "Barcelona",
    "short": "Barcelona",
    "country": "Espanha",
    "region": "Europa",
    "kind": "Design & cidade",
    "wikiTitle": "Barcelona",
    "tagline": "Criatividade ao ar livre.",
    "lead": "Arquitetura modernista, mercados, praias e bairros vibrantes convivem com naturalidade.",
    "story": "Barcelona reúne traços de Gaudí, espaços públicos acolhedores e uma vida cultural que se espalha pelas ruas. É um convite à curiosidade arquitetônica e ao prazer de caminhar.",
    "bestSeason": "Abril a junho e setembro a outubro",
    "duration": "3–5 dias",
    "mood": "Design, arte e litoral",
    "highlights": [
      "Veja a arquitetura da Sagrada Família",
      "Explore o Bairro Gótico e seus caminhos",
      "Passeie pelo Park Güell e pelas áreas verdes"
    ]
  },
  {
    "id": "amsterda",
    "name": "Amsterdã",
    "short": "Amsterdã",
    "country": "Países Baixos",
    "region": "Europa",
    "kind": "Canais & museus",
    "wikiTitle": "Amsterdam",
    "tagline": "Pequenos detalhes, grandes descobertas.",
    "lead": "Canais arborizados, bicicletas e fachadas estreitas criam uma cidade acolhedora.",
    "story": "Amsterdã combina museus de referência, parques e bairros onde tudo parece convidar a passear devagar. A água e a arquitetura dão identidade a cada paisagem.",
    "bestSeason": "Abril a maio e setembro",
    "duration": "3–5 dias",
    "mood": "Museus, canais e cotidiano",
    "highlights": [
      "Caminhe ao longo dos canais históricos",
      "Conheça museus da Museumplein",
      "Explore Jordaan e suas ruas tranquilas"
    ]
  },
  {
    "id": "alpes-suicos",
    "name": "Alpes Suíços",
    "short": "Alpes Suíços",
    "country": "Suíça",
    "region": "Europa",
    "kind": "Montanhas & vilarejos",
    "wikiTitle": "Swiss Alps",
    "tagline": "Altura, silêncio e ar puro.",
    "lead": "Vilas alpinas se abrem para picos nevados, lagos e trilhas panorâmicas.",
    "story": "Os Alpes Suíços reúnem paisagens grandiosas e uma rede de vilarejos e transportes de montanha. A experiência muda completamente conforme a estação e o vale escolhido.",
    "bestSeason": "Junho a setembro para trilhas; dezembro a março para neve",
    "duration": "5–8 dias",
    "mood": "Montanhas, trilhas e natureza",
    "highlights": [
      "Explore vilas alpinas e seus caminhos",
      "Contemple lagos e mirantes panorâmicos",
      "Conheça uma rota de trem de montanha"
    ]
  },
  {
    "id": "toquio",
    "name": "Tóquio",
    "short": "Tóquio",
    "country": "Japão",
    "region": "Ásia",
    "kind": "Cidade & cultura",
    "wikiTitle": "Tokyo",
    "tagline": "O futuro encontra a delicadeza.",
    "lead": "Neons, templos, jardins e pequenos restaurantes convivem na capital japonesa.",
    "story": "Tóquio surpreende pela diversidade de bairros. O cotidiano alterna movimento intenso, arquitetura contemporânea e refúgios tranquilos, sempre com espaço para descobertas.",
    "bestSeason": "Março a maio e outubro a novembro",
    "duration": "5–7 dias",
    "mood": "Design, gastronomia e cultura",
    "highlights": [
      "Explore Shibuya e seus arredores",
      "Conheça templos e jardins em Asakusa",
      "Descubra museus e bairros como Ueno e Ginza"
    ]
  },
  {
    "id": "seul",
    "name": "Seul",
    "short": "Seul",
    "country": "Coreia do Sul",
    "region": "Ásia",
    "kind": "Cultura & design",
    "wikiTitle": "Seoul",
    "tagline": "Tradição em movimento.",
    "lead": "Palácios, cafés criativos e bairros contemporâneos dividem o mesmo horizonte.",
    "story": "Seul reúne cultura pop, patrimônio histórico e uma cena de design em constante transformação. Entre mercados, parques e arquitetura, há sempre uma nova perspectiva da cidade.",
    "bestSeason": "Abril a maio e setembro a outubro",
    "duration": "4–6 dias",
    "mood": "Arte, comida e cultura urbana",
    "highlights": [
      "Visite palácios históricos como Gyeongbokgung",
      "Explore bairros criativos e cafés",
      "Passeie à beira do rio Han"
    ]
  },
  {
    "id": "bangkok",
    "name": "Bangkok",
    "short": "Bangkok",
    "country": "Tailândia",
    "region": "Ásia",
    "kind": "Templos & cidade",
    "wikiTitle": "Bangkok",
    "tagline": "Cores que nunca param.",
    "lead": "Mercados, templos e canais dão forma a uma cidade intensa e cheia de contrastes.",
    "story": "Bangkok combina tradição budista, gastronomia de rua e arquitetura contemporânea. É uma cidade que se descobre em pequenos encontros, feiras e templos.",
    "bestSeason": "Novembro a fevereiro, em geral menos quente",
    "duration": "3–5 dias",
    "mood": "Templos, sabores e mercados",
    "highlights": [
      "Conheça templos e o Grande Palácio",
      "Explore mercados e bairros tradicionais",
      "Faça um passeio pelas margens do rio Chao Phraya"
    ]
  },
  {
    "id": "hoi-an",
    "name": "Hoi An",
    "short": "Hoi An",
    "country": "Vietnã",
    "region": "Ásia",
    "kind": "Patrimônio & lanternas",
    "wikiTitle": "Hội An",
    "tagline": "Luzes que contam histórias.",
    "lead": "Casas amarelas, lanternas coloridas e canais criam uma atmosfera delicada.",
    "story": "Hoi An preserva marcas de encontros culturais e tradições artesanais. Ao entardecer, suas ruas históricas ganham uma luz especial que convida à caminhada.",
    "bestSeason": "Fevereiro a abril, em geral menos chuvoso",
    "duration": "2–4 dias",
    "mood": "Arquitetura, artesanato e rios",
    "highlights": [
      "Caminhe pelo centro histórico",
      "Conheça oficinas de artesanato",
      "Observe o entardecer junto ao rio Thu Bồn"
    ]
  },
  {
    "id": "singapura",
    "name": "Singapura",
    "short": "Singapura",
    "country": "Singapura",
    "region": "Ásia",
    "kind": "Design & jardins",
    "wikiTitle": "Singapore",
    "tagline": "Uma cidade inventando amanhã.",
    "lead": "Jardins futuristas, arquitetura e diversidade cultural se encontram em uma ilha urbana.",
    "story": "Singapura oferece uma mistura de espaços verdes, museus e bairros cheios de personalidade. O transporte integrado facilita conhecer diferentes faces da cidade.",
    "bestSeason": "Fevereiro a abril tende a ser relativamente menos chuvoso",
    "duration": "3–5 dias",
    "mood": "Arquitetura, jardins e culturas",
    "highlights": [
      "Explore Gardens by the Bay",
      "Caminhe pela região de Marina Bay",
      "Conheça bairros como Chinatown e Little India"
    ]
  },
  {
    "id": "capadocia",
    "name": "Capadócia",
    "short": "Capadócia",
    "country": "Turquia",
    "region": "Ásia",
    "kind": "Paisagens & história",
    "wikiTitle": "Cappadocia",
    "tagline": "A paisagem parece um sonho.",
    "lead": "Vales esculpidos pela erosão e construções na rocha criam um cenário singular.",
    "story": "Na Capadócia, a geologia e a história se entrelaçam entre vilarejos, igrejas escavadas e mirantes. O nascer do sol revela formas e cores diferentes em cada vale.",
    "bestSeason": "Abril a junho e setembro a outubro",
    "duration": "3–5 dias",
    "mood": "Vales, história e mirantes",
    "highlights": [
      "Explore os vales de Göreme",
      "Conheça igrejas e cidades escavadas na rocha",
      "Veja o nascer do sol em um mirante"
    ]
  },
  {
    "id": "petra",
    "name": "Petra",
    "short": "Petra",
    "country": "Jordânia",
    "region": "Ásia",
    "kind": "Arqueologia & deserto",
    "wikiTitle": "Petra",
    "tagline": "Esculpida pelo tempo e pela pedra.",
    "lead": "Desfiladeiros de rocha avermelhada conduzem a monumentos de uma cidade antiga.",
    "story": "Petra impressiona pela arquitetura esculpida na pedra e pela história nabateia. Caminhar por seus caminhos é descobrir camadas de uma civilização em meio ao deserto.",
    "bestSeason": "Março a maio e setembro a novembro",
    "duration": "2–3 dias",
    "mood": "Arqueologia, cultura e deserto",
    "highlights": [
      "Caminhe pelo desfiladeiro do Siq",
      "Contemple o Tesouro de Petra",
      "Explore outros monumentos do sítio com orientação local"
    ]
  },
  {
    "id": "jaipur",
    "name": "Jaipur",
    "short": "Jaipur",
    "country": "Índia",
    "region": "Ásia",
    "kind": "Palácios & cores",
    "wikiTitle": "Jaipur",
    "tagline": "Arquitetura em tons de rosa.",
    "lead": "Palácios, fortes e mercados artesanais dão vida à chamada Cidade Rosa.",
    "story": "Jaipur faz parte das grandes rotas culturais do Rajastão. Seus monumentos, pátios e ruas comerciais revelam tradições, artesanato e uma arquitetura marcante.",
    "bestSeason": "Novembro a fevereiro, clima em geral mais ameno",
    "duration": "3–4 dias",
    "mood": "Palácios, arte e tradição",
    "highlights": [
      "Conheça o Hawa Mahal",
      "Explore o Amber Fort",
      "Passeie pelos mercados tradicionais"
    ]
  },
  {
    "id": "maldivas",
    "name": "Maldivas",
    "short": "Maldivas",
    "country": "Maldivas",
    "region": "Ásia",
    "kind": "Ilhas & mar",
    "wikiTitle": "Maldives",
    "tagline": "O oceano em tons de calma.",
    "lead": "Atóis de areia clara e águas turquesa criam cenários serenos em pleno Índico.",
    "story": "Nas Maldivas, o mar define o ritmo da viagem. Praias, recifes e comunidades insulares oferecem diferentes maneiras de vivenciar o arquipélago com respeito ao ambiente marinho.",
    "bestSeason": "Novembro a abril, em geral mais seco",
    "duration": "5–7 dias",
    "mood": "Mar, descanso e natureza",
    "highlights": [
      "Conheça praias e lagunas de um atol",
      "Observe a vida marinha com guias responsáveis",
      "Explore a cultura de ilhas habitadas"
    ]
  },
  {
    "id": "katmandu",
    "name": "Katmandu",
    "short": "Katmandu",
    "country": "Nepal",
    "region": "Ásia",
    "kind": "Templos & montanhas",
    "wikiTitle": "Kathmandu",
    "tagline": "Entre templos e horizontes.",
    "lead": "Praças históricas e a vida do vale do Katmandu revelam séculos de tradições.",
    "story": "Katmandu reúne patrimônio, artesanato e uma intensa vida urbana aos pés do Himalaia. A cidade é ponto de partida para explorar paisagens e comunidades do Nepal.",
    "bestSeason": "Março a maio e setembro a novembro",
    "duration": "3–5 dias",
    "mood": "História, templos e cultura",
    "highlights": [
      "Explore a Praça Durbar e sua arquitetura",
      "Conheça templos e estupas históricas",
      "Visite vilarejos e paisagens do vale"
    ]
  },
  {
    "id": "cairo",
    "name": "Cairo",
    "short": "Cairo",
    "country": "Egito",
    "region": "África",
    "kind": "História & monumentos",
    "wikiTitle": "Cairo",
    "tagline": "Onde o passado toca o horizonte.",
    "lead": "Mesquitas, mercados e o Nilo compõem uma capital cercada por grandes histórias.",
    "story": "O Cairo oferece encontros com diferentes períodos da história egípcia. Entre museus, bairros antigos e as pirâmides próximas de Gizé, a cidade pede tempo para observar.",
    "bestSeason": "Outubro a abril, temperaturas em geral mais amenas",
    "duration": "4–6 dias",
    "mood": "Arqueologia, museus e cultura",
    "highlights": [
      "Conheça as pirâmides de Gizé",
      "Visite museus e coleções egípcias",
      "Caminhe por bairros históricos e mercados"
    ]
  },
  {
    "id": "cidade-do-cabo",
    "name": "Cidade do Cabo",
    "short": "Cidade do Cabo",
    "country": "África do Sul",
    "region": "África",
    "kind": "Montanhas & litoral",
    "wikiTitle": "Cape Town",
    "tagline": "O encontro das montanhas com o mar.",
    "lead": "Falésias, praias e vinhedos cercam uma cidade emoldurada pela Table Mountain.",
    "story": "A Cidade do Cabo é conhecida pelas paisagens naturais e por uma história complexa. Trilhas, bairros culturais e estradas costeiras revelam muitas formas de vivenciar a região.",
    "bestSeason": "Novembro a março, verão local",
    "duration": "4–6 dias",
    "mood": "Montanhas, litoral e cultura",
    "highlights": [
      "Suba ou contemple a Table Mountain",
      "Explore a península do Cabo",
      "Conheça mercados e espaços culturais da cidade"
    ]
  },
  {
    "id": "zanzibar",
    "name": "Zanzibar",
    "short": "Zanzibar",
    "country": "Tanzânia",
    "region": "África",
    "kind": "Ilhas & cultura",
    "wikiTitle": "Zanzibar",
    "tagline": "Mar turquesa, memória e especiarias.",
    "lead": "Ruas de Stone Town e praias de areia clara revelam a herança cultural do arquipélago.",
    "story": "Zanzibar mistura paisagens do Índico e uma história ligada a rotas comerciais. Visitar a cidade antiga e conhecer comunidades locais enriquece os dias de praia.",
    "bestSeason": "Junho a outubro e janeiro a fevereiro",
    "duration": "5–7 dias",
    "mood": "Praias, história e cultura",
    "highlights": [
      "Explore Stone Town e sua arquitetura",
      "Conheça mercados e tradições locais",
      "Reserve dias para praias e paisagens costeiras"
    ]
  },
  {
    "id": "serengeti",
    "name": "Serengeti",
    "short": "Serengeti",
    "country": "Tanzânia",
    "region": "África",
    "kind": "Vida selvagem & savana",
    "wikiTitle": "Serengeti",
    "tagline": "A savana em escala grandiosa.",
    "lead": "Planícies, acácias e animais selvagens compõem uma das paisagens mais emblemáticas da África.",
    "story": "O Serengeti é um ecossistema vasto, com diferentes experiências conforme a época do ano. Safáris responsáveis permitem observar a vida selvagem com distância e respeito.",
    "bestSeason": "Junho a outubro para clima mais seco; migração varia",
    "duration": "3–5 dias",
    "mood": "Conservação, savana e natureza",
    "highlights": [
      "Explore o parque com guias credenciados",
      "Observe paisagens e fauna à distância segura",
      "Conheça iniciativas de conservação local"
    ]
  },
  {
    "id": "cataratas-vitoria",
    "name": "Cataratas Vitória",
    "short": "Cataratas Vitória",
    "country": "Zâmbia & Zimbábue",
    "region": "África",
    "kind": "Cachoeiras & natureza",
    "wikiTitle": "Victoria Falls",
    "tagline": "O vapor encontra o céu.",
    "lead": "Uma das grandes cortinas de água do mundo transforma o horizonte em névoa.",
    "story": "As Cataratas Vitória, chamadas localmente de Mosi-oa-Tunya, impressionam pela força e pelo som. Passarelas e mirantes oferecem diferentes perspectivas conforme a cheia dos rios.",
    "bestSeason": "Fevereiro a maio para maior volume de água; outras épocas para visibilidade",
    "duration": "2–4 dias",
    "mood": "Água, natureza e mirantes",
    "highlights": [
      "Observe as quedas em mirantes autorizados",
      "Conheça os caminhos e áreas protegidas",
      "Explore a região com respeito às condições da água"
    ]
  },
  {
    "id": "sydney",
    "name": "Sydney",
    "short": "Sydney",
    "country": "Austrália",
    "region": "Oceania",
    "kind": "Litoral & cidade",
    "wikiTitle": "Sydney",
    "tagline": "O mar faz parte da cidade.",
    "lead": "Praias, baías e arquitetura contemporânea compõem uma das paisagens urbanas mais reconhecíveis da Oceania.",
    "story": "Sydney combina vida cultural e atividades ao ar livre. Caminhos costeiros, parques e uma baía movimentada criam inúmeras perspectivas da cidade.",
    "bestSeason": "Setembro a novembro e março a maio",
    "duration": "4–6 dias",
    "mood": "Praias, arquitetura e cultura",
    "highlights": [
      "Veja a Sydney Opera House e a baía",
      "Caminhe pelos caminhos costeiros",
      "Explore bairros e parques da cidade"
    ]
  },
  {
    "id": "queenstown",
    "name": "Queenstown",
    "short": "Queenstown",
    "country": "Nova Zelândia",
    "region": "Oceania",
    "kind": "Lagos & montanhas",
    "wikiTitle": "Queenstown, New Zealand",
    "tagline": "O horizonte sempre chama.",
    "lead": "Lagos profundos e picos alpinos cercam uma pequena cidade de paisagens grandiosas.",
    "story": "Queenstown oferece uma relação próxima com a natureza em todas as estações. Passeios panorâmicos, vilarejos e trilhas leves mostram o lado contemplativo da região.",
    "bestSeason": "Dezembro a março para clima mais quente; junho a agosto para inverno",
    "duration": "4–6 dias",
    "mood": "Montanhas, lagos e paisagens",
    "highlights": [
      "Caminhe às margens do Lake Wakatipu",
      "Explore mirantes e trilhas adequadas ao clima",
      "Conheça vilarejos e cenários da região"
    ]
  },
  {
    "id": "bora-bora",
    "name": "Bora Bora",
    "short": "Bora Bora",
    "country": "Polinésia Francesa",
    "region": "Oceania",
    "kind": "Ilhas & lagunas",
    "wikiTitle": "Bora Bora",
    "tagline": "Um sonho desenhado em azul.",
    "lead": "Montanhas verdes emergem de uma laguna cristalina cercada por recifes.",
    "story": "Bora Bora se destaca pela paisagem vulcânica e pelo contraste entre água, areia e vegetação tropical. É um destino que combina contemplação, cultura local e respeito ao ecossistema marinho.",
    "bestSeason": "Maio a outubro, período em geral menos chuvoso",
    "duration": "4–6 dias",
    "mood": "Lagunas, natureza e tranquilidade",
    "highlights": [
      "Contemple a laguna e o Monte Otemanu",
      "Conheça a cultura das comunidades locais",
      "Observe os recifes com orientação responsável"
    ]
  }
];


// Expansão editorial: 44 destinos. Imagens são enriquecidas em tempo de execução
// pela API pública da Wikimedia, com arte vetorial como fallback acessível.
const palette = {
  'América do Sul': ['#c98c6e','#243f41','#eed5a8'],
  'América do Norte': ['#637f91','#223a4a','#b7d5ce'],
  'América Central & Caribe': ['#5c9a9a','#174958','#e1c895'],
  'Europa': ['#aeb8ad','#394952','#e8ceaa'],
  'Ásia': ['#d0a181','#544d61','#ead0a7'],
  'África': ['#cb9062','#6b5146','#e6bf8d'],
  'Oceania': ['#76b1ad','#275765','#f2e6cb'],
};

export function illustratedFallback(name, region) {
  const [sky, hills, sun] = palette[region] || palette['Europa'];
  const label = String(name).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="950" viewBox="0 0 1400 950"><defs><linearGradient id="g" x2="0" y2="1"><stop stop-color="${sky}"/><stop offset="1" stop-color="${hills}"/></linearGradient></defs><rect width="1400" height="950" fill="url(#g)"/><circle cx="1090" cy="245" r="118" fill="${sun}" opacity=".55"/><path d="M0 690Q215 425 405 635T855 590T1400 570V950H0Z" fill="${hills}" opacity=".42"/><path d="M0 820Q250 675 505 790T1030 710T1400 745V950H0Z" fill="${hills}" opacity=".58"/><text x="84" y="855" font-family="Georgia,serif" font-size="74" fill="#ffffff" opacity=".83">${label}</text><text x="87" y="905" font-family="Arial,sans-serif" font-size="20" letter-spacing="8" fill="#ffffff" opacity=".72">AURA · DESTINATION JOURNAL</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const extendedDestinations = FULL_DESTINATION_DATA.map((d, index) => {
  const illustration = illustratedFallback(d.name, d.region);
  const featuredSalvador = d.id === 'salvador';
  const salvadorPhoto = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Historic_Centre_of_Salvador_de_Bahia_Aerial_View_2021-0915.jpg/1280px-Historic_Centre_of_Salvador_de_Bahia_Aerial_View_2021-0915.jpg';
  const originalPhoto = featuredSalvador ? salvadorPhoto : illustration;
  const [first, second, third] = d.highlights;
  return {
    ...d,
    number: String(index + 7).padStart(2,'0'),
    hero: originalPhoto,
    card: originalPhoto,
    gallery: [originalPhoto, illustration, illustration],
    ...(featuredSalvador ? { galleryQuery: 'Salvador Bahia Pelourinho', photoCredit: {
      credit: 'Paul R. Burley', license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Historic_Centre_of_Salvador_de_Bahia_Aerial_View_2021-0915.jpg',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
    } } : {}),
    quote: `O mundo se revela nos lugares que escolhemos conhecer. ${d.tagline}`,
    days: [
      { title: 'Primeiras descobertas', text: `Comece pelo essencial: ${first.charAt(0).toLowerCase()}${first.slice(1)}. Reserve tempo para observar detalhes e absorver o ritmo local.` },
      { title: 'Um novo olhar', text: `No segundo dia, ${second.charAt(0).toLowerCase()}${second.slice(1)}. Combine a experiência com pausas e pequenos achados pelo caminho.` },
      { title: 'Para guardar na memória', text: `Termine o percurso com tempo para ${third.charAt(0).toLowerCase()}${third.slice(1)}. Deixe espaço para descobertas espontâneas.` },
    ],
  };
});

export const destinations = [...classicDestinations, ...extendedDestinations];
export const byId = (id) => destinations.find((destination) => destination.id === id);
export const regions = ['Todos', 'América do Sul', 'América do Norte', 'América Central & Caribe', 'Europa', 'Ásia', 'África', 'Oceania'];
