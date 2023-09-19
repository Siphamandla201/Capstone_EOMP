<template>
    <div class="products-holder">
      <div class="Home">
        <div class="products-card" v-for="(product, index) in displayedProducts" :key="product.productId">
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
        <div v-if="displayedProducts.length === 0" class="loading-spinner">
          <Spinner />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from "vuex";
  import Spinner from "./Spinner.vue";
  
  export default {
    name: "FilteredProducts",
    components: {
      Spinner,
    },
    setup() {
      const store = useStore();
      store.dispatch("getProducts");
      const products = store.state.products;
  
      // Limit the displayed products to the first four using a normal for loop
      const displayedProducts = [];
      if(!displayedProducts == '')
      for (let i = 0; i < 4 && i < products.length; i++) {
        displayedProducts.push(products[i]);
      }
  
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
