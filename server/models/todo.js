const mongoose = require("mongoose")

const Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})
// const anotherTodo = new Todo({
//     text: " Edit this video   " 
// })
// anotherTodo.save().then((doc)=>{
//     console.log("Save todo", doc)
// },(e)=>{
//     console.log("Unable to save todo",e)
// })

module.exports = {Todo}
