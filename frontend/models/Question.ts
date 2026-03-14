import mongoose, { Schema, models } from "mongoose";

const optionSchema = new Schema({
  id: { type: String, required: true },
  text: { type: String, required: true }
});

const questionSchema = new Schema(
  {
    subject: { type: String, required: true },
    text: { type: String, required: true },
    options: [optionSchema],
    correctAnswer: { type: String, required: true },
    explanation: { type: String, required: true }
  },
  { timestamps: true }
);

const Question =
  models.Question || mongoose.model("Question", questionSchema);

export default Question;