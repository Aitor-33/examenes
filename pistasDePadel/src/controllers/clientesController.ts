import { Request, Response } from 'express';
import cliente from '../models/Cliente';


// Obtener todos los clientes
export const obtenerClientes = async (req: Request, res: Response) => {
//creamos una constante que lo que guarda es un findall de cliente
    const usuarios = await cliente.findAll();
    //y aqui le decimos que nos lo envie en formato json para el postman
    res.json(usuarios);

};

// Obtener un cliente por ID
export const obtenerClientesPorId = async (req: Request, res: Response) => {

    //recogemos el id que nops llega por parametros y lo convertimos a numero
    const id = Number(req.params.id);

    //buscamos el cliente por su primarykey que en este caso es el id
    const clienteEncontrado = await cliente.findByPk(id);

    //si no lo encuentra le enviamos un mensaje de error
    if (!clienteEncontrado) {
        return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }

    //si lo encuentra le enviamos el cliente encontrado en formato json
    res.json(clienteEncontrado);

};

// Crear un nuevo cliente
export const crearCliente = async (req: Request, res: Response) => {

    //hacemos las variuables que nos llegan por el body
    const { nombre, email } = req.body;

    //hacemos una constante que crea un nuevo cliente con los datos que le llegan por el body
    const nuevoCliente = await cliente.create({ nombre, email });

    //y le decimos que nos lo envie en formato json para el postman
    res.status(201).json(nuevoCliente);

};

// Eliminar un cliente
export const eliminarCliente = async (req: Request, res: Response) => {

    //recogemos el id que nops llega por parametros y lo convertimos a numero
    const id  = Number(req.params.id);

    //buscamos el cliente por su primarykey que en este caso es el id
    const clienteEncontrado = await cliente.findByPk(id);

    //si no lo encuentra le enviamos un mensaje de error
    if (!clienteEncontrado) {
        return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }

    //si lo encuentra lo eliminamos
    await clienteEncontrado.destroy();

    //y le decimos que el cliente ha sido eliminado correctamente
    res.json({ mensaje: 'Cliente eliminado correctamente' });
};

// Actualizar un cliente
export const actualizarCliente = async (req: Request, res: Response) => {

    //hacemos una constante con los datos del cliente que queremos actualizar
    //y la damos el valor de lo que nos llega por el body
    const { nombre, email } = req.body;

    //hacemos una constante a la cual le damos el valor de la actualizacion del cliente
    const clienteActualizado = await cliente.update({ nombre, email }, { where: { id: req.params.id } });

    //y le decimos que nos lo envie en formato json para el postmany
    res.status(201).json(clienteActualizado);

};
