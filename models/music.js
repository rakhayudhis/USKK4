module.exports = (sequlize, Sequlize) => {
    const Music = sequlize.define('music', {
        foto:{
            type: Sequlize.STRING,
        },
        provinsi: {
            type: Sequlize.STRING,
        },
        judul: {
            type: Sequlize.STRING,
        },
        gambar: {
            type: Sequlize.STRING,
        },
        music: {
            type: Sequlize.TEXT,
        },
        lirik: {
            type: Sequlize.TEXT,
        },
        pencipta:{
            type: Sequlize.TEXT
        }
    });
    return Music;
}