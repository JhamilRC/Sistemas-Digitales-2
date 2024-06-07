 const empleados = [
    {
        id : 1,
        nombre: 'Luser'
    },
    {
        id : 2,
        nombre: 'Ricardo'
    },
    {
        id : 3,
        nombre: 'Jose'
    }
]

 //console.log(empleados [0])
const getEmpleado = (id) =>{
    return new Promise((resolve , reject)=>{
        const empleado = empleados.find(e => e.id === id)?.nombre;
            (empleado)
            ? resolve (empleado)
            : reject(`No existe con id ${ id }`)
    });
}
const id = 3;

getEmpleado (id) 
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));
