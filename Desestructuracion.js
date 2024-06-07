//desestruturacion
const persona = {
    nombre : 'Jhamil',
    apellido : 'Rocha',
    poder : 'Dormir',
    vivo : true,
    getNombre: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}
const {nombre, apellido, poder} = persona;
console.log('Nombre :'+nombre);
console.log('Apellido :'+apellido);
console.log('Poder :'+poder);