const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
  creator: String,
  title: String,
  description: String,
  questions: [{
    title: String,
    answerOptions: [String],
    correctOptions: [Number],
  }],
  leaderboard: [{
    email: String,
    score: Number,
  }],
});


const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {
  Quiz
}
