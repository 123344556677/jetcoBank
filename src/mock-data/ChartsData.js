export const lineChartData = {
    series: [
      {
        name: "Last Week",
        data: [420000, 450000, 290000, 300000, 190000, 250000, 490000, 650000, 510000],
        color: '#5AB303'
      },
      {
        name: "This Week",
        data: [220000, 110000, 210000, 410000, 250000, 490000, 180000, 220000, 300000],
        color: '#91DF46'
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      title: {
        text: "Transaction",
        align: "left",
        style: {
          fontSize: "13px", // Change font size of transaction text
          color: "#3e3e3e", // Change color of transaction text
        },
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      yaxis: {
        min: 100000,
        max: 800000,
        tickAmount: 4,
        labels: {
          style: {
            colors: ["#7D96B3"], // Change color of y-axis labels
            fontSize: "12px", // Change font size of y-axis labels
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      legend: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    }
  };