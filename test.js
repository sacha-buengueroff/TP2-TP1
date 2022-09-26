import {
    leerArchivoComoString, 
    escribirTextoEnArchivo, 
    transformarStringEnArrayDeNumeros, 
    transformarArrayDeNumerosAUnSoloString, 
    combinarDosArrays, 
    combinarNArrays 
} from './index.js'

console.log(leerArchivoComoString("./resources/pruebaLeer.txt"))

try {
    escribirTextoEnArchivo("./outputs/archivo.txt", "Escribo un texto!", false)
}
catch (error) {
    console.log(error.message)
}

escribirTextoEnArchivo("./outputs/archivo.txt", "Escribo un texto!", true)
console.log(leerArchivoComoString("./outputs/archivo.txt"))

escribirTextoEnArchivo("./outputs/archivo.txt", "\nEscribo otro texto!", true)
console.log(leerArchivoComoString("./outputs/archivo.txt"))

console.log(transformarStringEnArrayDeNumeros("123 | 456 | 789 | 1bc | 10", " | "))

console.log(transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ","))

console.log(combinarDosArrays([1, 5, 10], [2, 3, 8, 11]))

console.log(combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]))