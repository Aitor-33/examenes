import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Cliente extends Model {
    public id!: number;
    public nombre!: string;
    public email!: string;
}

Cliente.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        tableName: 'clientes',
        timestamps: false,//esto hay que ponerlo si en la base de datos no tienes el updated at y created at
    }
);

export default Cliente;
