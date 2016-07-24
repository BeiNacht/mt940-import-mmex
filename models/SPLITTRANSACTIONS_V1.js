/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SPLITTRANSACTIONS_V1', {
		SPLITTRANSID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		TRANSID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: undefined
		},
		CATEGID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined
		},
		SUBCATEGID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined
		},
		SPLITTRANSAMOUNT: {
			type: 'numeric',
			allowNull: true,
			defaultValue: undefined
		}
	}, {
		tableName: 'SPLITTRANSACTIONS_V1'
	});
};
