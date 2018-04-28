const {models} = require("../models"); // Este es el modelo de datos, que exporta sequelize

// Exporto la funcion index, que tiene todas las preguntas. es un middleware
exports.index = (req, res, next) => {

    models.quiz.findAll() // Array con todos los quizzes
        .then(quizzes => {

            // Devuelvo la pagina con un render.
            // El render tiene:
            // 1er param -> nombre del fichero (quizzes.js) del directorio Views, las preguntas son un hueco que yo completo
            // 2do param -> array con los quizzes, que es la variable que le paso para rellenar los huecos
            //              se pasa como variable: valor. Como solo hay una variable, le digo que la variable es quizzes y su valor es el array que he sacado, que tambien se llama quizzes
            //              es decir: quizzes: quizzes
            res.render("quizzes", {quizzes})

        })
        .catch(error => next(error)); // Se soluciona con los middlewares (app.js). Si al next le paso paramentro, se salta todos los mw y se va al final que es el de los errores

}