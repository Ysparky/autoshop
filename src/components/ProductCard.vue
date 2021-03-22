<template>
  <v-card class="mx-auto my-2" @click="addToCart">
    <v-img
      height="250"
      :src="require('../assets/products/' + product.imgUrl)"
    ></v-img>
    <v-card-text> {{ product.imgUrl }}</v-card-text>
    <v-card-title> S/. {{ product.price }}</v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    product: Object
  },
  data: () => ({
    //
  }),

  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.product);
    }
  }
};
</script>
