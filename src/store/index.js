import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        imgUrl: "p1.png",
        barCode: "product_01.gif",
        barCodeValue: "00010001",
        name: "Mantequilla de Maní",
        price: "13.00",
        rating: "2"
      },
      {
        id: 2,
        imgUrl: "p2.jpg",
        barCode: "product_02.gif",
        barCodeValue: "00010128",
        name: "Sal Emsal",
        price: "1.20",
        rating: "2"
      },
      {
        id: 3,
        imgUrl: "p3.png",
        barCode: "product_03.gif",
        barCodeValue: "00010230",
        name: "Azucar Rubia",
        price: "13.00",
        rating: "2"
      },
      {
        id: 4,
        imgUrl: "p4.jpg",
        barCode: "product_04.gif",
        barCodeValue: "00022540",
        name: "Gaseosa Coca Cola 600ml",
        price: "2.50",
        rating: "2"
      },
      {
        id: 5,
        imgUrl: "p5.png",
        barCode: "product_05.gif",
        barCodeValue: "00022444",
        name: "Gaseosa Inca Cola 600ml",
        price: "2.50",
        rating: "2"
      },
      {
        id: 6,
        imgUrl: "p6.jpg",
        barCode: "product_06.gif",
        barCodeValue: "00007123",
        name: "Gaseosa Fanta 600ml",
        price: "2.50",
        rating: "2"
      },
      {
        id: 7,
        imgUrl: "p7.jpg",
        barCode: "product_07.gif",
        barCodeValue: "00007144",
        name: "Gaseosa Sprite 600ml",
        price: "2.50",
        rating: "2"
      },
      {
        id: 8,
        imgUrl: "p8.jpg",
        barCode: "product_08.gif",
        barCodeValue: "00007809",
        name: "Doritos",
        price: "1.20",
        rating: "2"
      },
      {
        id: 9,
        imgUrl: "p9.jpg",
        barCode: "product_09.gif",
        barCodeValue: "00007017",
        name: "Cheese Tris",
        price: "1.20",
        rating: "2"
      },
      {
        id: 10,
        imgUrl: "p10.jpg",
        barCode: "product_10.gif",
        barCodeValue: "00045099",
        name: "Papas Lay's",
        price: "1.20",
        rating: "2"
      }
    ],
    order: []
  },
  getters: {
    products: state => state.products,
    order: state => state.order
  },
  mutations: {
    addProductToOrder: (state, payload) => {
      const product = payload;
      const idx = state.order.findIndex(p => p.id == product.id);
      if (idx != -1) {
        state.order[idx].quantity = state.order[idx].quantity + 1;
        state.order[idx].subtotal = parseFloat(
          state.order[idx].quantity * state.order[idx].price
        ).toFixed(2);
      } else {
        state.order.push({
          ...payload,
          quantity: 1,
          subtotal: payload.price
        });
      }
    },
    subtractProductFromOrder: (state, payload) => {
      const product = payload;
      const idx = state.order.findIndex(p => p.id == product.id);
      state.order[idx].quantity -= 1;
      if (state.order[idx].quantity <= 0) {
        //delete from array
        state.order.splice(idx, 1);
      }
    },
    deleteProductFromOrder: (state, payload) => {
      const product = payload;
      const idx = state.order.findIndex(p => p.id == product.id);
      if (idx != -1) {
        state.order.splice(idx, 1);
      }
    }
  },
  actions: {
    callAddProduct: (context, product) =>
      context.commit("addProductToOrder", product),
    callSubstractProduct: (context, product) =>
      context.commit("subtractProductFromOrder", product),
    callDeleteProduct: (context, product) =>
      context.commit("deleteProductFromOrder", product)
  },
  modules: {}
});
