/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PAYEE_V1', {
		PAYEEID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: undefined,
			primaryKey: true,
            autoIncrement: true
		},
		PAYEENAME: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: undefined
		},
		CATEGID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 17
		},
		SUBCATEGID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: -1
		}
	}, {
		tableName: 'PAYEE_V1',
        timestamps: false
	});
};
