/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('STOCKHISTORY_V1', {
		HISTID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		SYMBOL: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		DATE: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		VALUE: {
			type: 'numeric',
			allowNull: false,
			defaultValue: undefined
		},
		UPDTYPE: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined
		}
	}, {
		tableName: 'STOCKHISTORY_V1'
	});
};
