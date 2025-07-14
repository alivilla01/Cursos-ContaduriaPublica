// Estado de aprobados
const aprobados = new Set();

// Cargar aprobados del LocalStorage
function cargarAprobados() {
  const guardados = localStorage.getItem('cursosAprobados');
  if (guardados) {
    JSON.parse(guardados).forEach(id => aprobados.add(id));
  }
}

// Guardar en LocalStorage
function guardarAprobados() {
  localStorage.setItem('cursosAprobados', JSON.stringify(Array.from(aprobados)));
}

// Marcar o desmarcar aprobado
function marcarAprobado(sigla) {
  const checkbox = document.querySelector(`#${sigla} input[type="checkbox"]`);
  if (checkbox.checked) {
    aprobados.add(sigla);
  } else {
    aprobados.delete(sigla);
  }
  guardarAprobados();
  actualizarEstado();
}

// Actualizar estado habilitado/bloqueado
function actualizarEstado() {
  malla.forEach(bloque => {
    bloque.cursos.forEach(curso => {
      const div = document.getElementById(curso.id);
      const requisitos = curso.requisitos;
      const habilitado = requisitos.every(r => aprobados.has(r));
      if (habilitado || requisitos.length === 0) {
        div.classList.remove("bloqueado");
      } else {
        div.classList.add("bloqueado");
      }
    });
  });
}

// Generar HTML de la malla
function generarMalla() {
  const contenedor = document.getElementById("contenedor-ciclos");
  contenedor.innerHTML = "";
  malla.forEach(bloque => {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    divCiclo.innerHTML = `<h2>${bloque.ciclo}</h2>`;

    const contCursos = document.createElement("div");
    contCursos.className = "cursos";

    bloque.cursos.forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.className = "curso";
      divCurso.id = curso.id;
      divCurso.innerHTML = `
        <h3>${curso.nombre}</h3>
        <p><strong>Créditos:</strong> ${curso.creditos}</p>
        <p><strong>Requisitos:</strong> ${curso.requisitos.length ? curso.requisitos.join(", ") : "Ninguno"}</p>
        <label class="aprobado">
          <input type="checkbox" ${aprobados.has(curso.id) ? "checked" : ""} onchange="marcarAprobado('${curso.id}')"> Aprobado
        </label>
      `;
      contCursos.appendChild(divCurso);
    });

    divCiclo.appendChild(contCursos);
    contenedor.appendChild(divCiclo);
  });

  actualizarEstado();
}

// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  cargarAprobados();
  generarMalla();
});
