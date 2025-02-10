const ALTURA = 500; 
const ANCHURA = 500; 
const NUM_PIEZAS = 16;

const general = document.getElementById("general");

// boton
const boton = document.createElement("button");
boton.textContent = "Empezar";
boton.className = "boton";

// imagen
const imagen = document.createElement("div");
const imagenSrc = "gato.jpg";
imagen.className = "imagen-puzle";
imagen.style.backgroundImage = `url(${imagenSrc})`;

// puzle
const puzle = document.createElement("div");
puzle.className = "puzle";
puzle.style.width = ALTURA + "px";
puzle.style.height = ANCHURA + "px";

let puzleArray = [];
for(let i = 1; i <= NUM_PIEZAS; i++){
    puzleArray.push(0);
}

puzleArray.forEach(numero => {
    let contador = 0;
    puzleArray.forEach(() => {
        contador ++;
    });
    const pieza = document.createElement("div");
    if (numero === 0) {
        pieza.className = "Vacio";
    } else if (numero === 1) {
        pieza.className = "Mal";
    } else if (numero === 2) {
        pieza.className = "Bien";
    }
    pieza.style.backgroundPosition = 0 + "px", 100;
    pieza.style.height = Math.sqrt(ALTURA * ANCHURA / contador) + "px";
    pieza.style.width = Math.sqrt(ALTURA * ANCHURA / contador) + "px";

    puzle.appendChild(pieza);
});

// añadir
general.appendChild(imagen);
general.appendChild(boton);
general.appendChild(puzle);

boton.addEventListener("click", () => {
    general.removeChild(imagen);
});
