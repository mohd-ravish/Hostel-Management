const mongoose=require('mongoose');

module.exports = async ()=>{
  const mongoURI="mongodb+srv://Ravish:BBMtpazuuEinv0Q7@hostelmanagement.syeu1f3.mongodb.net/?retryWrites=true&w=majority";


  try{
    const connect=await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`MongoDB connected: ${connect.connection.host}`);
    }
  catch(error){
    console.log(error);
    process.exit(1);
  }
}