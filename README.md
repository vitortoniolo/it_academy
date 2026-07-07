# IT_ACADEMY

Projeto acadêmico de front-end: um site de uma escola fictícia de cursos de tecnologia, construído com **HTML5, CSS3 e JavaScript (jQuery)**, sem frameworks e sem back-end. Todas as páginas são estáticas e a interatividade acontece no navegador.

## Páginas

| Página | Descrição |
|---|---|
| `index.html` | Home com carrossel de destaques, categorias, números da plataforma e cursos em destaque |
| `cursos.html` | Catálogo de cursos com busca por texto e filtro por categoria |
| `detalhes.html` | Página de detalhes de um curso |
| `sobre.html` | Sobre a escola, com acordeão de perguntas frequentes |
| `matricula.html` | Formulário de matrícula com validação de campos em JavaScript |
| `login.html` | Tela de login / cadastro |
| `perfil.html` | Perfil do aluno |
| `checkout.html` | Finalização de compra |

## Funcionalidades

- **Carrossel** no banner da home (biblioteca [Swiper](https://swiperjs.com/)) com autoplay e paginação clicável;
- **Busca e filtros** no catálogo de cursos, mostrando/escondendo cards conforme categoria e texto digitado;
- **Validação do formulário de matrícula**: campos obrigatórios, formato de e-mail, telefone com DDD e aceite dos termos, com mensagens de erro por campo e foco no primeiro campo inválido;
- **Acordeão** de perguntas frequentes na página Sobre;
- **Menu mobile** que abre e fecha pelo botão hambúrguer;
- **Layout responsivo** com Grid, Flexbox e media queries, adaptado para celular, tablet e desktop.

## Estrutura de pastas

```
it_academy/
├── index.html, cursos.html, ...   páginas do site
├── css/
│   ├── estilo.css                 estilos globais (menu, rodapé, componentes)
│   └── <página>.css               estilos específicos de cada página
├── js/
│   ├── menu.js                    menu mobile (todas as páginas)
│   ├── index.js                   carrossel da home
│   ├── cursos.js                  busca e filtros do catálogo
│   ├── matricula.js               validação do formulário
│   └── sobre.js                   acordeão de perguntas frequentes
└── assets/                        imagens do site e capas dos cursos
```

## Tecnologias

- HTML5 semântico (header, nav, section, footer, formulários)
- CSS3: variáveis em Grid, Flexbox, gradientes, sombras, transições, animações e media queries
- JavaScript com jQuery 3.7 
- Swiper 11 para o carrossel
- Fontes Inter e Space Grotesk (Google Fonts)
