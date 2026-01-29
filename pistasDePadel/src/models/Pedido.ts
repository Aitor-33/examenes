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
            type: DataTypes.DATEONLY,//esto debera ser un tipo string en el ts pero en la base de datos es date
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
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });//estas son las relaciones entre tablas

//lo unico que cambiaria aqui es que si en vez de ser una relacion 
Producto.hasMany(Pedido, { foreignKey: 'producto_id' });
Pedido.belongsTo(Producto, { foreignKey: 'producto_id' });

export default Pedido;




//ejemplo de como seria una relacion de uno a uno

// Usuario.hasOne(Perfil, { foreignKey: 'usuario_id' });
// Perfil.belongsTo(Usuario, { foreignKey: 'usuario_id' });


//de uno a muchos

// Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' });
// Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });


//de muchos a muchos


// Estudiante.belongsToMany(Curso, { 
//   through: 'EstudianteCurso',  // Tabla intermedia
//   foreignKey: 'estudiante_id' 
// });

// Curso.belongsToMany(Estudiante, { 
//   through: 'EstudianteCurso',  // Tabla intermedia
//   foreignKey: 'curso_id' 
// });
