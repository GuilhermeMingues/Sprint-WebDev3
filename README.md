# JOVI — Smartphone Brasil

Transcrição da Landing Page feita em html e css no projeto da matéria de front end para o projeto em React da matéria de Web Dev utilizando tudo que aprendemos durante as aulas, seguindo todas as orientações dadas.

🔗 **Deploy:** [sprint-web-dev3.vercel.app](https://sprint-web-dev3.vercel.app)
🔗 **Repositório:** [github.com/GuilhermeMingues/Sprint-WebDev3](https://github.com/GuilhermeMingues/Sprint-WebDev3)

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- CSS puro, organizado com variáveis seguindo a paleta de cores da marca JOVI
- [ESLint](https://eslint.org/) para padronização de código
- Deploy contínuo via [Vercel](https://vercel.com/)

- Formatação dos códigos com a extensão Format Prettier

## Como instalar as dependências

Com o [Node.js](https://nodejs.org/) instalado, clone o repositório e rode dentro da pasta do projeto:

```bash
npm install
```

## Como executar o projeto

Ambiente de desenvolvimento (com hot reload):

```bash
# npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000) no navegador.

Para gerar a versão de produção localmente:

```bash
npm run build
npm run start
```

## Usuários e senhas de teste

O projeto não possui autenticação. Todas as seções são públicas e não exigem login ou usuário de teste.

## Estrutura do projeto

A aplicação é dividida em componentes funcionais, organizados em `app/components/`, cada um responsável por uma seção da página (Header, Hero, PhoneArea, Solution, Audience, Gallery, Simulator, Team, Contato, Footer). O `app/page.js` atua como componente pai, importando e renderizando cada seção na ordem em que aparecem na página.

### Funcionalidades

- **Simulador de configuração** (seção "Monte o seu JOVI"): o usuário escolhe armazenamento e cor do aparelho e calcula um preço simulado. O cálculo usa `Math.random()` (para gerar um desconto regional simulado entre 5% e 15%) e `Math.round()` (para arredondamento). A última escolha do usuário e um histórico das últimas 5 simulações ficam salvos no `localStorage` do navegador, persistindo entre recarregamentos de página.

## Uso de Inteligência Artificial no projeto

Utilizamos o Claude em ideias no processo criativo como dicas e sugestões na estilização no CSS. Em revisão de erros e organização do projeto e também em explicação de alguns momentos que havia dúvidas referente a alguma funcionalidade. Diante disso o projeto em React foi revisado e feito a mãos.

## Equipe

Os nomes completos e RMs dos integrantes estão no arquivo [`INTEGRANTES.txt`](./INTEGRANTES.txt).
