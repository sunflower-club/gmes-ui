import mongoose from'../db';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
          username : { type: String },                    //用户账号
          userpwd: {type: String},                        //密码
          userage: {type: Number},                        //年龄
          logindate : { type: Date}                       //最近登录时间
      });

export default mongoose.model('User',UserSchema)

