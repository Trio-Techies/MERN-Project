const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDB = async()=> {
    try{
        const conn = await mongoose.connect("mongodb+srv://yagyesh_dubey:yagyesh_dubey@cluster0.ptwitcr.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Mongodb connected: ${conn.connection.host}`);
    } catch(error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports=connectDB;