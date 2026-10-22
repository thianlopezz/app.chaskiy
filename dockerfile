# ---------- Etapa 1: build ----------
# Angular 16 oficialmente pide Node ^16.14 || ^18.10, pero ambas versiones ya no reciben parches de seguridad.
# Compilar con Node 24 genera exactamente el mismo /dist (mismos hashes) que con Node 18.
# Esta etapa no se publica: solo sirve para generar /dist
FROM node:24-alpine AS build
# Defino el directorio en donde se va a ejecutar mi configuración dentro del contenedor
WORKDIR /home/app.chaskiy

# Copio package.json y package-lock.json
COPY ./package.json ./package-lock.json ./

# Instalo exactamente las versiones del lockfile (incluye los parches de seguridad)
RUN npm ci --no-audit --no-fund

# Copio fuente para compilar
COPY . .

# Build
RUN npm run build

# ---------- Etapa 2: runtime ----------
# El servidor (server/index.js) solo usa módulos nativos de node, así que la imagen final
# no necesita node_modules del proyecto. Usamos una versión LTS de Node con soporte de seguridad.
FROM node:24-alpine
WORKDIR /home/app.chaskiy

# instalo pm2 de forma global
RUN npm install pm2 -g --no-audit --no-fund

# Copio la configuracion de mi servidor en node, la configuracion para pm2 y el build
COPY ./server ./server
COPY ./ecosystem.config.example.js ./ecosystem.config.js
COPY --from=build /home/app.chaskiy/dist ./dist

# Esta configuración hace que el puerto en donde voy a alojar mi aplicación pueda ser accedido
EXPOSE 3001

# Por último configuro los comandos que se van a ejecutar para poner arriba nuesra app
CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
