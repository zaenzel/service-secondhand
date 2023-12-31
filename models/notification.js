/** @format */

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product, {
        foreignKey: 'product_id',
        as: 'product_notification',
      });
      this.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user_notification',
      });
    }
  }
  notification.init(
    {
      product_id: DataTypes.INTEGER,
      bargain_price: DataTypes.INTEGER,
      action_message: DataTypes.STRING,
      additional_info_1: DataTypes.STRING,
      additional_info_2: DataTypes.STRING,
      is_read: DataTypes.BOOLEAN,
      url: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(
          new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Jakarta',
          })
        ),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(
          new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Jakarta',
          })
        ),
      },
    },
    {
      sequelize,
      modelName: 'notification',
    }
  );
  return notification;
};
