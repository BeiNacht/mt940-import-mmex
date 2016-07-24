/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ACCOUNTLIST_V1', {
		ACCOUNTID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		ACCOUNTNAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		ACCOUNTTYPE: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		ACCOUNTNUM: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		STATUS: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		NOTES: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		HELDAT: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		WEBSITE: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		CONTACTINFO: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		ACCESSINFO: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		INITIALBAL: {
			type: 'numeric',
			allowNull: true,
			defaultValue: undefined
		},
		FAVORITEACCT: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		CURRENCYID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: undefined
		}
	}, {
		tableName: 'ACCOUNTLIST_V1',
        timestamps: false
	});
};
