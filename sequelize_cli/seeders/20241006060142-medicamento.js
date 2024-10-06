'use strict';

const { Especialidad, TipoMedicamento } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {

    const especialidad = await Especialidad.findOne({ where: { descripcion: 'Cardiología' } });

    const tipomedicamento = await TipoMedicamento.findOne({ where: { descripcion: 'Analgésico' } });

    await queryInterface.bulkInsert('Medicamentos', [{
      descripcionMed: 'Ibuprofeno',
      fechaFabricacion: new Date(2022, 2, 1),
      fechaVencimiento: new Date(2024, 1, 1),
      presentacion: 'Tabletas',
      stock: 80,
      precioVentaUni: 0.50,
      precioVentaPres: 4.50,
      marca: 'Ibumac',
      CodTipoMed: tipomedicamento.id,
      CodEspecialidad: especialidad.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Medicamentos', null, {});
  }
};
