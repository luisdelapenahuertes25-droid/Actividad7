const btn1 = document.getElementById("btn1");

if(btn1){

    btn1.addEventListener("click", () => {

        window.location.href = "Act1.html";

    });

}

const btn2 = document.getElementById("btn2");

if(btn2){

    btn2.addEventListener("click", () => {

        window.location.href = "Act2.html";

    });

}

const btn3 = document.getElementById("btn3");

if(btn3){

    btn3.addEventListener("click", () => {

        window.location.href = "Act3.html";

    });

}

const btn4 = document.getElementById("btn4");

if(btn4){

    btn4.addEventListener("click", () => {

        window.location.href = "Act4.html";

    });

}

const btn5 = document.getElementById("btn5");

if(btn5){

    btn5.addEventListener("click", () => {

        window.location.href = "Act5.html";

    });

}

const btn6 = document.getElementById("btn6");

if(btn6){

    btn6.addEventListener("click", () => {

        window.location.href = "Act6.html";

    });

}

function crearBotonVolver(){

    const boton = document.createElement("button");

    boton.innerHTML = "⬅ Volver";

    boton.classList.add("back-btn");

    boton.onclick = () => {

        window.location.href = "index.html";

    };

    document.body.appendChild(boton);

}

if(!document.getElementById("btn1")){

    crearBotonVolver();

}