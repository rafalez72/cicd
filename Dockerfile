FROM node:20-alpine
WORKDIR /app

# Sin dependencias externas: se usa el runner de test nativo de Node.
COPY package*.json ./
COPY . .

EXPOSE 3000
CMD ["node", "src/server.js"]
