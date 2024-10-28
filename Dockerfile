# Usar a imagem do Node.js 12.11.1 como base
FROM node:12.11.1 AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Construir o aplicativo Angular
RUN npm run build --prod

# Usar uma imagem leve do Nginx para servir o app
FROM nginx:alpine

# Copiar os arquivos de build para o Nginx
COPY --from=build /app/dist/listaTarefas /usr/share/nginx/html

# Expor a porta
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
