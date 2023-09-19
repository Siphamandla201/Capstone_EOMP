<template>
  <div class="products-holder">
    <div v-if="products" v-for="product in products" :key="product.productId" class="products-card">
      <div class="product-img">
        <img class="im" :src="product.ProductImage" />
      </div>
      <div class="product-info">
        <h3>{{ product.Designer }}</h3>
        <p>{{ product.ProductName }}</p>
        <div style=" display: flex; justify-content: space-between; padding-right: 5px; margin: 5px; height: 20px;">
          <h4>R {{ product.Price }}</h4>
          <router-link to="/Cart"><i class="fa-solid fa-heart"></i></router-link>
        </div>
      </div>
    </div>
    <div v-else style="display: flex; justify-content: center; align-items: center">
      <Spinner />
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Spinner from "./Spinner.vue";
export default {
  name: "ProductsCard",
  components: {
    Spinner,
  },
  setup() {
    const store = useStore();
    store.dispatch("getProducts");
    let products = computed(() => store.state.products);
    return {
      products,
    };
  },
};
</script>
<style scoped>
.products-holder {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 80px;
}

.products-card {
  height: 400px;
  width: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.product-img {
  overflow: hidden;
  height: 300px;
  width: 250px;
  padding: 10px;
}
img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: all 1s;
}

img:hover {
  scale: 1.2;
}

.product-info {
  margin-top: 5px;
  border-top: 2px solid rgb(5, 5, 5);
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-self: start;
  justify-content: ;
  gap: 0px;
  color: black;
}

h3 {
  margin: 5px;
  margin-left: 0px;
  margin-top: 10px;
  opacity: 0.8;
}

p {
  margin: 5px;
}

h4 {
  margin: 0px;
}

i {
  color: rgb(140, 149, 245);
  font-size: 20px;
}
</style>
