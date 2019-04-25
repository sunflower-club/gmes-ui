import mongoose from'../db';
const Schema = mongoose.Schema;
const ScriptSchema = new Schema({
		  str: {type: String},
          date : { type: Date}
      });

export default mongoose.model('Script',ScriptSchema)