const getAll=()=>{
    return db.query('SELECT * FROM posts')
}
const create=({titulo,descripcion,fecha,categoria,clave})=>{
    return db.query('INSERT INTO posts (titulo,descripcion,fecha,categoria,clave) VALUES (?,?,?,?,?)',
    [titulo,descripcion,fecha,categoria,clave])
}
module.exports={
    getAll,
    create
}