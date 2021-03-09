import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        imgUrl: 'p1.png',
        barCode: '../assets/bar-codes/product_01.gif',
        name: 'Mantequilla de Maní',
        price: '13.00',
      },
      {
        id: 2,
        imgUrl: '../assets/products/p2.jpg',
        barCode: '../assets/bar-codes/product_02.gif',
        name: 'Sal Emsal',
        price: '1.20',
      },
      {
        id: 3,
        imgUrl: '../assets/products/p3.png',
        barCode: '../assets/bar-codes/product_03.gif',
        name: 'Azucar Rubia',
        price: '13.00',
      },
      {
        id: 4,
        imgUrl: '../assets/products/p4.jpg',
        barCode: '../assets/bar-codes/product_04.gif',
        name: 'Gaseosa Coca Cola 600ml',
        price: '2.50',
      },
      {
        id: 5,
        imgUrl: '../assets/products/p5.png',
        barCode: '../assets/bar-codes/product_05.gif',
        name: 'Gaseosa Inca Cola 600ml',
        price: '2.50',
      },
      {
        id: 6,
        imgUrl: '../assets/products/p6.jpg',
        barCode: '../assets/bar-codes/product_06.gif',
        name: 'Gaseosa Fanta 600ml',
        price: '2.50',
      },
      {
        id: 7,
        imgUrl: '../assets/products/p7.jpg',
        barCode: '../assets/bar-codes/product_07.gif',
        name: 'Gaseosa Sprite 600ml',
        price: '2.50',
      },
      {
        id: 8,
        imgUrl: '../assets/products/p8.jpg',
        barCode: '../assets/bar-codes/product_08.gif',
        name: 'Doritos',
        price: '1.20',
      },
      {
        id: 9,
        imgUrl: '../assets/products/p9.jpg',
        barCode: '../assets/bar-codes/product_09.gif',
        name: 'Cheese Tris',
        price: '1.20',
      },
      {
        id: 10,
        imgUrl: '../assets/products/p10.jpg',
        barCode: '../assets/bar-codes/product_10.gif',
        name: "Papas Lay's",
        price: '1.20',
      },
    ],
    order: [],
  },
  getters: {
    getProducts: state => state.products,
    getOrder: state => state.order
  },
  mutations: {
    addProductToOrder: (state, payload) => {
      console.log("clicked");
      const product = payload;
      const idx = state.order.findIndex(p => p.id == product.id);
      if (idx != -1) {
        state.order[idx].quantity = state.order[idx].quantity + 1;
        state.order[idx].subtotal = state.order[idx].quantity * state.order[idx].price;
      } else {
        state.order.push({
          ...payload,
          quantity: 1,
          subtotal: payload.price
        });
      }
    }
  },
  actions: {
    callAddProduct: (context, product) => context.commit('addProductToOrder', product),
  },
  modules: {
  }
})
