/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('STOCK_V1', {
		STOCKID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		HELDAT: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined
		},
		PURCHASEDATE: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		STOCKNAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		SYMBOL: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		NUMSHARES: {
			type: 'numeric',
			allowNull: true,
			defaultValue: undefined
		},
		PURCHASEPRICE: {
			type: 'numeric',
			allowNull: false,
			defaultValue: undefined
		},
		NOTES: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		CURRENTPRICE: {
			type: 'numeric',
			allowNull: false,
			defaultValue: undefined
		},
		VALUE: {
			type: 'numeric',
			allowNull: true,
			defaultValue: undefined
		},
		COMMISSION: {
			type: 'numeric',
			allowNull: true,
			defaultValue: undefined
		}
	}, {
		tableName: 'STOCK_V1'
	});
};
