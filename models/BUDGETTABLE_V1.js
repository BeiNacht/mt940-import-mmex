/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BUDGETTABLE_V1', {
		BUDGETENTRYID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		BUDGETYEARID: {
			type: DataTypes.INTEGER,
			allowNull: true,
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
		PERIOD: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		AMOUNT: {
			type: 'numeric',
			allowNull: false,
			defaultValue: undefined
		}
	}, {
		tableName: 'BUDGETTABLE_V1'
	});
};
