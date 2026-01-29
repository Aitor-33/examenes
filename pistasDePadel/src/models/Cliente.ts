import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Cliente extends Model {
    public id!: number;
    public nombre!: string;
    public email!: string;
}

Cliente.init(
    {
        id: {//ponemos exactamente los mismos campos que en la base de datos con los mismos nombres
            type: DataTypes.INTEGER,//tipo de dato
            autoIncrement: true,//esto solo si es un campo auto incrementable
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,//esto significa que no puede ser nulo
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,//esto significa que no puede haber dos emails iguales
        },
    },
    {
        sequelize,
        tableName: 'clientes',
        timestamps: false,//esto hay que ponerlo si en la base de datos no tienes el updated at y created at
    }
);

export default Cliente;
