let Cantidad_agua = 0
let Promedio = 0
input.onButtonPressed(Button.A, function () {
    Cantidad_agua = 0
    Promedio = 0
    // Calcula la cantidad de agua que cae en 5 años
    for (let index = 0; index < 1825; index++) {
        Cantidad_agua += randint(0, 6)
    }
    // Calcula el promedio de agua que cae en un día.
    Promedio += Cantidad_agua / 1825
    basic.showNumber(Promedio)
})
basic.forever(function () {
	
})
