window.addEventListener('load', function(event) {
    // 1. Una variable numero cuyo valor sea -4.
    let numero = -4;

    // 2. Una variable palabra cuyo valor sea ”Hola Mundo”
    let palabra = "Hola Mundo";

    // 3. Una variable booleana cuyo nombre sea respuesta e inicialmente con valor true
    let respuesta = true;

    // 4. Crea una constante con nombre pi cuyo valor sea 3.14
    const PI = 3.14;

    // 5. Modifica el valor de la variable numero para que en lugar de -4 sea 54 pero sin tocar la parte de la declaración de la variable.
    numero = 54;

    // 6. ¿Qué pasa si modificas el valor de la variable antes de que esta sea declarada?
    // Si intentamos modificar una variable antes de declararla usando "let" o "const", JavaScript lanzará un error de referencia.
    // Sin embargo, si usamos "var", la variable se eleva (hoisting) pero tendrá un valor de "undefined" hasta que se le asigne un valor.

    // 7. Muestra por consola cada una de las variables. Usa console.log(nombre_variable); 
    console.log(numero);
    console.log(palabra);
    console.log(respuesta);
    console.log(PI);

    // 8. Declara 2 variables y asigna los valores 5 y 2 respectivamente
    let num1 = 5;
    let num2 = 2;

    // 9. Muestra por consola la suma de ambas variables.
    console.log(num1 + num2);

    // 10. Muestra por consola la resta de ambas variables.
    console.log(num1 - num2);

    // 11. Muestra por consola la multiplicación de ambas variables.
    console.log(num1 * num2);

    // 12. Muestra por consola la división de ambas variables.
    console.log(num1 / num2);

    // 13. Muestra por consola la módulo de ambas variables.
    console.log(num1 % num2);

    // 14. Declara una variable cuyo valor sea tu nombre.
    let nombre = "Elias";

    // 15. Muestra por consola el JAVASCRIPT texto Hola concatenado con el valor de la variable anterior.
    console.log("Hola " + nombre);
});