// const db = require('./db')

// const Post = db.sequelize.define('postagens',{
//     titulo:{
//         type: db.Sequelize.STRING
//     },
//     conteudo:{
//         type: db.Sequelize.TEXT
//     }
// })

// module.exports = Post

// // Post.sync({force: true})

const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const Product = new Schema({
    name: {
        type: String,
        require: true
    },
    descrition: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },

})
mongoose.model("products", Product)