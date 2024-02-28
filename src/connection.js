require('dotenv').config();
const { MongoClient } = require('mongodb');

// Obtener credenciales desde variables de entorno
const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST, MONGODB_DATABASE } = process.env;

// Construir la URL de conexión
const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}`;

const client = new MongoClient(uri);

async function connection() {
    try {
        // Conectar al servidor de MongoDB
        await client.connect();
        console.log('Conexión exitosa a MongoDB');
        return client.db(); // Devuelve la instancia de la base de datos
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        throw error;
    }
}

module.exports = connection;
