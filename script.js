const malla = [
  {
    ciclo: "Primer Semestre",
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
    ciclo: "Segundo Semestre",
    cursos: [
      { id: "EG-II", nombre: "Curso Integrado de Humanidades II", creditos: 6, requisitos: ["EG-I"] },
      { id: "EF-", nombre: "Actividad Deportiva", creditos: 0, requisitos: [] },
      { id: "DN-0104", nombre: "Elementos Fundamentales de Legislación Empresarial", creditos: 3, requisitos: ["DN-0101"] },
      { id: "DN-0103", nombre: "Administración de Proyectos y Herramientas para el Análisis de Datos", creditos: 3, requisitos: ["DN-0102"] },
      { id: "MA-1021", nombre: "Cálculo para Ciencias Económicas I", creditos: 4, requisitos: ["MA-0001"] }
    ]
  },
  {
    ciclo: "Tercer Semestre",
    cursos: [
      { id: "PC-0200", nombre: "Contabilidad Básica", creditos: 4, requisitos: ["DN-0101"] },
      { id: "PC-0240", nombre: "Matemática Financiera", creditos: 3, requisitos: ["MA-1021"] },
      { id: "PC-0261", nombre: "Legislación Comercial, Bancaria y Financiera", creditos: 3, requisitos: ["DN-0104"] },
      { id: "XS-0276", nombre: "Estadística General I", creditos: 4, requisitos: ["MA-1021"] },
      { id: "MA-1022", nombre: "Cálculo para Ciencias Económicas II", creditos: 4, requisitos: ["MA-1021"] }
    ]
  },
  {
    ciclo: "Cuarto Semestre",
    cursos: [
      { id: "SR-I", nombre: "Seminario de Realidad Nacional I", creditos: 2, requisitos: ["EG-II"] },
      { id: "PC-0260", nombre: "Legislación Laboral", creditos: 3, requisitos: ["PC-0261"] },
      { id: "PC-0202", nombre: "Contabilidad Intermedia I", creditos: 3, requisitos: ["PC-0200"] },
      { id: "DN-0123", nombre: "Metodología de la Investigación", creditos: 3, requisitos: ["XS-0276"] },
      { id: "XS-0277", nombre: "Estadística General II", creditos: 4, requisitos: ["XS-0276","MA-1022"] },
      { id: "DN-0340", nombre: "Administración Financiera I", creditos: 3, requisitos: ["PC-0240", "PC-0200"] }
    ]
  },
    {
    ciclo: "Quinto Semestre",
    cursos: [
      { id: "SR-II", nombre: "Seminario de Realidad Nacional II", creditos: 2, requisitos: ["SR-I"] },
      { id: "PC-0304", nombre: "Contabilidad Intermedia II", creditos: 3, requisitos: ["PC-0240","PC-0202"] },
      { id: "PC-0320", nombre: "Auditoría Financiera I", creditos: 3, requisitos: ["PC-0202","XS-0276"] },
      { id: "PC-0241", nombre: "Negocios y Entorno Económico", creditos: 3, requisitos: ["PC-0261"] },
      { id: "PC-0212", nombre: "Gerencia y Liderazgo para Contadores", creditos: 3, requisitos: ["DN-0101"] },
      { id: "DN-0341", nombre: "Administración Financiera II", creditos: 3, requisitos: ["DN-0340","XS-0277"] }
    ]
  },
  {
    ciclo: "Sexto Semestre",
    cursos: [
      { id: "PC-0305", nombre: "Contabilizaciones Especiales", creditos: 3, requisitos: ["PC-0304"] },
      { id: "PC-0321", nombre: "Auditoría Financiera II", creditos: 3, requisitos: ["PC-0320"] },
      { id: "PC-0211", nombre: "Muestreo Aplicado a la Auditoría", creditos: 3, requisitos: ["XS-0277","PC-0320","PC-0321"] },
      { id: "DN-0105", nombre: "Métodos Cuantitativos para la Toma de Decisiones I", creditos: 3, requisitos: ["DN-0340","XS-0277","DN-0320","DN-0341"] },
      { id: "DN-0320", nombre: "Principios de Mercadeo", creditos: 3, requisitos: ["PC-0200","XS-0276","DN-0105"] },
      { id: "PC-0242", nombre: "Entorno, Gestión y Control", creditos: 3, requisitos: ["PC-0241"] }
    ]
  },
  {
    ciclo: "Septimo Semestre",
    cursos: [
      { id: "PC-0407", nombre: "Contabilidad Avanzada I", creditos: 3, requisitos: ["PC-0305","PC-0204"] },
      { id: "PC-0204", nombre: "Laboratorio de Contabilidad", creditos: 3, requisitos: ["PC-0305","PC-0407"] },
      { id: "PC-0421", nombre: "Auditoría Financiera III", creditos: 3, requisitos: ["PC-0321"] },
      { id: "PC-0462", nombre: "Legislación Tributaria y Aduanera", creditos: 3, requisitos: ["PC-0304","PC-0260"] },
      { id: "PC-0306", nombre: "Sistemas de Costeo Básico", creditos: 3, requisitos: ["PC-0304"] },
      { id: "PC-0344", nombre: "Formulación y Evaluación de Proyectos I", creditos: 3, requisitos: ["DN-0341"] }
    ]
  },
  {
    ciclo: "Octavo Semestre",
    cursos: [
      { id: "PC-0409", nombre: "Sistemas de Costeo Gerencial", creditos: 3, requisitos: ["PC-0306"] },
      { id: "PC-0410", nombre: "Contabilidad Avanzada II", creditos: 3, requisitos: ["PC-0407"] },
      { id: "PC-0205", nombre: "Contabilidad Gubernamental", creditos: 3, requisitos: ["PC-0407"] },
      { id: "PC-0531", nombre: "Auditoría Financiera IV", creditos: 3, requisitos: ["PC-0421"] },
      { id: "DN-0110", nombre: "Métodos Cuantitativos para la Toma de Decisiones II", creditos: 3, requisitos: ["DN-0105","DN-0442"] },
      { id: "DN-0525", nombre: "Mercadeo de Servicios", creditos: 3, requisitos: ["DN-0320"] }
    ]
  },
  {
    ciclo: "Noveno Semestre",
    cursos: [
      { id: "PC-0423", nombre: "Auditoría Informática I", creditos: 3, requisitos: ["PC-0530","PC-0424"] },
      { id: "PC-0424", nombre: "Laboratorio de Auditoría Informática I", creditos: 1, requisitos: ["PC-0530"."PC-0423"] },
      { id: "PC-0425", nombre: "Control Interno y Auditorías Especiales", creditos: 3, requisitos: ["PC-0530"] },
      { id: "PC-0528", nombre: "Auditoría de Gestión I", creditos: 4, requisitos: ["PC-0421"] },
      { id: "OPT-", nombre: "Optativo", creditos: 3, requisitos: [] },
      { id: "DN-0114", nombre: "Comunicación Intercultural de los Negocios", creditos: 3, requisitos: ["PC-0409"] }
    ]
  },
  {
    ciclo: "Decimo Semestre",
    cursos: [
      { id: "PC-0526", nombre: "Auditoría Informática II", creditos: 3, requisitos: ["PC-0423","PC-0424","PC-0527"] },
      { id: "PC-0527", nombre: "Laboratorio de Auditoría Informática II", creditos: 1, requisitos: ["PC-0423","PC-0424","PC-0526"] },
      { id: "PC-0529", nombre: "Auditoría de Gestión II", creditos: 4, requisitos: ["PC-0528"] },
      { id: "OPT2-", nombre: "Optativo", creditos: 3, requisitos: [] },
      { id: "DN-0115", nombre: "Taller de Investigación", creditos: 3, requisitos: ["DN-0113"] },
      { id: "PC-0210", nombre: "Auditoría Interna", creditos: 3, requisitos: ["PC-0425"] }
    ]
  }
];

// Estado de aprobados
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

