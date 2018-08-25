'use strict',

const Sequelize = require('sequelize')

module.exports =
    class User extends Sequelize.Model {
        static init(sequelize, DataTypes) {
            return super.init({
                email: {
                    type: DataTypes.String,
                    unique: true
                },
                password: DataType.String
            }, {sequelize}
            );
        }
    }
