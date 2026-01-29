import { Request, Response } from 'express';
import pedido from '../models/Pedido';
import Producto from '../models/Producto';
import cliente from '../models/Cliente';

//hacemos un get igual que el de clientes pero para pedidos
export const obtenerPedidos = async (req: Request, res: Response) => {

    const pedidos = await pedido.findAll();
    res.json(pedidos);

};

// Obtener pedidos por cliente ID
export const obtenerPedidosPorclientes = async (req: Request, res: Response) => {
    //recogemos el cliente_id que nos llega por parametros
    const {cliente_id} = req.params;

    //buscamos los pedidos que tengan ese cliente_id
    const pedidos = await pedido.findAll({
        where: { cliente_id},
        include: [
            { model: cliente }
        ]
    });

    //si no hay pedidos para ese cliente le enviamos un mensaje de error
    if (pedidos.length === 0) {
        return res.status(404).json({error: 'No se encontraron pedidos para este cliente'});
    }

    //si los encuentra se los enviamos en formato json
    res.json(pedidos);
}




// Obtener pedidos por fecha
export const obtenerPedidosPorFecha = async (req: Request, res: Response) => {
    // recogemos la fecha que llega por parámetros
    const { fecha } = req.params;

    // buscamos los pedidos que tengan esa fecha
    const pedidos = await pedido.findAll({
        where: { fecha },
        include: [
            { model: cliente }
        ]
    });

    // si no hay pedidos para esa fecha
    if (pedidos.length === 0) {
        return res.status(404).json({ error: 'No se encontraron pedidos para esta fecha' });
    }

    // si existen, los devolvemos
    res.json(pedidos);
};



