# Etapa 1: Construir a aplicação React
FROM node:18 AS build

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar os arquivos da aplicação para o container
COPY . .

# Construir a aplicação React para produção
RUN npm run build

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:alpine

# Copiar os arquivos de build gerados na etapa anterior para o diretório de Nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf

# Expor a porta 80 (porta do Nginx)
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
