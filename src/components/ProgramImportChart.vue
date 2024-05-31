<template>
  <v-card class="card-body" elevation="6" width="95%" max-width="100%">
    <v-row class="ml-5 mt-3" no-gutters>
      <v-label class="varela-font chart-label">Program Imports</v-label>
    </v-row>
    <apexchart
      class="varela-font"
      type="bar"
      height="auto"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </v-card>
</template>

<script>
import ApexCharts from "apexcharts";
export default {
  name: "Chart",
  components: {
    ApexCharts: "apexchart",
  },
  props: {
    // msg: String,
    // avatarico: String,
    // avatarBg: String,
    // subtitle: String,
    // subvalue: String,
    // footervalue: String,
    // footerstats: String,
    // statscolor: String,
  },
  data() {
    return {
      series: [
        {
          name: "Program Imports",
          data: [6, 3.1, 4.0, 5.0, 10.0],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#002d69"],
          },
        },
        fill: {
          colors: ["#0060b9", "#002d69"],
        },
        xaxis: {
          categories: [
            "Jan '24",
            "Feb '24",
            "Mar '24",
            "Apr '24",
            "May '24",
            "Jun '24",
            "Jul '24",
            "Aug '24",
            "Sep '24",
            "Oct '24",
            "Nov '24",
            "Dec '24",
          ],
          position: "top",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#0060b9",
                colorTo: "#002d69",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* APEX CHART CARD STYLE START */
.card-body {
  border-radius: 10px;
  display: inline-block;
  margin: 1em 0px;
  overflow: unset;
}

.chart-label {
  color: #002d69;
  opacity: 1;
  font-weight: 600;
  margin-left: 1%;
}
/* APEX CHART CARD STYLE END */
</style>
