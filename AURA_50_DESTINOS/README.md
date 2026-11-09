# AURA — The art of going somewhere

Uma experiência editorial de viagens construída em **React + Vite + JavaScript + CSS + GSAP**. O foco é front-end: transições, narrativa visual, navegação entre páginas e interações que funcionam de verdade, sem precisar de back-end.


## Novidades do catálogo AURA / 100 destinos

- **100 destinos no total**, cobrindo 7 regiões geográficas, com busca sem acentos e filtro regional.
- **Salvador (Bahia)** em destaque na home, com fotografia real do Centro Histórico, créditos ao autor e licença CC BY-SA 4.0.
- Mais lugares brasileiros, incluindo Rio de Janeiro, Fernando de Noronha, Lençóis Maranhenses, Cataratas do Iguaçu e Ouro Preto.
- Catálogo progressivo: os resultados são exibidos em lotes de 12, com botão **Descobrir mais lugares**.
- Páginas individuais para todos os 100 destinos, cada uma com descrição própria, três experiências e um roteiro editorial flexível.
- Fotografias vinculadas a arquivos específicos no Wikimedia Commons, com fallback ilustrado por destino quando a fonte estiver indisponível.
- Os favoritos e roteiros já salvos na versão anterior continuam preservados: a chave do `localStorage` não mudou.

## O que funciona

- Home editorial com animação de entrada e parallax com GSAP, incluindo um destaque especial para Salvador, Bahia.
- Página Explorar com busca por texto (inclusive sem acentos), filtros por oito regiões, ordenação e carregamento progressivo de 12 cartões por vez.
- Cem destinos com páginas próprias, histórias, melhor época para visitar, três destaques, galeria ampliável e sugestões de paradas.
- Favoritos persistidos no navegador.
- Planejador com inclusão e remoção de destinos, ordenação, datas e anotações.
- Exportação do roteiro em arquivo `.txt`.
- Navegação responsiva, controles com nomes acessíveis e respeito à preferência por menos movimento.
- Uma versão visual para celular, tablet e desktop.

**Observações:** o roteiro é uma ferramenta demonstrativa de planejamento. Não faz reservas nem consulta preços ou disponibilidade. As recomendações editoriais sobre estações e duração são sugestões gerais que precisam ser conferidas antes de uma viagem real. As imagens do catálogo são vinculadas a arquivos identificados no Wikimedia Commons (sem chave de API), com créditos e links de licença nas páginas. Se a fonte não responder, uma ilustração vetorial aparece no lugar da fotografia. As imagens externas precisam de internet.

## Estrutura

```text
AURA/
├── ABRIR_AURA.bat
├── README.md
├── CREDITOS_IMAGENS.md
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── public/favicon.svg
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── components/
        ├── context/TravelContext.jsx
        ├── data/destinations.js
        ├── pages/
        └── styles/index.css
```


## Crédito

Projeto conceitual para portfólio. Imagens de Unsplash e Wikimedia Commons; veja `CREDITOS_IMAGENS.md` e a [licença da Unsplash](https://unsplash.com/license). Google Fonts: DM Sans e Italiana.

## Expansão — 100 destinos

A versão atual reúne 100 destinos com páginas individuais, busca e filtros regionais, favoritos e roteiros locais. Os dados anteriores continuam usando a mesma chave de armazenamento no navegador (`aura-travel-collection-v1`).

A página **Descubra seu destino** traz um quiz de oito perguntas. As sugestões vêm de uma pontuação transparente baseada em interesses, época indicada, ritmo, custo relativo e tempo disponível. Não existe cálculo de preços em tempo real nem indicação de reservas.

O botão **Deixa a vida me levar** faz um sorteio aleatório entre os destinos do acervo.

Cada página oferece links para Google Maps, Street View quando há um ponto de observação configurado, e Google Earth. O Google pode alterar a disponibilidade das imagens e dos endereços externos.

As épocas de visita são indicativas, contextualizadas por clima e experiência; devem ser confrontadas com informações atualizadas de autoridades locais e serviços meteorológicos antes de qualquer viagem. As durações são sugestões editoriais. Os cartões finais mostram paradas de interesse, sem impor três dias a todos os destinos.

A seção **Por que AURA?** apresenta o significado "Aventuras Únicas, Recordações Atemporais" e a assinatura "Porque nem tudo que passa pela nossa vida vai embora.".

O contato profissional permanece no rodapé. O site não realiza reservas, pagamentos ou coleta dados de conta.

### Fotografias

Os 100 destinos têm uma fonte de imagem predefinida: 99 arquivos selecionados no Wikimedia Commons e a fotografia de Salvador, cujo crédito original foi preservado. O código não executa mais buscas abertas de imagens; faz apenas a consulta dos arquivos selecionados e valida tipo, dimensões e metadados. Se nenhuma foto apropriada for encontrada, é exibida uma ilustração do próprio projeto. Fotos recuperadas externamente dependem da disponibilidade dos provedores e requerem revisão visual e de licença antes de uso comercial.


O projeto utiliza navegação `HashRouter` para funcionar em hospedagens estáticas com caminhos internos.

luanafigueiredo.dev@gmail.com