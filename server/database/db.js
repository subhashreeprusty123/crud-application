import mongoose from "mongoose";


const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-au5lcme-shard-00-00.lurzwtu.mongodb.net:27017,ac-au5lcme-shard-00-01.lurzwtu.mongodb.net:27017,ac-au5lcme-shard-00-02.lurzwtu.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-qoxmgp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database',error);
    }
}

export default Connection;