var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

var cajatxt = document.getElementById("txtcaja");
var boton = document.getElementById("botonsito");
var puntuacion = 0;
var nivel = 1;
document.getElementById("puntos").innerHTML= "Puntaje: " + puntuacion;
document.getElementById("nivel").innerHTML="Nivel: " + nivel;

var imagen = new Image();
var num = 1;
imagen.src = "img/" + num + ".png";

imagen.onload = function () {
    scaleToFit(this);
}

function scaleToFit(img) {
    // get the scale
    var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    // get the top left position of the image
    var x = (canvas.width / 2) - (img.width / 2) * scale;
    var y = (canvas.height / 2) - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}

function adelante() {
    reiniciar();
    num++;
    nivel++;
    finJuego();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("nivel").innerHTML="Nivel: " + nivel;
    imagen.src = "img/" + num + ".png";
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

function nombre() {
    ( async () => {
    const {value: nombre } =  await Swal.fire({
    title: "Bienvenido!",
    text: "¿Cual es tu Nombre?",
    icon: "question",
    backdrop: true,
    input: "text",
    inputPlaceholder: "Nombre",
    allowOutsideClick: false
    });
    document.getElementById("nombre").innerHTML= nombre + "<br>" + "Puntaje: 0";
})();
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
    var respuesta = cajatxt.value.toLowerCase();
    if (num==1) {
        if (respuesta == "mickey mouse") {
        mensajebien();
        adelante();
    } else mensajemal(); } else if (num==2) {
        if (respuesta == "shrek") {
        mensajebien();
        adelante();
    } else mensajemal(); } else if (num==3) {
        if (respuesta == "poppy") {
        mensajebien();
        adelante();
    } else mensajemal(); } else if (num==4) {
        if (respuesta == "remy") {
        mensajebien();
        adelante();
    } else mensajemal(); } else if (num==5) {
        if (respuesta == "peter pan") {
        mensajebien();
        adelante();
    } else mensajemal(); } else if (num==6) {
        if (respuesta == "desagrado") {
        mensajebien();
        adelante();
    } else mensajemal(); } else if (num==7) {
        if (respuesta == "oh") {
        mensajebien();
        adelante();
    }else mensajemal(); } else if (num==8) {
        if (respuesta == "mike wazowski") {
        mensajebien();
        adelante();
    }  else mensajemal(); } else if (num==9) {
        if (respuesta == "tigresa") {
        mensajebien();
        adelante();
    } else mensajemal(); } else if (num==10) {
        if (respuesta == "snowball") {
        mensajebien();
        adelante();
        parar();
    }  else {
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
