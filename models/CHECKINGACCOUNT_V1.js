/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CHECKINGACCOUNT_V1', {
		TRANSID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		ACCOUNTID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: undefined
		},
		TOACCOUNTID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined
		},
		PAYEEID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: undefined
		},
		TRANSCODE: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		TRANSAMOUNT: {
			type: 'numeric',
			allowNull: false,
			defaultValue: undefined
		},
		STATUS: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		TRANSACTIONNUMBER: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		NOTES: {
			type: DataTypes.TEXT,
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
		TRANSDATE: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		FOLLOWUPID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined
		},
		TOTRANSAMOUNT: {
			type: 'numeric',
			allowNull: true,
			defaultValue: undefined
		}
	}, {
		tableName: 'CHECKINGACCOUNT_V1',
        timestamps: false
	});
};
