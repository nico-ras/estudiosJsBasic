//------------Desafio 2-------------

var num1 = parseInt(prompt("Ingresa el primer numero, este debe ser mayor a 0:", "1"));

var num2 = parseInt(prompt("Ingresa el segundo numero, este debe ser mayor a 0 y distinto al anterior:", "1"));

//---Validacion

if (num1 > 0 && num2 > 0 && num1 != num2) {

    //---suma
    
    var suma = num1 + num2;

    console.log(`El resultado de la suma de los dos numero ingresados es: ${suma}`);

    //---resta

    var resta = num1 - num2;

    console.log(`El resultado de la resta de los dos numero ingresados es: ${resta}`);

    //--division

    var division = num1 / num2;

    console.log(`El resultado de la division de los dos numero ingresados es: ${division}`);

    //--multiplicacion

    var multiplicacion = num1 * num2;

    console.log(`El resultado de la multiplicacion de los dos numero ingresados es: ${multiplicacion}`);

    //--modulo

    var modulo = num1 % num2;

    console.log(`El resultado de la modulo de los dos numero ingresados es: ${modulo}`);
} else {
    console.log("Debes ingresar numeros distintos entre si y que sean mayores a 0!!");
}




//---------------Desafio 3: transformar grados celcius a kelvin y fahrenheit-----------------

var  celcius = parseFloat(prompt("Ingresa la temperatura en grados celcius que quieras transformar a Kelvin y Fahrenheit:", "0")); //tomamos el dato solicitado

//--Kelvin

var kelvin = celcius + 273.15 //realizamos la conversion a kelvin

console.log(`${celcius} grados celcius, corresponden a ${kelvin} grados kelvin`);

//--Fahrenheit

var fahrenheit = (celcius * (9/5)) + 32 //realizamos la conversion a fahrenheit

console.log(`${celcius} grados celcius, corresponden a ${fahrenheit} grados Fahrenheit`);







//-----------------Desafio 4: transformar dias en años, semanas y dias-----------------

var days = parseInt(prompt("Ingresa el numero de dias que quieres transformar a años con semanas y dias: ", "0"));

        var years = Math.floor(days / 365); //Años
        
        var yearsDaysDif = days % 365; //Dias que no alcanzan a formar un año

        var weeks = Math.floor(yearsDaysDif / 7); //Dias que no forman un año pero logran formar semanas

        var difDays = yearsDaysDif % 7; //Dias que no forman semanas

        //Para diferenciar si es en singular o plural en el string
        var pluOrSingweeks = (weeks != 1) ? "s" : "";
        var pluOrSingyears = (years != 1) ? "s" : "";
        var pluOrSingDays = (difDays != 1) ? "s" : "";
    
        console.log(`${days} corresponde a: ${years} año${pluOrSingyears}, ${weeks} semana${pluOrSingweeks} y ${difDays} dia${pluOrSingDays}`); //mostramos en consola con el formato 'años, semanas, dias'





    
//--------------------Desafio 5: Mostrar suma y promedio de 5 numeros----------------------------


    
//Declaramos la variable 'numbers' la cual es un array vacio
var numbers = [];

for(var i = 0; i < 5; i++) {
    numbers.push(parseInt(prompt(`${i+1}) ingresa un numero`, "0"))); //Iteramos 5 veces pidiendo ingresar un numero, para luego pushear al arr 'numbers'
}  
//Declaramos la variable 'total' con valor numerico 0
var total = 0;

for (let value of numbers) {
    total += value; //Iteramos el array numbers, donde vamos sumando cada uno de los valores y el total lo asignamos a la variable 'total'
}

console.log(`La suma total de los 5 numeros es ${total}`); //Mostramos en consola el total de la suma de array 'numbers' contenido en la variable 'total'
var averange = total / (numbers.length) //Dividimos el valor de la variable 'total' por el largo del array 'numbers' para obtener el promedio
console.log(`El promedio total de los 5 numeros es ${averange}`); //mostramos en consola el valor del promedio de los 5 numeros





