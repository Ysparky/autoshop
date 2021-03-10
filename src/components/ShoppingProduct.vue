<template>
  <div>
    <v-row class="my-1" align="center">
      <v-col cols="2">
        <v-img
          height="35"
          :src="require('../assets/products/' + orderDetail.imgUrl)"
        ></v-img>
      </v-col>
      <v-col>
        <p class="ma-0">{{ orderDetail.name }}</p>
      </v-col>
      <v-col>
        <p class="ma-0">{{ orderDetail.price }}</p>
      </v-col>
      <v-col>
        <vue-numeric-input
          align="center"
          v-model="orderDetail.quantity"
          :min="1"
          :step="1"
          @change="changeQuantity"
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
    return {};
  },
  methods: {
    changeQuantity: (newVal) => {
      console.log(this.orderDetail.quantity);
      console.log(newVal);
    },
  },
  watch: {
    orderDetail: (newVal, oldVal) => {
      console.log(newVal);
      console.log(oldVal);
      const greater = true;
      if (oldVal.quantity > newVal.quantity) {
        greater = false;
      }
      this.$emit("edit-quantity", {
        greater,
        productId: orderDetail.id,
      });
    },
  },
};
</script>