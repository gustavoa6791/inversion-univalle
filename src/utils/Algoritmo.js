export class Inversion {
    constructor(nombre, valor, ganancia, valorAgregado, movimiento, deduccion, total) {
        this.nombre = nombre
        this.valor = valor
        this.ganancia = ganancia
        this.valorAgregado = valorAgregado
        this.movimiento = movimiento
        this.deduccion = deduccion
        this.total = total
    }
    
    reset (params) {

        this.ganancia = 0
        this.valorAgregado = 0
        this.movimiento = 0
        this.deduccion = 0
        this.total = 0
    }
}

export const deduccionXmantener = 1
export const deduccionXmover = 2

export function reporteAnual(inversiones) {

    var reporteAnual = []
    var inv = inversiones

    for (let i = 0; i < 10; i++) {
        var invCopy = []

        for (let j = 0; j < inv.length; j++) {

               if(inv[j].ganancia< deduccionXmover){
                inv[j].ganancia = agregarGanancia()
                inv[j].deduccion += inv[j].valor * (deduccionXmover / 100) 
                inv[j].movimiento = -1
            }

            inv[j].movimiento++
            if (inv[j].movimiento == 2) {
                inv[j].deduccion += inv[j].valor * (deduccionXmantener / 100)
            } else {
                inv[j].deduccion += 0
            }

            if (inv[j].movimiento > 2) {
                inv[j].movimiento = 1
            }

         
            invCopy.push(
                new Inversion(
                    inv[j].nombre, 
                    inv[j].valor, 
                    inv[j].ganancia, 
                    inv[j].valorAgregado, 
                    inv[j].movimiento, 
                    inv[j].deduccion, 
                    (inv[j].valor + inv[j].valorAgregado - inv[j].deduccion)))

         inv[j].valorAgregado += inv[j].valor * (inv[j].ganancia / 100)
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