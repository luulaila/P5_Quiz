var express = require('express');
var router = express.Router();

const quizController = require("../controllers/quiz.js") // Importo el modelo de datos

// Inicio
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz 2018' }); // Renderiza la pagina index
});

// Lista de Quizzes
router.get('/quizzes', quizController.index); // No pongo los parentesis

// Autores
router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Credits' });
});



module.exports = router;
