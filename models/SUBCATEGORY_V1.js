/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SUBCATEGORY_V1', {
		SUBCATEGID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		SUBCATEGNAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		CATEGID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: undefined
		}
	}, {
		tableName: 'SUBCATEGORY_V1'
	});
};
