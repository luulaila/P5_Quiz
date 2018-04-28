//Modelo de datos

const Sequelize = require('sequelize');
const url = "sqlite:quizzes.sqlite";
const sequelize = new Sequelize(url, {
    logging: false
});

sequelize.define('quiz', {
    question: {
        type: Sequelize.STRING,
        validate: {notEmpty: {msg: "La pregunta no puede estar vacía"}}
    },
    answer: {
        type: Sequelize.STRING,
        validate: {notEmpty: {msg: "La respuesta no puede estar vacía"}}
    }
});

sequelize.sync()  // Sincronizar la base de datos
    .then(() => {
        return sequelize.models.quiz.count()
            .then(count => {
                if(!count) {
                    return sequelize.models.quiz.bulkCreate([                   // Inicializo con bulkCreate
                        { question: "Capital de Italia", answer: "Roma" },
                        { question: "Capital de Francia", answer: "París"}, 
                        { question: "Capital de España", answer: "Madrid"}, 
                        { question: "Capital de Portugal", answer: "Lisboa"} 
                ]);
                }
            });
    }).catch(error => {
        console.log(error);
});

module.exports = sequelize; // Importante exportarlo!!

