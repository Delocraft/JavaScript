entradaTarea = document.getElementById("nueva-tarea");
botonAgregar = document.getElementById("btn-agregar");
listaTareasIncompletas = document.getElementById("lista-tareas-incompletas");
listaTareasCompletadas = document.getElementById("lista-tareas-completadas");

//boton agregar
botonAgregar.addEventListener("click", function () {
  tarea = entradaTarea.value.trim();
  if (tarea === "") {
    alert("Por favor, ingrese una tarea");
    return;
  }

  tareas.push({ 
    valor: tarea
  });

  entradaTarea.value = "";
  iniciar();
});

tareas = [];

function iniciar() {
  listaTareasIncompletas.innerHTML = "";
  listaTareasCompletadas.innerHTML = "";

  tareas.forEach((tarea, indice) => {
    elementoLista = document.createElement("li");
    elementoLista.textContent = tarea.valor;

    if (tarea.estaCompleta) {
      elementoLista.classList.add("completada");

      botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";

      //boton eliminar
      botonEliminar.onclick = function () {
        tareas.splice(indice, 1);
        iniciar();
      };

      elementoLista.appendChild(botonEliminar);
      listaTareasCompletadas.appendChild(elementoLista);
    } else {
      botonCompletar = document.createElement("button");
      botonCompletar.textContent = "Completar";

      //boton completar
      botonCompletar.onclick = function () {
        tareas[indice].estaCompleta = true;
        iniciar();
      };

      elementoLista.appendChild(botonCompletar);
      listaTareasIncompletas.appendChild(elementoLista);
    }
  });
};