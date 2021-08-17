'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
    foodType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foodName: {
        type: DataTypes.STRING,
    },
});

module.exports = Food;