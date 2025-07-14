// Datos de la malla (simplificado para ejemplo)
const malla = [
  {
    ciclo: "Ciclo I",
    cursos: [
      { id: "DN-0101", nombre: "Introducción a la Administración de Negocios", creditos: 3, requisitos: [] },
      { id: "MA-0001", nombre: "Precálculo", creditos: 0, requisitos: [] }
    ]
  },
  {
    ciclo: "Ciclo II",
    cursos: [
      { id: "DN-0104", nombre: "Elementos Fundamentales de Legislación Empresarial", creditos: 3, requisitos: ["DN-0101"] },
      { id: "MA-1021", nombre: "Cálculo para Ciencias Económicas I", creditos: 4, requisitos: ["MA-0001"] }
    ]
  }
];

// Estado de cursos aprobados
const aprobados = new Set();

// Generar HTML
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
          <input type="checkbox" onchange="marcarAprobado('${curso.id}')"> Aprobado
        </label>`;
      contCursos.appendChild(divCurso);
    });

    divCiclo.appendChild(contCursos);
    contenedor.appendChild(divCiclo);
  });
}

// Marcar aprobado
function marcarAprobado(sigla) {
  const checkbox = document.querySelector(`#${sigla} input[type="checkbox"]`);
  if (checkbox.checked) {
    aprobados.add(sigla);
  } else {
    aprobados.delete(sigla);
  }
  actualizarEstado();
}

// Habilitar/bloquear cursos
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

document.addEventListener("DOMContentLoaded", () => {
  generarMalla();
  actualizarEstado();
});

