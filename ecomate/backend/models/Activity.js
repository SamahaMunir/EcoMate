import mongoose from 'mongoose'
import seq from 'mongoose-sequence';

const AutoIncrement = seq(mongoose);

const activitySchema = new mongoose.Schema({
  user: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'User',
      required: true 
},
  type: {
     type: String,
    required: true 
}, // "transport", "energy", "diet", "positive"
  description: String,
  carbonImpactKg: Number, // positive or negative
  date: { 
     type: Date,
     default: Date.now 
}
},{ timestamps: true });

activitySchema.plugin(AutoIncrement, {
  inc_field: 'activityId'
});

export default mongoose.model('Activity', activitySchema);
