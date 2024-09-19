# Etapa 1: Construir a aplicação Angular
FROM node:18.19.0 AS build
# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json para o container
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todo o código da aplicação para o container
COPY . .

# Gerar o build da aplicação
RUN npm run build

# Etapa 2: Configurar o servidor Nginx para servir a aplicação Angular
FROM nginx:1.21.6-alpine

# Copiar o build da aplicação Angular para o diretório padrão do Nginx
COPY --from=build /app/dist/industria-digital /usr/share/nginx/html

# Copiar o arquivo de configuração customizado para o Nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expor a porta 80 para o tráfego HTTP
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
