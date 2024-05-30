<template>
  <v-card class="card-body" elevation="6" width="90%" max-width="100%">
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
        title: {
          text: "Revenue",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        colors: ['#0091da', '#002d69', '#a9b7c9'],
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
.card-body {
  border-radius: 10px;
  display: inline-block;
  margin: 1em 0px;
  overflow: unset;
}
.card-head-avatar {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  position: absolute;
  top: -10px;
}

.card-content {
  float: right;
  opacity: 1;
  margin-bottom: 1.5rem;
}

.card-subtitle {
  font-size: 0.85rem;
  color: rgb(158, 158, 158);
  font-weight: 600;
}
.card-value {
  float: right;
  font-size: 1.4rem;
  font-weight: 800;
}

.card-footer {
  text-align: left;
  margin-left: 5%;
  font-size: 0.9rem;
  color: rgb(158, 158, 158);
}
</style>
