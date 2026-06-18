#FROM node:20-alpine
FROM node:20-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

# Comando al arrancar el contenedor
CMD ["node", "src/server.js"]
