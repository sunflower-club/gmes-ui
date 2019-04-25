import mongoose from'../db';
const Schema = mongoose.Schema;
const ApiSchema = new Schema({
		  token: {type: String},
		  id:{type: Number},
          data : {},
          des  : {type: String},
          date : { type: Date}
      });

export default mongoose.model('Api',ApiSchema)