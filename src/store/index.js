import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    asc: true,
  },

  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    sortPropertiesByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price; 
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
  },

  actions: {
    getProducts: async(context) => {
      fetch("https://lylebrown010.github.io/Data/db.json")
      .then((res) => res.json())
      .then((products) => context.commit("setProducts", products)); 
    }, 
    getProduct: async(context, id) => {
      fetch("https://lylebrown010.github.io/Data/db.json/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product)); 
    }, 
  },
});
