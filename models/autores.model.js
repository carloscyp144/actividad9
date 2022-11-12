const getAll=()=>{
    return db.query('SELECT * FROM autores')
}
const getAllById=(Id)=>{
    return db.query('SELECT titulo,descripcion,fecha,categoria,nombre,email FROM posts,autores WHERE posts.clave=? AND autores.idautores=?;',
    [Id,Id])
}
const create=({nombre,email,imagen})=>{
    return db.query('INSERT INTO autores (nombre,email,imagen) VALUES (?,?,?)',
    [nombre,email,imagen])
}
module.exports={
    getAll,
    create,
    getAllById
}