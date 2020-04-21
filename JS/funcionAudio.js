var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

var cajatxt = document.getElementById("txtcaja");
var boton = document.getElementById("botonsito");
var puntuacion = 0;
var nivel = 1;
document.getElementById("puntos").innerHTML= "Puntaje: " + puntuacion;
document.getElementById("nivel").innerHTML="Nivel: " + nivel;


var reproducir = new Audio();
var num = 1;
reproducir.src = "Song/" + num + ".mp3";

reproducir.onload = function () {
    scaleToFit(this);
}


function adelante() {
    reiniciar();
    num++;
    nivel++;
    finJuego();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("nivel").innerHTML="Nivel: " + nivel;
    reproducir.src = "Song/" + num + ".mp3";
    cronometrar();  
}

function finJuego() {
    if (num>10) {
        num = 11;
        nivel = 10;
        Swal.fire({
            title: "Felicitaciones",
            text: "Puntaje Final: " + puntuacion,
            icon: "success",
            backdrop: true,
            timer: 10000,
            
        });   
        document.all("prueba").disabled='true';
        document.all("pruebo").disabled='true';
        document.getElementById("nivel").innerHTML="Nivel: " + 10;
        document.getElementById("puntos").innerHTML= "Puntaje Final: " + puntuacion + " / 100.000";
        parar();
    }
}

function mensajebien () {
    parar();
    var puntaje = parseInt(10000-100*s);
    Swal.fire({
        title: "Correcto",
        text: "Puntaje: " + puntaje,
        icon: "success",
        backdrop: true,
        timer: 5000,
    });
    puntuacion = puntaje + puntuacion;
    document.getElementById("puntos").innerHTML= "Puntaje: " + puntuacion;
}

function mensajemal () {
    Swal.fire({
        title: "Equivocado",
        text: "Vuelve a intentarlo",
        icon: "error",
        backdrop: true
    });
}

boton.addEventListener("click", prueba);

function prueba() {
    if (num==1) {
        if (cajatxt.value == "buho" || cajatxt.value == "Buho" || cajatxt.value == "BUHO") {
        mensajebien();
        adelante();
        nextTrack();
    } else mensajemal();} else if (num==2) {
        if (cajatxt.value == "caballo" || cajatxt.value == "Caballo" || cajatxt.value == "CABALLO") {
        mensajebien();
        adelante();
        nextTrack();
    } else mensajemal(); } else if (num==3) {
        if (cajatxt.value == "cerdo" || cajatxt.value == "Cerdo" || cajatxt.value == "CERDO") {
        mensajebien();
        adelante();
        nextTrack();
    } else mensajemal(); } else if (num==4) {
        if (cajatxt.value == "cuervo" || cajatxt.value == "Cuervo" || cajatxt.value == "CUERVO") {
        mensajebien();
        adelante();
        nextTrack();
    } else mensajemal(); } else if (num==5) {
        if (cajatxt.value == "elefante" || cajatxt.value == "Elefante" || cajatxt.value == "ELEFANTE") {
        mensajebien();
        adelante();
        nextTrack();
    } else mensajemal(); } else if (num==6) {
        if (cajatxt.value == "grillo" || cajatxt.value == "Grillo" || cajatxt.value == "GRILLO") {
        mensajebien();
        adelante();
        nextTrack();
    } else mensajemal(); } else if (num==7) {
        if (cajatxt.value == "leon" || cajatxt.value == "Leon" || cajatxt.value == "LEON") {
        mensajebien();
        adelante();
        nextTrack();
    }else mensajemal(); } else if (num==8) {
        if (cajatxt.value == "lobo" || cajatxt.value == "Lobo" || cajatxt.value == "LOBO") {
        mensajebien();
        adelante();
        nextTrack();
    }  else mensajemal(); } else if (num==9) {
        if (cajatxt.value == "mono" || cajatxt.value == "Mono" || cajatxt.value == "MONO") {
        mensajebien();
        adelante();
        nextTrack();
    } else mensajemal(); } else if (num==10) {
        if (cajatxt.value == "oso" || cajatxt.value == "Oso" || cajatxt.value == "OSO") {
        mensajebien();
        adelante();
        parar();
        nextTrack();
    }  

        else {
        mensajemal(); }
    }
    cajatxt.value = "";
}

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13) {
        prueba();
  }
}

window.onload = init;
function init() {
    m = 0;
    s = -1;
    document.getElementById("hms").innerHTML="Tiempo: 00:00";
    cronometrar();
}

function cronometrar() {
    escribir();
    id = setInterval(escribir,1000);
}

function escribir() {
    var mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}

    document.getElementById("hms").innerHTML = "Tiempo: " + mAux + ":" + sAux; 
}

function parar() {
    clearInterval(id);
}

function reiniciar() {
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00";
    m=0;s=-1;
}
