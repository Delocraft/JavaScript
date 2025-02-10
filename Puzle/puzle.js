const DIMENSION_PUZLE = 3;
const ALTURA_ANCHURA = 500; 

const ALTURA = ALTURA_ANCHURA; 
const ANCHURA = ALTURA_ANCHURA; 
const NUM_PIEZAS = DIMENSION_PUZLE * DIMENSION_PUZLE;

const general = document.getElementById("general");

// boton
const boton = document.createElement("button");
boton.textContent = "Empezar";
boton.className = "boton";

// imagen
const imagen = document.createElement("div");
const imagenActual = "gato.jpg";
imagen.className = "imagen-puzle";
imagen.style.backgroundImage = `url(${imagenActual})`;
imagen.style.width = ANCHURA + "px";
imagen.style.height = ALTURA + "px";

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
    const cuadricula = document.createElement("div");
    if (numero === 0) {
        cuadricula.className = "Vacio";
    } else if (numero === 1) {
        cuadricula.className = "Mal";
    } else if (numero === 2) {
        cuadricula.className = "Bien";
    }

    const pieza = document.createElement("div");
    pieza.className = "pieza";
    pieza.style.backgroundImage = `url(${imagenActual})`;
    
    //-25%
    pieza.style.backgroundPosition = "-375px -375px";
    pieza.style.left = (Math.random() * 35) + 7 + "%";
    pieza.style.top = (Math.random() * 66) + 12 + "%";
    general.appendChild(pieza);
    
    cuadricula.style.height = Math.sqrt(ALTURA * ANCHURA / contador) + "px";
    cuadricula.style.width = Math.sqrt(ALTURA * ANCHURA / contador) + "px";

    puzle.appendChild(cuadricula);
});

// añadir
general.appendChild(imagen);
general.appendChild(boton);
general.appendChild(puzle);

boton.addEventListener("click", () => {
    general.removeChild(imagen);
    puzle.style.display = "flex";
});
