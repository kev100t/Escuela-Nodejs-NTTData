# Escuela-Nodejs-NTTData

# Ejercicio mi-primer-proyecto
Pasos para ejecutar la aplicación:
- Agregar archivo .ENV con los siguientes datos.
```
    PORT=3000
    DB_URI=mongodb+srv://admin:adminntt@cluster0.mxbi1zq.mongodb.net/?retryWrites=true&w=majority
    JWT_SECRET=iOiJIUzI1NiIs
```
- Instalar dependencias
```bash
    $ npm i
```

- Crear y ejecutar la imagen Docker
```bash
    $ docker build -t mi-primer-proyecto .
    $ docker run --rm -p 3000:3000 mi-primer-proyecto:latest
```

# Ejercicio serverless-aws
Pasos para ejecutar la aplicación serverless:
- Instalar dependencias
```bash
    $ npm i
```

- Ejecutar serverless de manera local
```bash
    npm run lambda:offline
```

- Desplegar serverless
```bash
    npm run lambda:online
```

- URL local a consultar:
    - http://localhost:3000/dev/user

# Ejercicio aws-nest-generator-pdf

# Ejercicio aws-generator-pdf