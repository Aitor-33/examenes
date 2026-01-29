import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Producto extends Model {
    public id!: number;
    public nombre!: string;
    public precio!: number;
    public stock!: number;
}

Producto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.DECIMAL(8, 2),
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        tableName: 'productos',
        timestamps: false, //esto hay que ponerlo si en la base de datos no tienes el updated at y created at
    }
);

export default Producto;
