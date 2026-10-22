
import Chart from "chart.js/auto";

// Obtener el canvas
const ctx = document.getElementById("myChart");

// Crear el gráfico inicial
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Número de votos",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "green",
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Actualizar el gráfico al pulsar el botón
const boton = document.getElementById("updateChart");

boton.addEventListener("click", () => {

  const nombre = document.getElementById("chartTitle").value;

  const color = document.querySelector(
    'input[name="barColor"]:checked'
  ).value;

  const etiquetas = document.getElementById("chartLabels")
    .value.split(",").map(e => e.trim());

  const textos = document.getElementById("chartValues")
    .value.split(",");

  const valores = textos.map(v => Number(v.trim()));

  // Comprobar los datos
  if (
    etiquetas.length !== valores.length ||
    etiquetas.some(e => e === "") ||
    textos.some(v => v.trim() === "") ||
    valores.some(v => !Number.isFinite(v))
  ) {
    alert("Introduce etiquetas y valores válidos.");
    return;
  }

  // Modificar los datos del gráfico
  chart.data.labels = etiquetas;
  chart.data.datasets[0].label = nombre;
  chart.data.datasets[0].data = valores;
  chart.data.datasets[0].backgroundColor = color;

  // Actualizar el título
  document.getElementById("graphicTitle").textContent = nombre;

  // Redibujar el gráfico
  chart.update();
});
