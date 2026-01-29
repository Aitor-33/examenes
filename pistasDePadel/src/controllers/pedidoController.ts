import { Request, Response } from 'express';
import pedido from '../models/Pedido';
import Producto from '../models/Producto';
import cliente from '../models/Cliente';

export const obtenerPedidos = async (req: Request, res: Response) => {

    const pedidos = await pedido.findAll();
    res.json(pedidos);

};

export const obtenerPedidosPorclientes = async (req: Request, res: Response) => {
    const {cliente_id} = req.params;

    const pedidos = await pedido.findAll({
        where: { cliente_id},
        include: [
            { model: cliente }
        ]
    });

    if (pedidos.length === 0) {
        return res.status(404).json({error: 'No se encontraron pedidos para este cliente'});
    }

    res.json(pedidos);
}

