import { Router } from 'express';
import { obtenerPedidosPorclientes,  obtenerPedidos, obtenerPedidosPorFecha} from '../controllers/pedidoController';

const router = Router();


router.get('/pedidos', obtenerPedidos);

router.get('/pedidos/clientes/:cliente_id', obtenerPedidosPorclientes);

router.get('/pedidos/fecha/:fecha', obtenerPedidosPorFecha);

export default router;
