const ctx = document.getElementById("chart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Visitors",
        data: [3, 5, 2.8, 4.2, 1.9],
        borderColor: "#3b82f6",
        borderWidth: 3,
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.5,
        pointRadius: function (context) {
          return context.dataIndex === 2 ? 6 : 0;
        },
        pointBorderColor: "#3b82f6",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 1,
        ticks: {
          stepSize: 1,
          callback: function (value) {
            return value + "M";
          },
          color: "#aaa",
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: "#aaa",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      annotation: {
        annotations: {
          line: {
            type: "line",
            xMin: 2,
            xMax: 2,
            yMax: 2.7,
            borderColor: "#C3C8CE",
            borderWidth: 1,
            borderDash: [4, 4],
          },
        },
      },
    },
    elements: {
      line: {
        capBezierPoints: true,
      },
    },
  },
  plugins: [Chart.registry.getPlugin("annotation")],
});
