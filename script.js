const malla = [
  {
    ciclo: "Ciclo I",
    cursos: [
      { id: "EG-I", nombre: "Curso Integrado de Humanidades I", creditos: 6, requisitos: [] },
      { id: "EG-", nombre: "Curso de Arte", creditos: 2, requisitos: [] },
      { id: "RP-", nombre: "Repertorio", creditos: 3, requisitos: [] },
      { id: "DN-0101", nombre: "Introducción a la Administración de Negocios", creditos: 3, requisitos: [] },
      { id: "MA-0001", nombre: "Precálculo", creditos: 0, requisitos: [] },
      { id: "DN-0102", nombre: "Aplicaciones Ofimáticas para la Toma de Decisiones", creditos: 3, requisitos: [] }
    ]
  },
  {
    ciclo: "Ciclo II",
    cursos: [
      { id: "EG-II", nombre: "Curso Integrado de Humanidades II", creditos: 6, requisitos: ["EG-I"] },
      { id: "EF-", nombre: "Actividad Deportiva", creditos: 0, requisitos: [] },
      { id: "DN-0104", nombre: "Elementos Fundamentales de Legislación Empresarial", creditos: 3, requisitos: ["DN-0101"] },
      { id: "DN-0103", nombre: "Administración de Proyectos y Herramientas para el Análisis de Datos", creditos: 3, requisitos: ["DN-0102"] },
      { id: "MA-1021", nombre: "Cálculo para Ciencias Económicas I", creditos: 4, requisitos: ["MA-0001"] }
    ]
  }
];

const aprobados = new Set();

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
  actualizarEstado();
}

function marcarAprobado(sigla) {
  const checkbox = document.querySelector(`#${sigla} input[type="checkbox"]`);
  if (checkbox.checked) {
    aprobados.add(sigla);
  } else {
    aprobados.delete(sigla);
  }
  actualizarEstado();
}

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
});
