document.addEventListener("DOMContentLoaded", () => {
  console.log("Script cargado correctamente.");
});


const escribir = (elemento, texto, velocidad = 80) => {
  let i = 0;
  const escribirTexto = () => {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribirTexto, velocidad);
    }
  };
  elemento.textContent = "";
  escribirTexto();
};

document.addEventListener("DOMContentLoaded", () => {

  const titulo = document.querySelector("header h1");
  if (titulo) {
    escribir(titulo, "Lenguajes de Programación Populares");
  }


  const boton = document.querySelector(".formulario button");
  if (boton) {
    boton.classList.add("efecto-pulso");
  }


  const bloques = document.querySelectorAll(".portada, .info-extra, .video, .formulario");
  bloques.forEach(bloque => {
    bloque.addEventListener("mouseenter", () => {
      bloque.style.boxShadow = "0 0 20px #1abc9c";
      bloque.style.transition = "box-shadow 0.3s ease";
    });
    bloque.addEventListener("mouseleave", () => {
      bloque.style.boxShadow = "none";
    });
  });


  const portada = document.querySelector(".portada");
  if (portada) {
    for (let i = 0; i < 20; i++) {
      const burbuja = document.createElement("div");
      burbuja.classList.add("burbuja");
      burbuja.style.left = Math.random() * 100 + "%";
      burbuja.style.animationDuration = (3 + Math.random() * 5) + "s";
      portada.appendChild(burbuja);
    }
  }


  const form = document.querySelector(".formulario form") || document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();


      if (!document.querySelector("#mensaje-enviado")) {
        const mensaje = document.createElement("p");
        mensaje.id = "mensaje-enviado";
        mensaje.textContent = "✅ ¡Mensaje enviado correctamente! Gracias por contactarnos.";
        mensaje.style.color = "#27ae60";
        mensaje.style.fontWeight = "bold";
        mensaje.style.marginTop = "15px";
        form.appendChild(mensaje);

        form.reset();

        setTimeout(() => {
          mensaje.remove();
        }, 4000);
      }
    });
  }
});


document.querySelectorAll('.main-content section h2').forEach((titulo) => {
  titulo.style.userSelect = 'none';
  titulo.addEventListener('click', () => {
    const section = titulo.parentElement;
    section.classList.toggle('collapsed');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-curioso");
  const parrafo = document.getElementById("curioso-texto");

  boton.addEventListener("click", () => {
   
    parrafo.classList.remove("oculto");
    parrafo.textContent = "El nombre 'Java' viene del café... ¡Así que técnicamente un programador Java nunca está fuera de 'código' mientras toma café! ☕😄";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnMostrarMensaje");
  const mensaje = document.getElementById("mensaje");

  btn.addEventListener("click", () => {
    mensaje.style.display = "block";
    mensaje.classList.add("mensaje-visible");
    btn.disabled = true;
    btn.innerText = "¡Gracias por usar JavaScript!";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnMostrarMensaje");
  const mensaje = document.getElementById("mensaje");

  btn.addEventListener("click", () => {
    mensaje.style.display = "block";
    mensaje.style.animation = "fadeIn 0.6s";
    btn.disabled = true;
    btn.innerText = "¡Gracias!";
  });
});

function mostrarMas() {
  const extra = document.querySelector('.extra-info');
  extra.classList.toggle('hidden');
  if (!extra.classList.contains('hidden')) {
    alert("¡Sigue aprendiendo! Python tiene mucho que ofrecer.");
  }
}

window.addEventListener("load", () => {
  document.querySelectorAll('.curioso').forEach(el => {
    el.style.opacity = "1";
  });

  const mensaje = document.querySelector('.agradecimiento');
  setTimeout(() => {
    mensaje.textContent += " ¡Sigue explorando y programando!";
  }, 3000);
});
