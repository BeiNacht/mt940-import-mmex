/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('INFOTABLE_V1', {
		INFOID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: undefined,
			primaryKey: true
		},
		INFONAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		INFOVALUE: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		}
	}, {
		tableName: 'INFOTABLE_V1'
	});
};
