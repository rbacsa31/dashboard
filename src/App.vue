<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
.varela-font {
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.primary-color {
  color: #002d69;
}

/* Media Query for Mobile Devices */
@media (max-width: 480px) {
  .w-view {
    display: none !important;
  }
  .app-layout {
    height: 1600px !important;
  }
  
  .v-navigation-drawer__scrim {
    height: 1600px !important;

  }
}
/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 481px) and (max-width: 767px) {
  .w-view {
    display: none !important;
  }

  .app-layout {
    height: 1600px !important;
  }
  
  .v-navigation-drawer__scrim {
    height: 1600px !important;

  }
}

/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px) {
  .w-view {
    display: none !important;
  }
  .app-layout {
    height: 1600px !important;
  }

  .v-navigation-drawer__scrim {
    height: 1600px !important;

  }
}

/* Media Query for Laptops and Desktops */
@media (min-width: 1025px) and (max-width: 1280px) {
  .m-view {
    display: none !important;
  }
 
}

/* Media Query for Large screens */
@media (min-width: 1281px) {
  .m-view {
    display: none !important;
  }
}
</style>
