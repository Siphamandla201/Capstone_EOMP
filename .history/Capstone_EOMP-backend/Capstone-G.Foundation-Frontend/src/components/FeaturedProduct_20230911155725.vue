<template>
    <div class="products-holder">
      <div class="Home">
        <!-- Only display products if filteredProducts is defined and not empty -->
        <div v-if="filteredProducts.length > 0">
          <div v-for="product in filteredProducts" :key="product.productId" class="products-card">
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
        </div>
        <!-- Display loading spinner when filteredProducts is empty -->
        <div v-else class="loading-spinner">
          <Spinner />
        </div>
      </div>
    </div>
</template>

<script>
    import { useStore } from "vuex";
    import { computed } from "vue";
    import Spinner from "./Spinner.vue";
    
    export default {
        name: "FilteredProducts",
        components: {
        Spinner,
        },
        setup() {
        const store = useStore();
        store.dispatch("getProducts");
        const products = computed(() => store.state.products);
    
        // Create a computed property to limit the number of products to four
        const filteredProducts = computed(() => products.value.slice(0, 4));
    
        return {
            filteredProducts,
        };
        },
    };
</script>
