import mongoose from'../db';
const Schema = mongoose.Schema;
const Collectschema = new Schema({
		  type:{type: Number},
		  userText:{type: String},
          data : {},
          date : { type: Date}
      });

export default mongoose.model('Collect',Collectschema)