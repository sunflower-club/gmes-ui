import mongoose from'../db';
const Schema = mongoose.Schema;
const Courseschema = new Schema({
		  course:{type: String},
		  person:{type: String},
          planDate : { type: String},
          time : { type: String},
          date : { type: Date},
          id:{ type: String},
      });

export default mongoose.model('Course',Courseschema)