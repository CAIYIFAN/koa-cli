const sequelize = require('../sequelize');
const Sequelize = require('sequelize');

const toDoList = sequelize.define('toDoList',{
    key: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: Sequelize.STRING,
    },
    label: {
        type: Sequelize.STRING,
    },
    des: {
        type: Sequelize.STRING,
    },
    fromDate: {
        type: Sequelize.STRING,
    },
    toDate:{
        type: Sequelize.STRING,
    }
},{freezeTableName: true})

module.exports = toDoList;
