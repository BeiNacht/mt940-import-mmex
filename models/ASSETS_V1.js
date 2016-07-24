/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ASSETS_V1', {
		ASSETID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true
		},
		STARTDATE: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		ASSETNAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		VALUE: {
			type: 'numeric',
			allowNull: true,
			defaultValue: undefined
		},
		VALUECHANGE: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		NOTES: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		VALUECHANGERATE: {
			type: 'numeric',
			allowNull: true,
			defaultValue: undefined
		},
		ASSETTYPE: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		}
	}, {
		tableName: 'ASSETS_V1',
        timestamps: false
	});
};
