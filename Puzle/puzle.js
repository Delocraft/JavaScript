const ALTURA_ANCHURA = 500; //no tocar
const DIMENSION_PUZLE = 2;
const NUM_PIEZAS = DIMENSION_PUZLE * DIMENSION_PUZLE;

const general = document.getElementById("general");

// boton
const boton = document.createElement("button");
boton.textContent = "Empezar";
boton.className = "boton";

// imagen
const imagen = document.createElement("div");
const imagenActual = "gato.jpg";
imagen.style.backgroundImage = `url(${imagenActual})`;
imagen.className = "imagen-puzle";
imagen.style.width = ALTURA_ANCHURA + "px";
imagen.style.height = ALTURA_ANCHURA + "px";

// puzle
const puzle = document.createElement("div");
puzle.className = "puzle";
puzle.style.width = ALTURA_ANCHURA + "px";
puzle.style.height = ALTURA_ANCHURA + "px";

let puzleArray = [];
for(let i = 1; i <= NUM_PIEZAS; i++){
    puzleArray.push(0);
}

function CrearPiezas(){
    let intervaloX = 0;
    let contadorX = -1;
    let contadorY = -1;

    let vacias = 0;
    let completadas = 0;
    
    puzleArray.forEach( () => {
        
        if(intervaloX %DIMENSION_PUZLE === 0){
            contadorX += 1;
        }
        intervaloX += 1;
        
        if(contadorY === DIMENSION_PUZLE - 1){
            contadorY = 0;
        }else{
            contadorY += 1;
        }
        
        const cuadricula = document.createElement("div");

        cuadricula.className = "Vacio";
    
        cuadricula.style.height = Math.sqrt(ALTURA_ANCHURA * ALTURA_ANCHURA / NUM_PIEZAS) + "px";
        cuadricula.style.width = Math.sqrt(ALTURA_ANCHURA * ALTURA_ANCHURA / NUM_PIEZAS) + "px";
        cuadricula.ondragover = (arrastrar) => arrastrar.preventDefault();
        cuadricula.id = `cuadricula-${contadorY}-${contadorX}`;
        cuadricula.ondrop = (arrastrar) => {
            arrastrar.preventDefault();
            const id = arrastrar.dataTransfer.getData("text");
            const pieza = document.getElementById(id);
            
            if (cuadricula.firstChild && cuadricula.firstChild !== pieza) {
                const reemplazada = cuadricula.firstChild;
                general.appendChild(reemplazada);
                reemplazada.style.position = "absolute";
                reemplazada.style.left = (Math.random() * 31) + 7 + "%";
                reemplazada.style.top = (Math.random() * 62) + 12 + "%";
                reemplazada.reemplazada = true;
            }
            
            cuadricula.appendChild(pieza);
            pieza.style.position = "relative";
            pieza.style.left = "0";
            pieza.style.top = "0";

            const cuadriculaId = cuadricula.id.replace('cuadricula-', '');
            const piezaId = pieza.id.replace('pieza-', '');

            if (cuadriculaId === piezaId && !pieza.correctamenteColocada) {
                completadas += 1;
                pieza.correctamenteColocada = true;
            } else if (cuadriculaId !== piezaId && pieza.correctamenteColocada) {
                completadas -= 1;
                pieza.correctamenteColocada = false;
                if (completadas < 0) {
                    completadas = 0;
                }
            }

            if (pieza.reemplazada) {
                pieza.reemplazada = false;
            } else {
                if (completadas === NUM_PIEZAS) {
                    alert("¡Has ganado!");
                }
            }
            console.log(completadas);
        };
    
        const pieza = document.createElement("div");
        pieza.className = "pieza";
        pieza.id = `pieza-${contadorX}-${contadorY}`;
        pieza.draggable = true;
        pieza.ondragstart = (e) => {
            e.dataTransfer.setData("text", e.target.id);
        };
        pieza.style.backgroundImage = `url(${imagenActual})`;
        pieza.style.height = Math.sqrt(ALTURA_ANCHURA * ALTURA_ANCHURA / NUM_PIEZAS) + "px";
        pieza.style.width = Math.sqrt(ALTURA_ANCHURA * ALTURA_ANCHURA / NUM_PIEZAS) + "px";
        pieza.correctamenteColocada = false;
        pieza.reemplazada = false;
        
        let posicionesPiezasX = contadorX*(Math.sqrt(ALTURA_ANCHURA * ALTURA_ANCHURA / NUM_PIEZAS));
        let posicionesPiezasY = contadorY*(Math.sqrt(ALTURA_ANCHURA * ALTURA_ANCHURA / NUM_PIEZAS));
    
        pieza.style.backgroundPosition = `-${posicionesPiezasX}px -${posicionesPiezasY}px`;
        pieza.style.left = (Math.random() * 31) + 7 + "%";
        pieza.style.top = (Math.random() * 62) + 12 + "%";
        general.appendChild(pieza);
    
        puzle.appendChild(cuadricula);
    });
}

// añadir
general.appendChild(imagen);
general.appendChild(boton);
general.appendChild(puzle);

boton.addEventListener("click", () => {
    imagen.style.width = ALTURA_ANCHURA / 3 + "px";
    imagen.style.height = ALTURA_ANCHURA / 3 + "px";
    imagen.style.left = 55 + "%";
    imagen.style.border = 3 + "px solid rgb(0, 255, 0)";
    CrearPiezas();
    puzle.style.display = "flex";
    general.removeChild(boton);
});