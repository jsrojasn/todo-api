const {mongoose} = require("./../server/db/mongoose")
const {Todo} = require("./../server/models/todo")
const {User}=require("./../server/models/user")
const {ObjectId} = require("mongodb")

// const id = "5ba5ad7e9e6c06cc19acb01d"
// if (!ObjectId.isValid(id)) {
//     console.log("ID not valid")
// }
// // Todo.find({
// //     _id: id
// // }).then((todos)=>{
// //     console.log("Todos",todos)
// // })

// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log("Todo", todo)
// // })

// Todo.findById(id).then((todo)=>{
//     if(!todo) {
//         return console.log("ID not found")
//     }
//     console.log("todo by id", todo)
// }) .catch((e)=>console.log(e))
User.findById("5ba56d2ff22ae2840bb2818d").then((user)=>{
    if (!user) {
        return console.log("User with that id not found")
    }
    console.log("User", user)
}).catch((e)=>console.log(e))