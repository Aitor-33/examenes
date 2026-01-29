import { Request, Response } from 'express';
import cliente from '../models/Cliente';

export const obtenerClientes = async (req: Request, res: Response) => {

    const usuarios = await cliente.findAll();
    res.json(usuarios);

};

export const obtenerClientesPorId = async (req: Request, res: Response) => {

    const id = Number(req.params.id);

    const clienteEncontrado = await cliente.findByPk(id);

    if (!clienteEncontrado) {
        return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }

    res.json(clienteEncontrado);

};

export const crearCliente = async (req: Request, res: Response) => {

    const { nombre, email } = req.body;

    const nuevoCliente = await cliente.create({ nombre, email });

    res.status(201).json(nuevoCliente);

};

export const eliminarCliente = async (req: Request, res: Response) => {
    const id  = Number(req.params.id);

    const clienteEncontrado = await cliente.findByPk(id);

    if (!clienteEncontrado) {
        return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }

    await clienteEncontrado.destroy();

    res.json({ mensaje: 'Cliente eliminado correctamente' });
};


export const actualizarCliente = async (req: Request, res: Response) => {

    const { nombre, email } = req.body;

    const clienteActualizado = await cliente.update({ nombre, email }, { where: { id: req.params.id } });

    res.status(201).json(clienteActualizado);

};
