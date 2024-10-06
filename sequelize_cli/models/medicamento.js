'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Medicamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
      Medicamento.belongsTo(models.Especialidad, {
        foreignKey: 'CodEspecialidad',
        as: 'especialidad'
      });
      
      Medicamento.belongsTo(models.TipoMedicamento, {
        foreignKey: 'CodTipoMed',
        as: 'tipoMedicamento'
      });
    }
  }
  Medicamento.init({
    descripcionMed: DataTypes.STRING,
    fechaFabricacion: DataTypes.DATE,
    fechaVencimiento: DataTypes.DATE,
    presentacion: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precioVentaUni: DataTypes.DECIMAL,
    precioVentaPres: DataTypes.DECIMAL,
    marca: DataTypes.STRING,
    CodTipoMed: DataTypes.INTEGER,
    CodEspecialidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Medicamento',
  });


  return Medicamento;
};