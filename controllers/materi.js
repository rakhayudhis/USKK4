const db = require("../models")
const Materi = db.material;


// Menambahkan Materi
exports.create = async(req, res) => {
    try {
        const data = await Materi.create(req.body)
        res.json({
            message: "Materi telah dibuat.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    } finally {
        res.json({
            message: "error, coba lagi"
        })
    }
}

// Menampilkan semua data Materi
exports.getAll = async(req, res) => {
    try {
        const quizzes = await Materi.findAll()
        res.json({
            message: "Materi berhasil ditampilkan",
            data: quizzes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//Mengubah data sesuai id
exports.update = async (req, res)=> {
    const id = req.params.id
    try {
        const Materi = await Materi.findByPk(id, { rejectOnEmpty: true})
        Materi.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Materi berhasil diubah",
            data: Materi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error, kasian deh",
            data: null,
        });
    }
}
//Menghapus data sesuai id 
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const Materi = await Materi.findByPk(id, {rejectOnEmpty: true})

        Materi.destroy()

        res.json({
            message: "Materi berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error, coba lagi",
            data: null,
        });
    }
}

//Menampilkan data by id
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const Materi = await Materi.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Materi berhasil di ambil dengan id=${id}.`,
            data: Materi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error coba lagi",
            data: null, 
        });
    }
};