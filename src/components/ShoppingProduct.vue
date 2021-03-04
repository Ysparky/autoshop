<template>
  <div>
    <v-row class="my-1" align="center">
      <v-col cols="2">
        <v-img
          height="35"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
      </v-col>
      <v-col>
        <p class="ma-0">Cube 3x3</p>
      </v-col>
      <v-col>
        <vue-numeric-input
          v-model="qty"
          :min="1"
          :max="10"
          :step="2"
        ></vue-numeric-input>
      </v-col>
      <v-col cols="2">
        <v-btn icon color="indigo">
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider v-show="showDivider"/>
  </div>
</template>

<script>
export default {
  props: ["showDivider"],
  data() {
    return {
      qty: 0,
    };
  },
};
</script>