import mongoose from 'mongoose'

const AutoIncrement = mongooseSequence(mongoose);

const userSchema = new mongoose.Schema({
 email: { 
    type: String, 
    required: true, 
    unique: true
 },
  password: { 
    type: String,
    required: true 
}, // hashed
  name: { 
    type: String,
    required: true
},
  oauthProvider: {
     type: String 
}, // e.g., "google", "facebook"
  profile: {
    age: Number,
    location: String,
    preferences: {
      diet: String, // e.g., vegan, vegetarian, omnivore
      transportPreference: String, // e.g., bike, car, public
    }
},
  goals: {
    carbonReductionKg: Number,
    deadline: Date
},
  dashboard: {
    totalEmissions: { type: Number, default: 0 }, // in kg CO2
    progress: { type: Number, default: 0 } // % towards goal
  }
}, { timestamps: true });


export default mongoose.model('User', userSchema)
