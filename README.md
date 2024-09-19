
# Indústria Digital

Bem-vindo ao projeto **Indústria Digital**, desenvolvido com a **Angular CLI versão 18.2.0**. Este guia irá ajudá-lo a configurar, desenvolver e construir o projeto em seu ambiente local.

## 🛠️ Como Clonar o Repositório

Para começar, você precisará clonar este repositório para o seu ambiente local. Use o comando abaixo no seu terminal:

```bash
git clone https://tools.ages.pucrs.br/industria-digital/industria-digital-frontend.git
```

## 🚀 Instalando o Angular CLI

Se você ainda não possui o Angular CLI instalado, siga as instruções abaixo. Certifique-se de que o Node.js e o npm estão instalados no seu sistema.

Instale o Angular CLI globalmente usando o npm:

```bash
npm install -g @angular/cli
```

## 📦 Instalando as Dependências

Depois de clonar o repositório, navegue até a pasta do projeto e instale as dependências necessárias:

```bash
npm install
```

Este comando instalará todas as dependências listadas no `package.json`, preparando o ambiente para o desenvolvimento.

## 💻 Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, utilize o comando:

```bash
ng serve
```

Abra seu navegador e navegue até [http://localhost:4200/](http://localhost:4200/). A aplicação será recarregada automaticamente sempre que você alterar qualquer um dos arquivos de origem.

## 🛠️ Criação de Novos Componentes

Para gerar um novo componente, utilize o Angular CLI com o seguinte comando:

```bash
ng generate component nome-do-componente
```

Substitua `nome-do-componente` pelo nome do componente que deseja criar. Este comando criará os arquivos necessários e atualizará automaticamente o módulo principal da aplicação (`app.module.ts`).

## 🏗️ Build

Para construir o projeto para produção, execute:

```bash
ng build
```

Os artefatos de build serão armazenados no diretório `dist/`. Esses arquivos podem ser servidos por qualquer servidor HTTP.

## 🔧 Padrão de Código

Este projeto utiliza o ESLint para garantir a qualidade e consistência do código. Antes de fazer um commit, o código será automaticamente verificado pelo ESLint e formatado conforme as regras definidas. Para verificar manualmente, utilize o comando:

```bash
npm run lint
```

Para formatar o código automaticamente:

```bash
npm run format
```

## ✏️ Padrão de Commit

Estamos utilizando o [Conventional Commits](https://www.conventionalcommits.org/) para mensagens de commit. As mensagens devem seguir o formato:

```
tipo/escopo: Descrição breve
```

Exemplo de mensagem de commit:

```
feat/us-01: Add user authentication feature
```

Tipos de commit permitidos:

- `feat`: Introdução de uma nova funcionalidade
- `fix`: Correção de bugs
- `chore`: Alterações menores ou de manutenção
- `docs`: Alterações na documentação
- `style`: Alterações de estilo (espaços, formatação, etc.)
- `refactor`: Refatorações de código que não alteram funcionalidade
- `test`: Adição ou correção de testes
- `bug-fix`: Correções específicas de bugs

Os commits serão validados automaticamente com base nesse padrão ao serem realizados.

## 🐳 Executando a Aplicação com Docker

Para rodar a aplicação usando Docker, siga os passos abaixo:

1. **Construir a imagem Docker:**

   No diretório onde está o `Dockerfile`, execute:

   ```bash
   docker build -t industria-digital .
   ```

2. **Rodar o container:**

   Depois que a imagem for construída, você pode rodar o container com:

   ```bash
   docker run -p 8080:80 industria-digital
   ```

   Isso fará com que a aplicação Angular esteja disponível no navegador em [http://localhost:8080](http://localhost:8080).

## 🌿 Criando uma Nova Branch

Para criar uma nova branch no Git, siga os passos abaixo:

1. **Navegue até a branch principal (geralmente `main` ou `develop`):**

   ```bash
   git checkout main
   ```

2. **Crie e mude para a nova branch:**

   ```bash
   git checkout -b nome-da-branch
   ```

   Substitua `nome-da-branch` pelo nome desejado para a nova branch. Por exemplo:

   ```bash
   git checkout -b feat/novo-recurso
   ```

   **Nota:** Evite usar caracteres especiais como `:` no nome da branch, pois eles podem causar erros.

## 📚 Ajuda Adicional

Para mais informações sobre como usar o Angular CLI, você pode consultar a documentação oficial. Utilize o comando `ng help` no terminal para obter uma lista de comandos úteis ou acesse a [documentação completa do Angular CLI](https://angular.dev/tools/cli).
