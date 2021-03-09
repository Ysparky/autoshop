<template>
  <div>
    <v-row class="my-1" align="center">
      <v-col cols="2">
        <v-img height="35" :src="orderDetail.imgUrl"></v-img>
      </v-col>
      <v-col>
        <p class="ma-0">{{ orderDetail.name }}</p>
      </v-col>
      <v-col>
        <p class="ma-0">{{ orderDetail.price }}</p>
      </v-col>
      <v-col>
        <vue-numeric-input
          v-model="orderDetail.quantity"
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
      <v-col>
        <p class="ma-0">{{ orderDetail.subtotal }}</p>
      </v-col>
    </v-row>
    <v-divider v-show="showDivider" />
  </div>
</template>

<script>
export default {
  props: {
    showDivider: Boolean,
    orderDetail: Object,
  },
  data() {
    return {
      qty: 0,
    };
  },
};
</script>