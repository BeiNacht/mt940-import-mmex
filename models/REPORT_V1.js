/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('REPORT_V1', {
		REPORTID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: undefined,
			primaryKey: true
		},
		REPORTNAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		GROUPNAME: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		SQLCONTENT: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		LUACONTENT: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		TEMPLATECONTENT: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		DESCRIPTION: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		}
	}, {
		tableName: 'REPORT_V1'
	});
};
