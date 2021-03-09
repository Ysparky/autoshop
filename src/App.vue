<template>
  <v-app>
    <v-main class="pa-12">
      <v-container>
        <v-row>
          <v-col cols="8" style="border: 1px solid">
            <v-row>
              <v-col
                v-for="(p, i) in getProducts"
                :key="i"
                cols="4"
                class="py-0"
              >
                <product-card :product="p" @add-to-cart="callAddProduct" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" align-self="center">
            <shopping-product
              v-for="(o, i) in getOrder"
              :key="i"
              :showDivider="i != 5"
              :orderDetail="o"
            />
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
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
    ShoppingProduct,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["getProducts", "getOrder"]),
  },
  methods: {
    ...mapActions(["callAddProduct"]),
  },
};
</script>

<style>
.numeric-input {
  text-align: center !important;
}
</style>


