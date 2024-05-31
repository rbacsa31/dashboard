<template>
  <v-card class="card-body" elevation="6" width="95%" max-width="100%">
    <v-row class="ml-5 mt-3" no-gutters>
      <v-label class="varela-font chart-label">Revenue</v-label>
    </v-row>
    <apexchart
      class="varela-font"
      type="line"
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
          name: "Revenue",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Profit",
          type: "column",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
        {
          name: "Profit Margin",
          type: "column",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
        },
        stroke: {
          width: [0, 4],
        },
        // title: {
        //   text: "Revenue",
        //   style: {
        //     fontSize: "14px",
        //     fontFamily: "Varela Round",
        //     color: "#002d69",
        //     margin: "10px"
        //   },
        // },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        colors: ["#0091da", "#002d69", "#a9b7c9"],
        labels: [
          "01 Jan 2024",
          "01 Feb 2024",
          "01 Mar 2024",
          "01 Apr 2024",
          "01 May 2024",
          "01 Jun 2024",
          "01 Jul 2024",
          "01 Aug 2024",
          "01 Sep 2024",
          "01 Oct 2024",
          "01 Nov 2024",
          "01 Dec 2024",
        ],
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            title: {
              text: "Revenue",
            },
          },
          {
            opposite: true,
            title: {
              text: "Profit",
            },
          },
        ],
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
  margin-left: 2%;
}
/* APEX CHART CARD STYLE END */
</style>
