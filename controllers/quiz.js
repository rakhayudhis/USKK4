const res = require("express/lib/response");
const { json } = require("sequelize");
const db = require("../models");
const quiz = require("../models/quiz");
const Quiz = db.quizzes;

// CREATE : Menambah data ke tabel quiz
exports.create = async (req, res) => {

    try{
        const data = await Quiz.create(req.body)
        res.json({
            message: "Quiz crate succesfully.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message:error.message,
            data:null
        });
    }
}

// READ menampilkan semua data tabel quiz
exports.getAll = async(req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quiz retrieved succesfully.",
            data: quizzes,
        });
    } catch (error) {
        res.status(500).json({
            message:error.message,
            data:null
        });
    }
}

// UPDATE menggubah data sesuai id 
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quiz update succesfully.",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error accurred while retrieving quiz",
            data: null
        });
    }
}

// Menghapus data sesuai id DELETE
exports.delete = async (req, res)=> {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty:true })
         
        quiz.destroy()

        res.json({
            message: "Quiz deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error accurred while retrieving quiz",
            data: null
        });
    }
}

//mengambil data sesuai id yang dikirimkan
exports.findOne = async (req, res)=> {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty:true })
        res.json({
            message: "Quiz retrieved successfully with id=${id}.",
            data: quiz
        });
    }  catch (error) {
        res.status(500).json({
            message: error.message || "Some error accurred while retrieving quiz",
            data: null
        }); 
    }     
}

// menampilkan semua data quiz berdasarkan category tertentu
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            categoryId: id
        }
    })
    res.json({
        message: 'Quizzes retrieved successfully with categoryId=${id}.',
        data: quizzes
    });
}

//menampikan semua data quiz berdasarkan level tertentu
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            levelId:id
        }
    })
    res.json({
        message: 'Quizzes retrieved successfully with levelId=${id}.',
        data: quizzes,
    });
}