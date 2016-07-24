/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CURRENCYFORMATS_V1', {
		CURRENCYID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		CURRENCYNAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		PFX_SYMBOL: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		SFX_SYMBOL: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		DECIMAL_POINT: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		GROUP_SEPARATOR: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		UNIT_NAME: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		CENT_NAME: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		SCALE: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined
		},
		BASECONVRATE: {
			type: 'numeric',
			allowNull: true,
			defaultValue: undefined
		},
		CURRENCY_SYMBOL: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		}
	}, {
		tableName: 'CURRENCYFORMATS_V1'
	});
};
