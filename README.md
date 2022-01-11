# Cakes API

Desarrollo de prueba técnica

## Comenzando 🚀

Estas instrucciones te permitirán comenzar a trabajar en el proyecto en tu entorno local.

### Pre-requisitos 📋

Para empezar necesitas un stack basado en node, npm y mariadb.

_Versiones_

node: v14.18.2
npm: 6.14.15
mariadb: 10.6.5

TODO: hay que modificar el dockerfile para definir una versión concreta de mariadb (actualmente latest)

### Instalación Dockerizada 🔧

Para llevar a cabo el desarrolo en máquina local utilizamos un entorno dockerizado que nos permite replicar el stack a utilizar en el resto de entornos. Para poder desplegar el proyecto será necesario llevar a cabo los siguientes pasos

Lo primero es instalar docker

-   [Dropwizard](https://www.docker.com/get-started) - Docker

Después tendrás que hacer git clone del proyecto

```
git clone https://github.com/julioprueba/cakes-api.git
```

Una vez que estés en la raíz del proyecto, lanzamos docker compose.

Primero el build para descargar las imágenes, copiar archivos y descargar dependencias

```
docker-compose build
```

Y después levantamos los contenedores

```
docker-compose up
```

Por defecto arranca el proyecto en el puerto 5000

```
http://localhost:5000
```

TODO: agregar archivo de configuración para definir el puerto

## Dependencias ⚙️

Todas las dependencias utilizadas se encuentran en el archivo "package.json". Las que usaremos tanto en producción como en desarrollo.

```
"dependencies": {
        "body-parser": "^1.19.0",
        "compression": "^1.7.4",
        "errorhandler": "^1.5.1",
        "express": "^4.17.1",
        "express-promise-router": "^4.1.0",
        "express-validator": "^6.12.2",
        "glob": "^7.2.0",
        "helmet": "^4.6.0",
        "node-dependency-injection": "^2.7.1",
        "ts-node": "^10.2.1",
        "typescript": "^4.4.3"
    },
```

body-parser: para la gestión de parametros y respuestas en el protocolo de comunicación http

compression: para optimizar archivos a la hora de transpilar de typescript a javascript

errorhandler: como manejador de errores

express: framework en el que nos basamos

express-promise-router: para manejar rutas basadas en promesas que nos permite reducir código duplicado

express-validator: para gestionar validaciones antes de llegar a la capa de dominio TODO: todavía no implementado

glob: uso de un patrón para extender nuestro código con archivos que cumplen un criterio (ej: route)

helmet: una capa de seguridad basada en el protocolo http

node-dependency-injection: gestor de inyección de dependencias para centralizar la creación de objetos y reducir el acoplammiento

ts-node: motor para ejecutar typescript sin necesidad de precompilar para ganar agilidad en el desarrollo

typescript: lenguaje que aporta tipado y diferentes herramientas compatible con los standares de javascript

```
"devDependencies": {
        "@types/compression": "^1.7.2",
        "@types/cucumber": "^6.0.1",
        "@types/errorhandler": "1.5.0",
        "@types/express": "^4.17.13",
        "@types/glob": "^7.1.4",
        "@types/helmet": "0.0.48",
        "@types/jest": "^27.0.2",
        "@types/node": "^16.10.2",
        "@types/supertest": "^2.0.11",
        "cucumber": "^6.0.5",
        "husky": "^7.0.2",
        "jest": "^27.2.4",
        "lint-staged": "11.2.0",
        "prettier": "^2.4.1",
        "supertest": "^6.1.6",
        "ts-jest": "^27.0.5",
        "ts-node-dev": "^1.1.8",
        "tslint": "^6.1.3",
        "tslint-config-prettier": "~1.18.0",
        "tslint-eslint-rules": "^5.4.0"
    },
```

types: typados de las diferentes dependencias que vamos a utilizar

cucumber: para los test de aceptación basados en otorgar una semantica que tienda un puente entre negocio e IT

jest y supertest: para los test unitarios

husky, tslint y prettier: para declarar las normas de estilo y la automatización de las mismas

## Ejecutando las pruebas ⚙️

Para ejecutar las pruebas que se van programando hemos creado unos comandos en la sección scripts del "package.json" que nos permiten hacer más versatil los diferentes escenarios en función de nuestras necesidades de desarrollo.

(npm run) test, test:features y test:unit -> para ejecutar todas las pruebas o por tipo (BDD, TDD)

## Aplicando normas de estilo ⚙️

También utilizamos comandos personalizados para estas tareas.

lint: para ver cuales de nuestros scripts no cumplen con las normas definidas en nuestros archivos de configuración (tslint.json)

Si quisiramos aplicar las normas de estilo a todos los scripts, desde la raíz del proyecto tenemos que ejecutar el siguiente comando (.prettierrc)

```
npx prettier --write .
```

## Despliegue 📦

Tambien utilizamos compandos personalizados para desplegar en entornos de dev y pro.

dev:app: levanta el servicio en desarrollo en nuestra máquina local (solo la API). En este comando se apoya docker a la hora de levantar el contenedor

build: ejecuta a su vez otros tres comandos que nos generan los archivos transpilados con las configuraciones correspondientes

start:app: una vez construidos los transpilados (build) ejecutamos la API para dar servicio en producción

## Documentación 📦

Para documentar la API utilizamos swagger.

desplegando el archivo de configuración "swagger.yml" en el editor online, se genera una interfaz amigable que documenta la API

-   [Dropwizard](https://swagger.io/tools/swagger-editor/) - Swagger Editor
