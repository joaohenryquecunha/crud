const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', 'jhsc2012', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
