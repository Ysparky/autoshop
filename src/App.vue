<template>
  <v-app>
    <v-main class="pa-12">
      <v-container>
        <v-row>
          <v-col cols="8" style="border: 1px solid">
            <v-row>
              <v-col v-for="i in 10" :key="i" cols="3" class="py-0">
                <product-card />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" align-self="center">
            <shopping-product v-for="i in 5" :key="i" :showDivider="i != 5" />
            <v-row class="my-2">
              <v-spacer />
              <v-btn color="primary"> Checkout </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";
import ShoppingProduct from "./components/ShoppingProduct.vue";

export default {
  components: {
    ProductCard,
    ShoppingProduct,
  },
  data: () => ({}),
};
</script>

<style>
.numeric-input {
  text-align: center !important;
}
</style>


