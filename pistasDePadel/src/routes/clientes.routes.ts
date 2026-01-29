import { obtenerClientes, crearCliente, eliminarCliente, obtenerClientesPorId, actualizarCliente } from './../controllers/clientesController';
import { Router } from 'express';

const router = Router();

// Definición de rutas para clientes
router.get('/clientes', obtenerClientes);
router.post('/clientes', crearCliente);
router.delete('/clientes/:id', eliminarCliente);
router.get('/clientes/:id', obtenerClientesPorId);
router.put('/clientes/:id', actualizarCliente);

export default router;
