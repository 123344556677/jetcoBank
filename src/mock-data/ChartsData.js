export const lineChartData = {
  series: [
    {
      name: "Last Week",
      data: [
        420000, 450000, 290000, 300000, 190000, 250000, 490000, 650000, 510000,
      ],
      color: "#5AB303",
    },
    {
      name: "This Week",
      data: [
        220000, 110000, 210000, 410000, 250000, 490000, 180000, 220000, 300000,
      ],
      color: "#91DF46",
    },
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
    // title: {
    //   text: "Transaction",
    //   align: "left",
    //   style: {
    //     fontSize: "13px", // Change font size of transaction text
    //     color: "#3e3e3e", // Change color of transaction text
    //   },
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0,
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
        formatter: function (value) {
          return value.toLocaleString(); // Use toLocaleString() to format numbers with commas
        },
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
  },
};
export const systemSettingLineChartData = {
  series: [
    {
      name: "Last Week",
      data: [19000, 20000, 35000, 35000, 20000, 25000, 25000],
      color: "#91DF46",
    },
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
    // title: {
    //   text: "Crypto Rates",
    //   align: "left",
    //   style: {
    //     fontSize: "14px",
    //     color: "#3e3e3e",
    //     fontWeight: "500",
    //   },
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0,
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      labels: {
        style: {
          colors: "#000000",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 10000,
      max: 40000, // Adjusted max value to fit data range
      tickAmount: 4,
      labels: {
        style: {
          colors: "#000000",
          fontSize: "12px",
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
  },
};

export const systemSettingsDownloadlineChartData = {
  series: [
    {
      name: "Last Week",
      data: [420000, 450000, 290000, 300000, 190000, 250000],
      color: "#000000",
    },
    {
      name: "This Week",
      data: [220000, 110000, 210000, 410000, 250000, 490000],
      color: "#8EE30A",
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: false,
      },
      background: "#ffffff", // Set background color to white
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    // title: {
    //   text: "JETCO App Download",
    //   align: "left",
    //   style: {
    //     fontSize: "14px",
    //     color: "#3e3e3e",
    //     fontWeight: "500",
    //   },
    // },
    // subtitle: {
    //   text: "Download",
    //   align: "left",
    //   margin: 5,
    //   offsetX: 0,
    //   offsetY: 30,
    //   style: {
    //     fontSize: "12px",
    //     color: "#3e3e3e",
    //     fontWeight: "400",
    //   },
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0,
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      labels: {
        style: {
          colors: "#000000",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 100000,
      max: 800000,
      tickAmount: 4,
      labels: {
        style: {
          colors: ["#000000"],
          fontSize: "12px",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [0, 0],
      },
    },
    legend: {
      show: false,
    },
    toolbar: {
      show: false,
    },
  },
};
export const WealthManagementLineChartData = {
  series: [
    {
      name: "Last Week",
      data: [19000, 20000, 35000, 35000, 20000, 25000, 25000],
      color: "#91DF46",
    },
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
    // title: {
    //   text: "Crypto Rates",
    //   align: "left",
    //   style: {
    //     fontSize: "13px",
    //     color: "#3e3e3e",
    //   },
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0,
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      labels: {
        style: {
          colors: "#000000",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 10000,
      max: 40000, // Adjusted max value to fit data range
      tickAmount: 4,
      labels: {
        style: {
          colors: "#000000",
          fontSize: "12px",
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
  },
};
export const finServicesAndMessagingTransactionlineChartData = {
  series: [
    {
      name: "This Week",
      data: [220000, 110000, 210000, 410000, 250000, 490000],
      color: "#8EE30A",

    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: false,
      },
      background: "#ffffff", // Set background color to white
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    // title: {
    //   text: "Transaction",
    //   align: "left",
    //   style: {
    //     fontSize: "14px",
    //     color: "#3e3e3e",
    //     fontWeight: "500",
    //   },
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0,
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      labels: {
        style: {
          colors: "#000000",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 100000,
      max: 800000,
      tickAmount: 4,
      labels: {
        style: {
          colors: ["#000000"],
          fontSize: "12px",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [0, 0],
      },
    },
    legend: {
      show: false,
    },
    toolbar: {
      show: false,
    },
  },
};