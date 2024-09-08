import mongoose from "mongoose";

// Define feedback schema
const feedBackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

// Create model based on the schema
export const Feed = mongoose.model("Feed", feedBackSchema);
