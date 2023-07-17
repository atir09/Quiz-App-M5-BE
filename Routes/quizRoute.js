// Importing External Packages

const express=require("express")

// Importing Model

const {Quiz}=require("../Models/QuizModel.js")

// ...............................................................
const QuizRoute =express.Router()



QuizRoute.get('/', async (req, res) => {
    try {
      const quizzes = await Quiz.find();
      res.status(201).send(quizzes);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      res.status(500).send({ msg: 'Internal Server Error' });
    }
  });
  
  QuizRoute.get('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const quiz = await Quiz.findById(id);
      if (!quiz) {
        return res.status(404).send({ msg: 'Quiz not found' });
      }
  
      res.status(201).send(quiz);
    } catch (error) {
      console.error('Error fetching quiz:', error);
      res.status(500).send({ msg: 'Internal Server Error' });

    }
  });
  
  QuizRoute.post('/', async (req, res) => {
    const quizData = req.body;
  
    try {
      const quiz = new Quiz(quizData);
      await quiz.save()
      return res.status(201).send({ msg: 'Quiz Created Successfully' });
    } catch (error) {
      console.error('Error creating quiz:', error);
      res.status(500).send({ msg: 'Internal Server Error' });
    }
  });


  QuizRoute.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {

      const quiz = await Quiz.findByIdAndDelete(id);
  
      return res.status(201).send({ msg: 'Quiz Deleted Successfully' });
    } catch (error) {
      console.error('Error fetching quiz:', error);
      res.status(500).send({ msg: 'Internal Server Error' });

    }
  });



// Update Quiz
QuizRoute.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
  
    try {
      const updatedQuiz = await Quiz.findByIdAndUpdate(
        id,
        { title: title, description: description },
        { new: true }
      );
  
      if (!updatedQuiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
  
      res.json(updatedQuiz);
    } catch (error) {
      console.error('Error updating quiz:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  module.exports={
    QuizRoute   
  }