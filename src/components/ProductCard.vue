<template>
  <v-card class="mx-auto my-2" @click="addToCart">
    <v-img height="250" :src="'../assets/products/p1.png'"></v-img>
    <v-card-text> {{ product.name }}</v-card-text>
    <v-card-title> S/. {{ product.price }}</v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    product: Object,
  },
  data: () => ({
    //
  }),

  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.product);
    },
  },
};
</script>