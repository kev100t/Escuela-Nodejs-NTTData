# Escuela-Nodejs-NTTData
PORT=3000
DB_URI=mongodb+srv://admin:adminntt@cluster0.mxbi1zq.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=iOiJIUzI1NiIs

docker build -t mi-primer-proyecto .
docker run --rm -p 3000:3000 mi-primer-proyecto:latest