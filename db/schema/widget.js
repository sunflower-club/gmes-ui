import mongoose from'../db';
const Schema = mongoose.Schema;
const WidgetSchema = new Schema({
		  name: {type: String},
		  id: { type: Number},
          data : {},
          date : { type: Date}
      });

export default mongoose.model('Widget',WidgetSchema)