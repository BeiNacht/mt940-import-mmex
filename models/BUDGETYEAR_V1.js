/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BUDGETYEAR_V1', {
		BUDGETYEARID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		BUDGETYEARNAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		}
	}, {
		tableName: 'BUDGETYEAR_V1'
	});
};
