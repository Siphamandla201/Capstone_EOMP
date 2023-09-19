<template>
  <div class="products-holder">
    <div class="Home" v-if="products">
      <div v-for="product in products" :key="product.productId" class="products-card">
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
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
  <section>
            <div class="more-info">
                <div class="info">
                    <span class="material-symbols-outlined">
                        checkroom
                    </span>
                    <p>
                        How to shop
                    </p>
                    <p>
                        Your guide to shopping and placing orders
                    </p>
                </div>
                <div class="info">
                    <span class="material-symbols-outlined">
                        help
                        </span>
                    <p>
                        How to shop
                    </p>
                    <p>
                        Your guide to shopping and placing orders
                    </p>
                </div>
                <div class="info">
                    <span class="material-symbols-outlined">
                        chat_bubble
                    </span>
                    <p>
                        How to shop
                    </p>
                    <p>
                        Your guide to shopping and placing orders
                    </p>
                </div>
            </div>

            <div class="newsletter">
                <div class="call-to-action">
                    <h3>
                        Get 10% off your first order
                    </h3>
                    <p>
                        Sign up for promotions, tailored new arrivals, stock updates and more - straight to your inbox
                    </p>
                </div>
                <div class="newsletter-form">
                    <p class="Get-updates-by">
                        Get updates by
                    </p>
                    <div>
                        <div class="checkbox-container">
                            <span id="unchecked1" class="material-symbols-outlined"  >
                                check_box_outline_blank
                            </span>
                            <span id="checked1" class="material-symbols-outlined" style="display: none;">
                                check_box
                            </span>
                            <label for="email">Email</label>
                        </div>
                        <span class="input-container span-1">
                            <input class="input" type="text" placeholder="You email address">
                        </span>
                    </div>
                    <div>
                        <div class="checkbox-container">
                            <span id="unchecked2" class="material-symbols-outlined">
                                check_box_outline_blank
                            </span>
                            <span id="checked2"  class="material-symbols-outlined" style="display: none;">
                                check_box
                            </span>
                            <label for="sms">SMS</label>
                        </div>
                        <span class="input-container span-2">
                            <input class="input" type="text" placeholder="You email address">
                        </span>
                    </div>
                    <button>Sign up</button>
                    <p>
                        By signing up, you consent to receiving marketing by email and/or SMS and acknowledge you have read our <a href="#">Privacy Policy.</a> Unsubscribe anytime at the bottom of our emails or by replying STOP to any of our SMS.
                    </p>
                </div>
            </div>
        </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Spinner from "./Spinner.vue";

export default {
  name: "FeaturedProducts",
  components: {
    Spinner,
  },
  setup() {
    const store = useStore();
    store.dispatch("getProducts");
    const products = computed(() => store.state.featuredProducts);// Use an empty array as a default value if products is null or undefined
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
    color: #94ACC4;
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
