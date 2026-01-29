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
