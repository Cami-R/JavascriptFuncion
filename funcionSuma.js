
function sumar(){
    suma=0
    alert("A continuacion se le va a pedir que ingrese cinco numeros...")

    for(let i=1; i<=5;i++)
    {
        let n1=parseInt(prompt("Introduce un numero: "))
        suma+=n1

    }
    alert(`La suma de los 5 numeros es ${suma}`)
}
sumar()