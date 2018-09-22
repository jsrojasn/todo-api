const {mongoose} = require("./../server/db/mongoose")
const {Todo} = require("./../server/models/todo")
const {User}=require("./../server/models/user")
const {ObjectId} = require("mongodb")

Todo.remove({}).then((result)=>{
    console.log(result)
})

Todo.findByIdAndRemove("5ba6ac72f75aa9ba211f09eb").then((todo)=>{
    console.log(todo)
})