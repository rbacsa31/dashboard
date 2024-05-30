<template>
  <div>
    <v-card class="card-body" elevation="6" width="90%" max-width="344">
      <v-card-item>
        <v-card-title
          class="card-head-avatar py-4"
          :style="{ 'background': avatarBg }"
        >
        <font-awesome-icon size="lg" style="color: white;" :icon="['fas', avatarico]" />
        </v-card-title>
        <v-card-subtitle class="card-content varela-font">
          <h5 class="card-subtitle">{{ subtitle }}</h5>
          <h3 class="card-value primary-color">{{ subvalue }}</h3>
        </v-card-subtitle>
      </v-card-item>
      <v-divider></v-divider>

      <v-card-text
        class="pt-4 varela-font"
        style="border-radius: 0 0 10px 10px"
      >
        <p class="card-footer">
          <span style="font-weight: 600;" :style="{ 'color': statscolor }">{{
            footerstats
          }}</span
          >{{ footervalue }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardStats",
  props: {
    msg: String,
    avatarico: String,
    avatarBg: String,
    subtitle: String,
    subvalue: String,
    footervalue: String,
    footerstats: String,
    statscolor: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body {
  border-radius: 10px;
  display: inline-block;
  margin: 2em 0px;
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
