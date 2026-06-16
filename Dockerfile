# ───────────────────────────────────────────────────────────────────────────
#  Dockerfile — receta para EMPAQUETAR la app en una imagen de contenedor.
#  La misma imagen se usa para testear, se publica en DockerHub y se despliega.
#  Esto garantiza que "lo que se probó" es EXACTAMENTE "lo que se despliega".
# ───────────────────────────────────────────────────────────────────────────

# Imagen base: Node 20 sobre Alpine (Linux muy liviano). Trae node + npm.
FROM node:20-alpine

# Carpeta de trabajo dentro del contenedor.
WORKDIR /app

# Copiamos primero el package.json (metadatos del proyecto).
# No instalamos dependencias porque la app no usa librerías externas.
COPY package*.json ./

# Copiamos el resto del código (src/ y test/).
COPY . .

# Documenta que la app escucha en el puerto 3000 dentro del contenedor.
EXPOSE 3000

# Comando que se ejecuta al arrancar el contenedor: levanta el servidor web.
CMD ["node", "src/server.js"]
