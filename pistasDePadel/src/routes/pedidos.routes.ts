import { Router } from 'express';
import { obtenerPedidosPorclientes,  obtenerPedidos} from '../controllers/pedidoController';

const router = Router();


router.get('/pedidos', obtenerPedidos);

router.get('/pedidos/clientes/:cliente_id', obtenerPedidosPorclientes);
export default router;
