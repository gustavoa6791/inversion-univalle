export class Inversion {
    constructor(nombre, valor, ganancia, valorAgregado) {
        this.nombre = nombre
        this.valor = valor
        this.ganancia = ganancia
        this.valorAgregado = valorAgregado
    }
}

export function reporteAnual(inversiones) {
    
    var reporteAnual = []
    var  inv = inversiones

    for (let i = 0; i < 10; i++) {
        var invCopy = []

        for (let j = 0; j < inv.length; j++) {
            invCopy.push(new Inversion (inv[j].nombre,inv[j].valor,inv[j].ganancia,inv[j].valorAgregado))
            inv[j].valorAgregado += inv[j].valor*(inv[j].ganancia/100) 
        }
        reporteAnual.push(invCopy)
    }
    return reporteAnual
}

export function valorAgregado(inversiones) {
    inversiones.forEach(i => {
        i.ganancia = agregarGanancia()
        i.valorAgregado = i.valor * i.ganancia / 100
    });
    return inversiones
}

function agregarGanancia() {
    return aleatorio(1, 5, 2)
}

function aleatorio(minimo, maximo, decimales) {
    var precision = Math.pow(10, decimales);
    minimo = minimo * precision;
    maximo = maximo * precision;
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo) / precision;
}