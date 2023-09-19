<template>
  <div class="products-holder">
    <div v-if="products" v-for="product in products" :key="product.productId"
      class="products-card"
    >
      <div class="product-img">
        <img class="product-image" :src="product.ProductImage" alt="Product Image" />
      </div>
      <div class="product-info">
        <h3>{{ product.Designer }}</h3>
        <p>{{ product.ProductName }}</p>
        <div class="product-price-favorite">
          <h4>R {{ product.Price }}</h4>
          <router-link to="/Cart">
            <i class="fa-solid fa-heart"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="loading-spinner">
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Spinner from "./Spinner.vue";

export default {
  name: "ProductsCard",
  components: {
    Spinner,
  },
  setup() {
    const store = useStore();
    store.dispatch("getProducts");
    const products = computed(() => store.state.products);
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
  justify-content: start;
  gap: 5px;
  color: black;
}

h3 {
  margin-left: 0px;
  margin-top: 10px;
  opacity: 0.8;
}

p {
  margin: 0px;
}

h4 {
  margin: 0px;
}

i {
  color: rgb(140, 149, 245);
  font-size: 20px;
}
</style>
