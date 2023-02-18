'use strict'

window.onload = function(){ 
    let resultado = document.getElementById("result"); 

    document.onkeydown = teclado;   
}

let resultado = document.getElementById("result"); 
let num = "0";
let num2 = 1;
let coma = 0;
let numberWaiting = 0
let operation = "no"

    
document.getElementById('buttonOne').onclick =  function() {number(1)};
document.getElementById('buttonTwo').onclick = function() {number(2)}
document.getElementById('buttonThree').onclick =  function() {number(3)};
document.getElementById('buttonFour').onclick = function() {number(4)}
document.getElementById('buttonFive').onclick =  function() {number(5)};
document.getElementById('buttonSix').onclick = function() {number(6)}
document.getElementById('buttonSeven').onclick =  function() {number(7)};
document.getElementById('buttonEight').onclick = function() {number(8)}
document.getElementById('buttonNine').onclick =  function() {number(9)};
document.getElementById('buttonZero').onclick = function() {number(0)}
document.getElementById('buttonDot').onclick = function() {number('.')}

document.getElementById('sum').onclick = function() {operar('+')}
document.getElementById('subtraction').onclick = function() {operar('-')}
document.getElementById('multiply').onclick = function() {operar('*')}
document.getElementById('division').onclick = function() {operar('/')}
document.getElementById('buttonEqual').onclick = function() {igualar()}

document.getElementById('buttonDelete').onclick = function() {clickDelete()}

document.getElementById('buttonDeleteAll').onclick = function() {deleteAll()}



    function number(numScreen){
    
    if(num == "0" || num2 == 1  ){
        resultado.innerHTML = numScreen;
        num = numScreen;
    

    if(numScreen=="."){
        resultado.innerHTML="0.";
        num=numScreen;
        coma=1;
    }
    }
    else{
        
        if(numScreen=="." && coma ==0){
            resultado.innerHTML+=numScreen;
            num += numScreen;
            coma = 1;
        }

        else if (numScreen=="." && coma ==1){}

        else{
            resultado.innerHTML += numScreen;
            num+=numScreen;
            
        }
        
    }
    num2=0;

}

function operar(s) {
    igualar() //si hay operaciones pendientes se realizan primero
    numberWaiting=num 
    operation=s; 
    num2=1; 
    }	

    function igualar(){
        if(operation =="no"){
            resultado.innerHTML=num;
        }
        else{
            let sl = numberWaiting + operation + num;
            let sol = eval(sl)
            resultado.innerHTML=sol;
            num = sol;
            operation = "no";
            num2=1;
        }
    }

    function clickDelete(){ //Borrar sólo el último número escrito.
            let cifras= num.length; //hayar número de caracteres en pantalla
            let br=num.substr(cifras-1,cifras) //describir último caracter
            num=num.substr(0,cifras-1) //quitar el ultimo caracter
            if (num=="") {num="0";} //si ya no quedan caracteres, pondremos el 0
            if (br==".") {coma=0;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
            resultado.innerHTML=num; //mostrar resultado en pantalla	 
            }

    function deleteAll() {
        resultado.innerHTML=0; //poner pantalla a 0
        num="0"; //reiniciar número en pantalla
        coma=0; //reiniciar estado coma decimal 
        numberWaiting=0 //indicador de número oculto a 0;
        operation="no" //borrar operación en curso.
        }

   
    function teclado (elEvento) { 
        let evento = elEvento || window.event;
        let k=evento.keyCode; //número de código de la tecla.
        //teclas númericas del teclado alfamunérico
        if (k>47 && k<58) { 
           let p=k-48; //buscar número a mostrar.
           p=String(p) //convertir a cadena para poder añádir en pantalla.
            number(p); //enviar para mostrar en pantalla
           }	
        //Teclas del teclado númerico. Seguimos el mismo procedimiento que en el anterior.
        if (k>95 && k<106) {
            let p=k-96;
            p=String(p);
            number(p);
           }
        if (k==110 || k==190) {number(".")} //teclas de coma decimal
        if (k==106) {operar('*')} //tecla multiplicación
        if (k==107) {operar('+')} //tecla suma
        if (k==109) {operar('-')} //tecla resta
        if (k==111) {operar('/')} //tecla división
        if (k==32 || k==13) {igualar()} //Tecla igual: intro o barra espaciadora
        if (k==46) {deleteAll()} //Tecla borrado total: "supr"
        if (k==8) {clickDelete()} //Retroceso en escritura : tecla retroceso.
        if (k==36) {borradoParcial()} //Tecla borrado parcial: tecla de inicio.
        }

    

    