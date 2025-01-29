var entradaTarea = document.getElementById("nueva-tarea");
var botonAgregar = document.querySelector(".btn-agregar");
var listaTareasIncompletas = document.getElementById("lista-tareas-incompletas");
var listaTareasCompletadas = document.getElementById("lista-tareas-completadas");

botonAgregar.addEventListener("click", function () {
  agregarTarea();
});

entradaTarea.addEventListener("keypress", function (event) {
  if (event.key === "Enter") agregarTarea();
});

var tareas = [];

var agregarTarea = function () {
  const tarea = entradaTarea.value.trim();
  if (tarea === "") {
    alert("Por favor, ingrese una tarea");
    return;
  }

  tareas.push({ valor: tarea, estaCompleta: false });
  entradaTarea.value = "";
  iniciar();
};

var iniciar = function () {
  listaTareasIncompletas.innerHTML = "";
  listaTareasCompletadas.innerHTML = "";

  tareas.forEach((tarea, indice) => {
    var elementoLista = document.createElement("li");
    elementoLista.textContent = tarea.valor;

    if (tarea.estaCompleta) {
      elementoLista.classList.add("completada");

      var botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.onclick = function () {
        tareas.splice(indice, 1);
        iniciar();
      };

      elementoLista.appendChild(botonEliminar);
      listaTareasCompletadas.appendChild(elementoLista);
    } else {
      var botonCompletar = document.createElement("button");
      botonCompletar.textContent = "Completar";
      botonCompletar.onclick = function () {
        tareas[indice].estaCompleta = true;
        iniciar();
      };

      elementoLista.appendChild(botonCompletar);
      listaTareasIncompletas.appendChild(elementoLista);
    }
  });
};

// Renderizado inicial
iniciar();
