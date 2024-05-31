<template>
  <v-layout class="app-layout">
    <v-app-bar class="m-view" v-if="!isDesktop" scroll-behavior="hide" :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon>
          <font-awesome-icon :icon="['fas', 'bars']" @click="sidenav = !sidenav"/>
        </v-app-bar-nav-icon>
      </template>
 
    </v-app-bar>
    <v-navigation-drawer class="side-drawer app-bg m-view" v-model="sidenav">
      <v-card class="side-drawer-card" max-width="344">
        <v-card-item>
          <v-card-title>
            <v-img lazy="true"
              src="https://www.homebuyerwallet.com/assets/img/Logo-Icon-Text.png"
            ></v-img>
          </v-card-title>
        </v-card-item>

        <v-list color="transparent" class="varela-font menu-item">
          <v-list-item v-for="(item, i) in menulist" :key="i" class="">
            <v-btn
              @click="selectMenu(i)"
              :style="
                item.active ? 'background-color: #0091da; color: white;' : ''
              "
              class="menu-item-list"
              style="justify-content: flex-start"
            >
              <font-awesome-icon
                class="mr-2 icon-list"
                :icon="['fas', item.ico]"
              />
              {{ item.name }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-navigation-drawer class="side-drawer app-bg w-view" v-model="isDesktop">
      <v-card class="side-drawer-card" max-width="344">
        <v-card-item>
          <v-card-title>
            <v-img
              src="https://www.homebuyerwallet.com/assets/img/Logo-Icon-Text.png"
            ></v-img>
          </v-card-title>
        </v-card-item>

        <v-list color="transparent" class="varela-font menu-item">
          <v-list-item v-for="(item, i) in menulist" :key="i" class="">
            <v-btn
              @click="selectMenu(i)"
              :style="
                item.active ? 'background-color: #0091da; color: white;' : ''
              "
              class="menu-item-list"
              style="justify-content: flex-start"
            >
              <font-awesome-icon
                class="mr-2 icon-list"
                :icon="['fas', item.ico]"
              />
              {{ item.name }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-main class="app-bg">
      <v-container style="height: 100vh; max-height: auto">
        <v-row no-gutters>
          <v-col cols="col" style="display: inline-flex">
            <h1 class="varela-font head-label">Dashboard</h1>
          </v-col>
        </v-row>
        <!-- STAT CARDS -->
        <v-row no-gutters>
          <v-col cols="col" xl="4" lg="4" md="4" sm="12">
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
          <v-col cols="col" xl="4" lg="4" md="4" sm="12">
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
          <v-col cols="col" xl="4" lg="4" md="4" sm="12">
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
          <v-col cols="col" lg="6" md="6" sm="12">
            <ProgramImportChart></ProgramImportChart>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import CardStats from "@/components/CardStats.vue";
import RevenueChart from "@/components/RevenueChart.vue";
import ProgramImportChart from "@/components/ProgramImportChart.vue";

export default {
  name: "HomeView",
  components: {
    CardStats,
    RevenueChart,
    ProgramImportChart,
  },
  data() {
    return {
      isDesktop: true,
      sidenav: false,
      windowWidth: window.innerWidth,
      menulist: [
        { name: "Dashboard", ico: "square-poll-vertical", active: true },
        { name: "Programs", ico: "computer", active: false },
        { name: "Loans", ico: "user-tie", active: false },
      ],
    };
  },
  created(){ 
    if(this.windowWidth < 1024) {
      this.isDesktop = false;
    }
    if(this.isMobile) {
      this.sidenav = false;
    }
  },
  methods: {
    selectMenu(index) {
      this.menulist.forEach((e, i) => {
        if (i == index) {
          e.active = true;
        } else {
          e.active = false;
        }
      });
    },
    
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
  /* background-color: red; */
}

.menu-item {
  font-weight: 500;
  color: #002d69 !important;
}
.icon-list {
  width: 20px !important;
}
.menu-item-list {
  border-radius: 10px !important;
  margin-bottom: 0.5rem;
  width: 100% !important;
  text-align: left;
}

.menu-item-list:hover {
  cursor: pointer;
}
/* SIDE DRAWER STYLE END */

/* MAIN LAYOUT STYLE START */
.head-label {
  font-size: 1em;
  font-weight: 600;
}

/* MAIN LAYOUT STYLE END */
</style>
