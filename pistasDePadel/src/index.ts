import express from 'express';
import sequelize from './config/database';

import clientesRoutes from './routes/clientes.routes';
import pedidosRoutes from './routes/pedidos.routes';


const app = express();
app.use(express.json());

// Rutas
app.use('/api', clientesRoutes);
app.use('/api', pedidosRoutes);


// Conexión y arranque
sequelize.sync().then(() => {
  console.log('Base de datos conectada');

  app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
  });
});


//recuerda siempre copiar el ts config y el package json de otro proyecto para no tener errores

//lo primero es hacer el npm init -y para crear el package json

// npm install typescript ts-node nodemon @types/node --save-dev
// npm install express sequelize mysql2 dotenv
// npm install @types/express --save-dev
//npm install dotenv   este hay que ponerle en el archivo database.ts



// para iniciar el proyecto en desarrollo npm run dev