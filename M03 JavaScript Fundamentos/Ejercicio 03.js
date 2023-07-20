/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x==y){return true;}
   else {return false;}
}

function tienenMismaLongitud(str1, str2) {
 if(str1.length==str2.length) {return true;}
 else {return false;} 
}

function menosQueNoventa(num) {
   if (num<90){return true;}
   else {return false;}
}

function mayorQueCincuenta(num) {
   if (num>50){return true;}
   else {return false;}
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num%2==0){return true;}
   else {return false;}
}

function esImpar(num) {
   if (num%2==0){return false;}
   else {return true;}
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
