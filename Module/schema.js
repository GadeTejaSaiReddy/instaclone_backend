const mongoose= require("mongoose")

// mongoose.connect("")
mongoose.connect("mongodb+srv://Insta7473:Sai7473@cluster0.9jgqjfa.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Sucessfully connected with Database")
})
.catch((error)=>{
    console.log(error)
})

const schema = mongoose.Schema
const userSchema= new schema({
    image:{type:String},
    name:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String}
})
const Instaassignment=mongoose.model("instaUser",userSchema)

module.exports=Instaassignment