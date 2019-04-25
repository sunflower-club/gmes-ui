import mongoose from'../db';
const Schema = mongoose.Schema;
const ServicecodeSchema = new Schema({
		  SITECODE: {type: Number},
		  CODE:{type: String},
          NAME : {type: String},
          SERVICECONFIG  : {type: String}
      });

export default mongoose.model('Servicecode',ServicecodeSchema)