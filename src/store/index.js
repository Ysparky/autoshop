import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        imgUrl: 'p1.png',
        barCode: 'product_01.gif',
        name: 'Mantequilla de Maní',
        price: '13.00',
      },
      {
        id: 2,
        imgUrl: 'p2.jpg',
        barCode: 'product_02.gif',
        name: 'Sal Emsal',
        price: '1.20',
      },
      {
        id: 3,
        imgUrl: 'p3.png',
        barCode: 'product_03.gif',
        name: 'Azucar Rubia',
        price: '13.00',
      },
      {
        id: 4,
        imgUrl: 'p4.jpg',
        barCode: 'product_04.gif',
        name: 'Gaseosa Coca Cola 600ml',
        price: '2.50',
      },
      {
        id: 5,
        imgUrl: 'p5.png',
        barCode: 'product_05.gif',
        name: 'Gaseosa Inca Cola 600ml',
        price: '2.50',
      },
      {
        id: 6,
        imgUrl: 'p6.jpg',
        barCode: 'product_06.gif',
        name: 'Gaseosa Fanta 600ml',
        price: '2.50',
      },
      {
        id: 7,
        imgUrl: 'p7.jpg',
        barCode: 'product_07.gif',
        name: 'Gaseosa Sprite 600ml',
        price: '2.50',
      },
      {
        id: 8,
        imgUrl: 'p8.jpg',
        barCode: 'product_08.gif',
        name: 'Doritos',
        price: '1.20',
      },
      {
        id: 9,
        imgUrl: 'p9.jpg',
        barCode: 'product_09.gif',
        name: 'Cheese Tris',
        price: '1.20',
      },
      {
        id: 10,
        imgUrl: 'p10.jpg',
        barCode: 'product_10.gif',
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
