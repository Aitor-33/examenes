import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Cliente from './Cliente';
import Producto from './Producto';

class Pedido extends Model {
    public id!: number;
    public cliente_id!: number;
    public producto_id!: number;
    public cantidad!: number;
    public fecha!: string;
}

Pedido.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cliente_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'pedidos',
        timestamps: false,//esto hay que ponerlo si en la base de datos no tienes el updated at y created at
    }
);

// Relaciones
Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' });
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });

Producto.hasMany(Pedido, { foreignKey: 'producto_id' });
Pedido.belongsTo(Producto, { foreignKey: 'producto_id' });

export default Pedido;
