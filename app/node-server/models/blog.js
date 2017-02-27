import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const blogSchema = new Schema({
  title: {type: String, require: true}, 
  img: {type: String, require: true}, 
  dateAdded: { type: 'Date', default: Date.now, required: true }, 
  data: {type: Array, require: true}
}); 

export default mongoose.model('Blog', blogSchema); 
