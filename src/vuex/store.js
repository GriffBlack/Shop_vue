// import Vue from 'vue'
// import Vue  from 'vue';
// import Vuex from 'vuex'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '../App.vue'
import axios from 'axios'



const store = createStore({
  state() {
    return {
      products: [],
      cart: [],
    };
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      state.cart.push(product);
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});
const app = createApp(App);
app.use(store);

export default store;