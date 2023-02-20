const mongoose = require('mongoose');

export const connectToDatabase = async () =>{
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.gbmtnno.mongodb.net/blogWebsite`,
    (error)=>{
      if(error){
        return console.log('error to connect to MongoDB: ', error);
      } else {
        return console.log('Connected Successfully!');
      }
  })
}

export const helloWorld = () =>{
    return console.log('Hello World!');
};
