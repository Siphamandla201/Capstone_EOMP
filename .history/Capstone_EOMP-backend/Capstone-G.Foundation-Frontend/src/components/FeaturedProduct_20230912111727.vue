<template>
  <div class="products-holder">
    <div class="Home" v-if="product">
      <div v-for="product in displayedProducts" :key="product.productId" class="products-card">
        <div class="product-img">
          <router-link to="/Cart">
            <i class="fa-regular fa-heart"></i>
          </router-link>
          <img class="product-image" :src="product.ProductImage" alt="Product Image" />
        </div>
        <div class="product-info">
          <h3>{{ product.Designer }}</h3>
          <p>{{ product.ProductName }}</p>
          <div class="product-price-favorite">
            <h4>R {{ product.Price }}</h4>
          </div>
        </div>
      </div>
      <!-- Display loading spinner when displayedProducts is empty -->
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import Spinner from "./Spinner.vue";

export default {
  name: "FeaturedProducts",
  components: {
    Spinner,
  },
  setup() {
    const store = useStore();
    store.dispatch("getProducts");
    const products = store.state.featuredProducts ; // Use an empty array as a default value if products is null or undefined
      
      // Limit the displayed products to the first four
      const displayedProducts = products;
    

    return {
      displayedProducts,
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

.Home {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: justify;
    align-items: center;
    width: 100%;
}

.product-image {
    width: 350px;
    display: flex;
    flex-direction: row-reverse;
    text-align: end;
}

a .fa-regular {
    color: #2c3e50;
    font-size: 25px;
}

.product-info {
    margin-top: 5px;
}

.product-info  h3 {
    font-size: 20px;
    margin: 0px;
}

.product-info  p {
    font-size: 20px;
    font-weight: 300;
    margin: 0px;
}

.product-info  h4 {
    font-size: 20px;
    font-weight: 300;
    margin: 25px 0px;
}


</style>
