/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ATTACHMENT_V1', {
		ATTACHMENTID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: undefined,
			primaryKey: true
		},
		REFTYPE: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		REFID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: undefined
		},
		DESCRIPTION: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: undefined
		},
		FILENAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		}
	}, {
		tableName: 'ATTACHMENT_V1'
	});
};
