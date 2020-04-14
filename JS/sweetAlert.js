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
