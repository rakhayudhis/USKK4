module.exports = (sequlize, Sequlize) => {
    const Materi = sequlize.define('materi', {
        judul: {
            type: Sequlize.STRING,
        },
        gambar: {
            type: Sequlize.STRING,
        },
        materi: {
            type: Sequlize.TEXT,
        },
    });
    return Materi;
}