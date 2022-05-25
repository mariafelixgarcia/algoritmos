
/* //1.-NUMERO MAYOR
let X1 = prompt("Ingresa el Primer Numero");
if(X1 < 1 || X1 >100){
    alert("Ingresa nuevamente");
    let X1 = prompt("Ingresa el Primer Numero");
}

let X2 = prompt("Ingresa el Segundo Numero");
if(X2 < 1 || X2 >100){
    alert("Ingresa nuevamente");
    let X2 = prompt("Ingresa el Segundo Numero");
}

let X3 = prompt("Ingresa el Tercer Numero");

if(X3 < 1 || X3 >100){
    alert("Ingresa nuevamente");
    let X3 = prompt("Ingresa el Tercer Numero");
}

if((X1 > X2) && (X1 > X3)){
    alert("El Numero Mayor es "+ X1);
}

else if((X2 >X1) && (X2 > X3)){
    alert("El Numero Mayyor es "+ X2);
}

else{
    alert("El Numero Mayor es "+ X3);
} */


//2.-numero menor que todos
/* let X1 = prompt("Ingresa el Primer Numero");
if(X1 < 1 || X1 >100){
    alert("Ingresa nuevamente");
    let X1 = prompt("Ingresa el Primer Numero");
}

let X2 = prompt("Ingresa el Segundo Numero");
if(X2 < 1 || X2 >100){
    alert("Ingresa nuevamente");
    let X2 = prompt("Ingresa el Segundo Numero");
}

let X3 = prompt("Ingresa el Tercer Numero");

if(X3 < 1 || X3 >100){
    alert("Ingresa nuevamente");
    let X3 = prompt("Ingresa el Tercer Numero");
}

if((X1 < X2) && (X1 < X3)){
    alert("El Numero Menor es "+ X1);
}

else if((X2 < X1) && (X2 < X3)){
    alert("El Numero Menor es "+ X2);
}

else{
    alert("El Numero Menor es "+ X3);
} */


/* //4.	Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

let X1 = prompt("Ingresa el Primer Numero");
if(X1 < 100 || X1 >200){
    alert("Ingresa nuevamente");
    let X1 = prompt("Ingresa el Primer Numero");
}
if((X1 % 3 == 1) ){
    alert("El Numero NO es MULTIPLO DE 3 ");
}
else {
    alert("El Numero ES MULTIPLO DE 3 ");
}
 */


/*  //5.	Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
let X1 = prompt("Ingresa el primer Numero");
let X2 = prompt("Ingresa el segundo Numero");
let X3 = prompt("Ingresa el tercer Numero");

X1=parseInt(X1,10);
X2=parseInt(X2,10);
X3=parseInt(X3,10);

if((X3 == (X1 + X2)) ){
    alert("La suma de X1+ X2 es el valor de X3");
}
else if((X2== ( X1 + X3 ))){
    alert("La suma de X1+ X3 es el valor de X2");
}
else if((X1==(X2+X3))){
    alert("La suma de X2+ X3 es el valor de X1 ");
}
else {
    alert("Ninguno es la suma de los otros dos numeros");
}  */



 //6.-Elabora un algoritmo para leer un número y determinar si es par o impar
let X1 = prompt("Ingresa el primer Numero");
if(X1 % 2 == 0 ) {
    alert("El Numero es par ");
}
else {
    alert("El Numero es impar ");
} 