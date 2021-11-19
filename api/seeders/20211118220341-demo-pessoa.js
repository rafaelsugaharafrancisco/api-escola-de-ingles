'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Pessoas', [
			{
				nome: 'Ana Souza',
				ativo: true,
				email: 'ana@ana.com',
				funcao: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				ativo: true,
				email: 'marcos@marcos.com',
				funcao: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				ativo: true,
				email: 'felipe@felipe.com',
				funcao: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				ativo: false,
				email: 'sandra@sandra.com',
				funcao: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				ativo: true,
				email: 'paula@paula.com',
				funcao: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				ativo: true,
				email: 'sergio@sergio.com',
				funcao: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			}
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
