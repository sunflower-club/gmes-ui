import mongoose from'../db';
const Schema = mongoose.Schema;
const Factoryaddresschema = new Schema({
			  name:{type: String},
			  siteCode:{type: String},
        env : { type: String},
        api : { type: String},
        mq : { type: String},
        mqUser : { type: String},
        mqPwd : { type: String},
        date : { type: Date},
        mtUrl: { type: String},
        padUrl: { type: String},
        manageUrl: { type: String},
      });

export default mongoose.model('Address',Factoryaddresschema)