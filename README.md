# Comandos para Persistencia de MongoDB

## 1. Añadir la ip de consumo

Añadir la ip de consumo en el archivo mongod.conf (bindIp), este se encuentra alojado en el directorio mongo-conf

## 1. Otorgar permisos a carpeta de directorio MONGODB

sudo chown -R 1000:1000 MDMQ_MONGO_DB

## 2. Subir contenedor

Ejecutar docker-compose up --build -d (Correrá en el puerto 6400)
