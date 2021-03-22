<template>
  <div class="home" @click="focusInput">
    <v-container fluid class="px-12">
      <v-row align="center">
        <v-col>
          <v-text-field
            solo
            autofocus
            clearable
            label="BAR CODE"
            ref="inputRef"
            v-model="lectorValue"
            hide-details="true"
          ></v-text-field>
        </v-col>
        <v-col>
          <h4>Input Value: {{ auxLectorVal ? auxLectorVal : "no value" }}</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="7" class="scrollable">
          <v-row>
            <v-col cols="4" v-for="(p, i) in products" :key="i">
              <v-card>
                <v-img
                  contain
                  class="white--text"
                  height="180px"
                  :src="require('@/assets/products/' + p.imgUrl)"
                />
                <v-card-title>
                  <div class="mx-5">
                    <span class="title blue--text">{{ p.name }}</span
                    ><br />
                    <v-rating
                      readonly
                      small
                      dense
                      background-color="orange"
                      color="orange"
                      :v-model="p.rating"
                      :value="parseInt(p.rating)"
                    ></v-rating>
                    <span class="title"> S/. {{ p.price }}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                    large
                    rounded
                    depressed
                    color="grey lighten-2"
                    class="mx-auto"
                    @click="callAddProduct(p)"
                  >
                    ADD TO CART
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5" align-self="center">
          <!-- <v-row>
            <v-col>
              <h3>Shopping Cart</h3>
            </v-col>
            <v-col>
              <div id="price">Price</div>
            </v-col>
            <v-col>
              <div id="quantity">Quantity</div>
            </v-col>
            <v-col>
              <div id="total">Total</div>
            </v-col>
          </v-row> -->
          <v-row v-for="(o, i) in order" :key="i" no-gutters align="center">
            <v-col cols="auto">
              <img
                :src="require('@/assets/products/' + o.imgUrl)"
                width="80px"
                alt=""
              />
            </v-col>
            <v-col cols="2">
              <h4>{{ o.name }}</h4>
            </v-col>
            <v-col cols="auto">
              <p class="mx-2 my-0">S/. {{ o.price }}</p>
            </v-col>
            <v-col cols="1">
              <div class="qty-minus" @click="callSubstractProduct(o)">
                <v-btn class="mx-2" outlined fab x-small color="primary">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="2" class="text-center">
              <div class="qty">{{ o.quantity }}</div>
            </v-col>
            <v-col cols="1">
              <div class="qty-plus" @click="callAddProduct(o)">
                <v-btn class="mx-2" outlined fab x-small color="primary">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="1">
              <div class="del">
                <v-btn class="mx-2" outlined fab x-small color="error">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="auto">
              <div class="totalprice">S/. {{ o.subtotal }}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer />
            <h5 v-if="total() > 0">Total: S/. {{ total() }}</h5>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return { lectorValue: "", auxLectorVal: "" };
  },
  computed: {
    ...mapGetters(["products", "order"])
  },
  methods: {
    ...mapActions(["callAddProduct", "callSubstractProduct"]),
    total() {
      let sum = 0;
      this.order.forEach(o => {
        sum += parseFloat(o.subtotal);
      });
      return parseFloat(sum).toFixed(2);
    },
    focusInput() {
      this.$refs.inputRef.focus();
    }
    // minusQty(product) {
    //   const idx = this.order.findIndex((p) => p.id == product.id);
    //   this.order[idx].quantity -= 1;
    //   if (this.order[idx].quantity <= 0) {
    //     //delete from array
    //     this.order.splice(idx, 1);
    //   }
    // },
    // plusQty(product) {
    //   const idx = this.order.findIndex((p) => p.id == product.id);
    //   this.order[idx].quantity += 1;
    // },
  },
  watch: {
    lectorValue(newVal) {
      // console.log(newVal);
      if (newVal) {
        if (newVal.length == 8) {
          const foundProduct = this.products.find(
            p => p.barCodeValue == newVal
          );
          if (foundProduct) {
            this.callAddProduct(foundProduct);
          }
          this.auxLectorVal = newVal;
          this.$refs.inputRef.clearableCallback();
        }
      }
    }
  }
};
</script>

<style scoped>
.scrollable {
  height: 85vh;
  overflow-y: auto;
}
</style>
