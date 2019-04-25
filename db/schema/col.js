import mongoose from'../db';
const Schema = mongoose.Schema;
const ColSchema = new Schema({
		  type:{type: Number},
          serviceCode: {type: String},
          domainName: {type: String},
          data : {},
          token : {type: String},
          date : { type: Date}
      });

export default mongoose.model('Col',ColSchema)

