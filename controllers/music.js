const db = require("../models")
const Music = db.musical;


// Menambahkan Materi
exports.create = async(req, res) => {
    try {
        const data = await Music.create(req.body)
        res.json({
            message: "Music telah ditambahkan.",
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
        const music = await Music.findAll()
        res.json({
            message: "Music berhasil ditampilkan",
            data: music,
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
        const music = await Music.findByPk(id, { rejectOnEmpty: true})
        music.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Music berhasil diubah",
            data: music,
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
        const music = await Music.findByPk(id, {rejectOnEmpty: true})

        music.destroy()

        res.json({
            message: "Music berhasil dihapus"
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
        const music = await Music.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Music berhasil di ambil dengan id=${id}.`,
            data: music,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error coba lagi",
            data: null, 
        });
    }
};