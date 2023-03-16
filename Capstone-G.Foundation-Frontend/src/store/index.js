import { createStore } from "vuex";
import axios from "axios";
const grey = "https://grey-foundation.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
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
      const res = await axios.post(`${grey}register`, payload);
      const { msg, err } = await res.data;
      if (err) {
        context.commit("setUsers", err);
      } else {
        context.commit("setUsers", msg);
        console.log("User has been registered");
      }
    },
    async getUser(context, id) {
      const res = await axios.get(`${grey}users/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUser", result);
      } else {
        context.commit("setMessage", err);
      }
    },

    async getUsers(context) {
      const res = await axios.get(`${grey}users`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      }
    },

    async getProducts(context) {
      const res = await axios.get(`${grey}products`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setProducts", result);
      } else {
        context.commit("setMessage", err);
      }
    },
  },
  modules: {},
});
