/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CATEGORY_V1', {
		CATEGID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		CATEGNAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		}
	}, {
		tableName: 'CATEGORY_V1'
	});
};
