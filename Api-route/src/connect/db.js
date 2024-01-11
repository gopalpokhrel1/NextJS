 const {servername, password}= process.env;

 

export  const connectSrt = "mongodb+srv://"+servername+":"+password+"@cluster0.qsiagrs.mongodb.net/productDB?retryWrites=true&w=majority";
