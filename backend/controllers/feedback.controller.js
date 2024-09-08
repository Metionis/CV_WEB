import { Feed } from '../model/feedBack.model.js';

export const feedBack = async (req, res) => {
  try {
    const { name, comment } = req.body;
    const newFeedback = new Feed({ name, comment });
    await newFeedback.save();
    res.status(201).json({ success: true, message: 'Feedback saved successfully!' });
  } catch (error) {
    console.error("Error saving feedback:", error); // Log error to the console for debugging
    res.status(500).json({ success: false, message: 'Error saving feedback', error });
  }
};
