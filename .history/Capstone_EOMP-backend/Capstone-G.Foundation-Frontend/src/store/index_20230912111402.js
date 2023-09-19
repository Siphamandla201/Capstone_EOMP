import { createStore } from "vuex";
import axios from "axios";

const apiUrl = "https://grey-foundation.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    FeaturedProducts: null,
    msg: null,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, values) {
      state.user = values;
    },
    setProducts(state, values) {
      state.products = values;
    },
    setMessage(state, values) {
      state.msg = values;
    },
  },
  actions: {
    async register(context, payload) {
      try {
        const res = await axios.post(`${apiUrl}register`, payload);
        const { msg, err } = await res.data;
        if (err) {
          context.commit("setMessage", err);
        } else {
          context.commit("setUsers", msg);
          console.log("User has been registered");
        }
      } catch (error) {
        console.error("Error registering user:", error);
      }
    },
    async getUser(context, id) {
      try {
        const res = await axios.get(`${apiUrl}users/${id}`);
        const { result, err } = await res.data;
        if (result) {
          context.commit("setUser", result);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.error("Error getting user:", error);
      }
    },
    async getUsers(context) {
      try {
        const res = await axios.get(`${apiUrl}users`);
        const { result, err } = await res.data;
        if (result) {
          context.commit("setUsers", result);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.error("Error getting users:", error);
      }
    },
    async getProducts(context) {
      try {
        const res = await axios.get(`${apiUrl}products`);
        const { result, err } = await res.data;
        if (result) {
          context.commit("setProducts", result);
          FeaturedProducts
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.error("Error getting products:", error);
      }
    },
  },
  modules: {},
});
