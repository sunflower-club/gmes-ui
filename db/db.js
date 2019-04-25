import mongoose  from 'mongoose';

let count = 0;
const  DB_URL = 'mongodb://admin:zyz@10.86.130.26:27017/doc?authSource=admin';
//const  DB_URL = 'mongodb://localhost:27017/doc';
function start(){
	mongoose.connect(DB_URL,{useMongoClient:true});
}

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open to' + DB_URL);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
    console.log('Forthcoming reconnection');
    count++
    if(count < 5){
    	setTimeout(()=>{
    		start()
   	 	},2000)	
    }
});


mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
});

start()

export default mongoose
