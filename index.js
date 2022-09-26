import fs from 'fs'

export const leerArchivoComoString = function(ruta) {
    return fs.readFileSync(ruta, 'utf-8')
}

export const escribirTextoEnArchivo = function(ruta, texto, flag) {
    if (fs.existsSync(ruta)) {
        fs.appendFileSync(ruta, texto)
    }
    else {
        if (flag) {
            fs.writeFileSync(ruta, texto)
        }
        else {
            throw Error("El archivo no existe")
        }
    }
}

export const transformarStringEnArrayDeNumeros = function(texto, separador) {
    let arrayNumeros = texto.split(separador)
    arrayNumeros = arrayNumeros.map(elemento => elemento.replace(/[^0-9]/g, ''))
    arrayNumeros = arrayNumeros.filter(elemento => elemento.length != 0)
    return arrayNumeros
}

export const transformarArrayDeNumerosAUnSoloString = function(array, separador) {
    let string = array.join(separador)
    return string
}

export const combinarDosArrays = function(array1, array2) {
    let arrayFinal = []
    let i = 0
    let j = 0
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            arrayFinal.push(array1[i]);
            i++;
        }
        else {
            arrayFinal.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        arrayFinal.push(array1[i])
        i++
    }
    while (j < array2.length) {
        arrayFinal.push(array2[j])
        j++
    }
    return arrayFinal
}

export const combinarNArrays = function(arrayDeArrays) {
    let arrayFinal = arrayDeArrays.reduce((arrayAnterior, arrayActual) => {
        return combinarDosArrays(arrayAnterior, arrayActual)
    })
    return arrayFinal
}

