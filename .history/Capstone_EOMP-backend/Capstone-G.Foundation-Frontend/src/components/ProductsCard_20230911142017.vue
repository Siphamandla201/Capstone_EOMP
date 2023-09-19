<template>
  <div class="products-holder">
    <div v-if="products" v-for="product in products" :key="product.productId" class="products-card">
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
  padding: 0px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: justify;
  align-items: center;
  width: 100%;
}

.product-image {
  width: 350px;
}

.product-info  h3 {
  font-size: 25px;
  margin: 0px;
}

.product-info  p {
  font-size: 23px;
  margin: 0px;
}


</style>
