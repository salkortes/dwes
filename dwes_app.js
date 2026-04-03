// ═══════════════════════════════════════════════════════
// DWES — Lógica del cuestionario
// ═══════════════════════════════════════════════════════

// Estado
let temasSeleccionados = ['todos'];
let preguntasActuales  = [];
let indicePregunta     = 0;
let correctas          = 0;
let respuestas         = [];
let ultimaEleccion     = [];

// ── Inicialización ──────────────────────────────────────
function init() {
  // Aplanar el banco en un array con info de conteo
  const todoFlat = Object.values(BANCO).flat();
  document.getElementById('total-preguntas-badge').textContent = todoFlat.length;

  // Mostrar chips de conteo por tema
  actualizarChips();

  // Botones de tema
  document.querySelectorAll('.tema-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const tema = this.dataset.tema;
      if (tema === 'todos') {
        temasSeleccionados = ['todos'];
        document.querySelectorAll('.tema-btn').forEach(b => b.classList.remove('activo'));
        this.classList.add('activo');
      } else {
        const btnTodos = document.querySelector('.tema-btn[data-tema="todos"]');
        btnTodos.classList.remove('activo');
        if (temasSeleccionados.includes('todos')) temasSeleccionados = [];

        if (this.classList.contains('activo')) {
          this.classList.remove('activo');
          temasSeleccionados = temasSeleccionados.filter(t => t !== tema);
          if (temasSeleccionados.length === 0) {
            temasSeleccionados = ['todos'];
            btnTodos.classList.add('activo');
          }
        } else {
          this.classList.add('activo');
          temasSeleccionados.push(tema);
        }
      }
      actualizarChips();
    });
  });

  // Botones de acción
  document.getElementById('btn-comenzar').addEventListener('click', iniciarCuestionario);
  document.getElementById('btn-anterior').addEventListener('click', irAnterior);
  document.getElementById('btn-siguiente').addEventListener('click', irSiguiente);
  document.getElementById('btn-repetir').addEventListener('click', repetirMismos);
  document.getElementById('btn-nuevo').addEventListener('click', iniciarCuestionario);
  document.getElementById('btn-volver').addEventListener('click', volverConfig);
}

function actualizarChips() {
  const container = document.getElementById('temas-info');
  container.innerHTML = '';
  const seleccion = temasSeleccionados.includes('todos')
    ? Object.keys(BANCO)
    : temasSeleccionados;

  seleccion.forEach(tema => {
    const n = (BANCO[tema] || []).length;
    const chip = document.createElement('div');
    chip.className = 'tema-chip';
    chip.innerHTML = `${tema} — <span>${n} preguntas</span>`;
    container.appendChild(chip);
  });
}

// ── Iniciar cuestionario ────────────────────────────────
function iniciarCuestionario() {
  const numDeseado = parseInt(document.getElementById('num-preguntas').value);

  // Construir pool
  let pool;
  if (temasSeleccionados.includes('todos')) {
    pool = Object.values(BANCO).flat();
  } else {
    pool = temasSeleccionados.flatMap(t => BANCO[t] || []);
  }

  // Mezclar y recortar
  pool = mezclar(pool).slice(0, Math.min(numDeseado, pool.length));

  // Barajar opciones de cada pregunta
  preguntasActuales = pool.map(q => {
    const idx = [0, 1, 2, 3];
    const mezclados = mezclar(idx);
    return {
      ...q,
      ops: mezclados.map(i => q.ops[i]),
      r:   mezclados.indexOf(q.r)
    };
  });

  respuestas     = new Array(preguntasActuales.length).fill(null);
  ultimaEleccion = new Array(preguntasActuales.length).fill(null);
  indicePregunta = 0;
  correctas      = 0;

  mostrarPantalla('quiz');
  document.getElementById('score-live').textContent = '0';
  mostrarPregunta();
}

function repetirMismos() {
  preguntasActuales = mezclar(preguntasActuales);
  respuestas     = new Array(preguntasActuales.length).fill(null);
  ultimaEleccion = new Array(preguntasActuales.length).fill(null);
  indicePregunta = 0;
  correctas      = 0;
  mostrarPantalla('quiz');
  document.getElementById('score-live').textContent = '0';
  mostrarPregunta();
}

function volverConfig() {
  mostrarPantalla('config');
}

// ── Pantallas ───────────────────────────────────────────
function mostrarPantalla(cual) {
  document.getElementById('panel-configuracion').style.display = cual === 'config'    ? 'block' : 'none';
  document.getElementById('barra-progreso').style.display      = cual === 'quiz'      ? 'flex'  : 'none';
  document.getElementById('zona-quiz').style.display           = cual === 'quiz'      ? 'block' : 'none';
  document.getElementById('zona-resultados').style.display     = cual === 'resultado' ? 'block' : 'none';
}

// ── Mostrar pregunta ────────────────────────────────────
function mostrarPregunta() {
  const q     = preguntasActuales[indicePregunta];
  const total = preguntasActuales.length;
  const pct   = (indicePregunta / total * 100).toFixed(0);

  document.getElementById('progreso-texto').textContent  = `PREGUNTA ${indicePregunta + 1}/${total}`;
  document.getElementById('progreso-fill').style.width   = pct + '%';
  document.getElementById('pregunta-num-txt').textContent = `PREGUNTA ${indicePregunta + 1} DE ${total}`;
  document.getElementById('pregunta-tema-txt').textContent = q.tema;
  document.getElementById('pregunta-texto').textContent  = q.p;

  // Opciones
  const lista  = document.getElementById('opciones-lista');
  const letras = ['A', 'B', 'C', 'D'];
  lista.innerHTML = '';

  q.ops.forEach((op, i) => {
    const item = document.createElement('div');
    item.className = 'opcion-item';
    item.innerHTML = `<span class="opcion-letra">${letras[i]}</span><span class="opcion-texto">${op}</span>`;

    if (respuestas[indicePregunta] !== null) {
      item.classList.add('bloqueada');
      if (i === q.r) item.classList.add('correcta');
      else if (i === ultimaEleccion[indicePregunta]) item.classList.add('incorrecta');
    } else {
      item.addEventListener('click', () => responder(i));
    }
    lista.appendChild(item);
  });

  // Feedback
  const fb  = document.getElementById('feedback-msg');
  const fbe = document.getElementById('feedback-explicacion');

  if (respuestas[indicePregunta] === true) {
    fb.className = 'feedback-msg correcto';
    fb.innerHTML = '✓ ¡CORRECTO!';
    fb.style.display = 'flex';
    fbe.textContent  = q.e;
    fbe.style.display = 'block';
  } else if (respuestas[indicePregunta] === false) {
    fb.className = 'feedback-msg incorrecto';
    fb.innerHTML = `✗ INCORRECTO — Correcta: ${letras[q.r]}`;
    fb.style.display = 'flex';
    fbe.textContent  = q.e;
    fbe.style.display = 'block';
  } else {
    fb.style.display  = 'none';
    fbe.style.display = 'none';
  }

  // Navegación
  document.getElementById('btn-anterior').disabled = indicePregunta === 0;
  const btnSig = document.getElementById('btn-siguiente');
  btnSig.disabled = respuestas[indicePregunta] === null;
  btnSig.textContent = indicePregunta === total - 1
    ? 'VER RESULTADO ▶'
    : 'SIGUIENTE ▶';
}

// ── Responder ───────────────────────────────────────────
function responder(opcion) {
  if (respuestas[indicePregunta] !== null) return;
  const q = preguntasActuales[indicePregunta];
  ultimaEleccion[indicePregunta] = opcion;

  if (opcion === q.r) {
    respuestas[indicePregunta] = true;
    correctas++;
    document.getElementById('score-live').textContent = correctas;
  } else {
    respuestas[indicePregunta] = false;
  }
  mostrarPregunta();
}

function irSiguiente() {
  if (indicePregunta === preguntasActuales.length - 1) {
    mostrarResultados();
  } else {
    indicePregunta++;
    mostrarPregunta();
  }
}

function irAnterior() {
  if (indicePregunta > 0) {
    indicePregunta--;
    mostrarPregunta();
  }
}

// ── Resultados ──────────────────────────────────────────
function mostrarResultados() {
  mostrarPantalla('resultado');

  const total     = preguntasActuales.length;
  const sinResp   = respuestas.filter(r => r === null).length;
  const incorrectas = total - correctas - sinResp;
  const pct       = (correctas / total) * 100;
  const nota      = ((correctas / total) * 10).toFixed(1);
  const notaNum   = parseFloat(nota);

  document.getElementById('res-nota').textContent     = nota;
  document.getElementById('res-fraction').textContent  = `${correctas} DE ${total} CORRECTAS`;
  document.getElementById('res-correctas').textContent = correctas;
  document.getElementById('res-incorrectas').textContent = incorrectas;
  document.getElementById('res-sin-resp').textContent  = sinResp;

  setTimeout(() => {
    document.getElementById('res-barra-fill').style.width = pct + '%';
  }, 100);

  let calColor, calText, barColor, emoji;
  if (notaNum >= 9) {
    calColor = '#2DC653'; calText = '¡SOBRESALIENTE!'; barColor = 'linear-gradient(90deg,#2DC653,#1A9E3E)'; emoji = '🏄‍♂️';
  } else if (notaNum >= 7) {
    calColor = '#0077B6'; calText = 'NOTABLE';         barColor = 'linear-gradient(90deg,#00B4D8,#0077B6)'; emoji = '🌊';
  } else if (notaNum >= 5) {
    calColor = '#FFB703'; calText = 'APROBADO';         barColor = 'linear-gradient(90deg,#FFD60A,#FFB703)'; emoji = '🤙';
  } else {
    calColor = '#E05C3A'; calText = 'SUSPENSO';         barColor = 'linear-gradient(90deg,#FF7043,#E05C3A)'; emoji = '🌊';
  }

  document.getElementById('res-emoji').textContent                   = emoji;
  document.getElementById('res-nota').style.color                    = calColor;
  document.getElementById('res-calificacion').textContent            = calText;
  document.getElementById('res-calificacion').style.color            = calColor;
  document.getElementById('res-calificacion').style.borderColor      = calColor;
  document.getElementById('res-barra-fill').style.background         = barColor;
}

// ── Utilidades ──────────────────────────────────────────
function mezclar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Arrancar
document.addEventListener('DOMContentLoaded', init);
