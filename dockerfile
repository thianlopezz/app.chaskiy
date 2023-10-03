#Definimos el la version de node que tendrá mi contenedor
FROM node:16.14.2-alpine
# Defino el directorio en donde se va a ejecutar mi configuración dentro del contenedor
WORKDIR /home/app.chaskiy
# Copio la configuracion de mi servidor en node
#  COPY ./server ./server
#  COPY ./build ./build

# Copio package.json y package-lock.json
COPY ./package.json ./package.json
# COPY ./package-lock.json ./package-lock.json

# Instalo las dependencias para hacer el build
RUN npm install -f

# Copio fuente para compilar
COPY . .
# Copio la configuracion para pm2
COPY ./ecosystem.config.example.js ./ecosystem.config.js

# Build
RUN npm run build

RUN ls -l

# instalo pm2 de forma global
RUN npm install pm2 -g

# Esta configuración hace que el puerto en donde voy a alojar mi aplicación pueda ser accedido
EXPOSE 3001

# Por último configuro los comandos que se van a ejecutar para poner arriba nuesra app
CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]

