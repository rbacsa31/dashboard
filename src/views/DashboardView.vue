<template>
  <v-layout class="app-layout">
    <v-navigation-drawer class="side-drawer app-bg" v-model="sidenav">
      <v-card class="side-drawer-card" max-width="344">
        <v-card-item>
          <v-card-title> Card title </v-card-title>

          <v-card-subtitle> Card subtitle secondary text </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
    <v-main class="app-bg">
      <v-container style="height: 100vh">
        <v-row no-gutters>
          <v-col cols="col" style="display: inline-flex">
            <h1 class="varela-font head-label">Dashboard</h1>
          </v-col>
        </v-row>
        <!-- STAT CARDS -->
        <v-row no-gutters class="px-2">
          <v-col cols="col" lg="4" md="4" sm="12">
            <CardStats
              avatarico="user"
              avatarBg="radial-gradient(circle, rgba(106,200,247,1) 0%, rgba(0,145,218,1) 100%)"
              subtitle="Users"
              subvalue="300+"
              statscolor="#4caf50"
              footerstats="5%"
              footervalue=" than last month"
            ></CardStats>
          </v-col>
          <v-col cols="col" lg="4" md="4" sm="12">
            <CardStats
              avatarico="laptop-file"
              avatarBg="radial-gradient(circle, rgba(230,130,77,1) 2%, rgba(227,82,5,1) 86%)"
              subtitle="Program Count"
              subvalue="500+"
              statscolor="#4caf50"
              footerstats="50%"
              footervalue=" than last month"
            ></CardStats>
          </v-col>
          <v-col cols="col" lg="4" md="4" sm="12">
            <CardStats
              avatarico="user-tie"
              avatarBg="radial-gradient(circle, rgba(255,229,79,1) 0%, rgba(253,218,13,1) 100%)"
              subtitle="Loan Officers"
              subvalue="200+"
              statscolor="#f44335"
              footerstats="-3%"
              footervalue=" than yesterday"
            ></CardStats>
          </v-col>
          <!-- <v-col cols="col" lg="3" md="3" sm="12"> 
            <CardStats avatarBg="radial-gradient(circle, rgba(106,200,247,1) 0%, rgba(0,145,218,1) 100%)" subtitle="Loan Officers" subvalue="200+"  statscolor="#4caf50" footerstats="5%" footervalue=" than last month"></CardStats>
          </v-col> -->
        </v-row>
        <v-row no-gutters>
          <v-col cols="col" lg="6" md="6" sm="12">
            <RevenueChart></RevenueChart>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import CardStats from "@/components/CardStats.vue";
import RevenueChart from "@/components/RevenueChart.vue"
export default {
  name: "HomeView",
  components: {
    CardStats,
    RevenueChart
  },
  data() {
    return {
      sidenav: true,
    };
  },
};
</script>

<style scoped>
.app-bg {
  background-color: rgb(245, 245, 245);
}

/* SIDE DRAWER STYLE START */
.side-drawer {
  border: none !important;
  padding: 1rem 0.5rem;
  height: 100vh;
  /* background-color: red; */
}

.side-drawer-card {
  height: 100%;
  border-radius: 10px;
  border: none !important;
}

/* SIDE DRAWER STYLE END */

/* MAIN LAYOUT STYLE START */
.head-label {
  font-size: 1em;
  font-weight: 600;
}

/* MAIN LAYOUT STYLE END */
</style>
