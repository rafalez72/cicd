FROM node:20-alpine

# Carpeta de trabajo dentro del contenedor.
WORKDIR /app

# Copiamos el código
COPY . .

EXPOSE 3000

# Comando que se ejecuta al arrancar el contenedor: levanta el servidor web.
CMD ["node", "src/server.js"]
