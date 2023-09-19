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
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </template>
  
  <script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue"; // Import onMounted to trigger the fetching of products

import Spinner from "";

export default {
    name: "FeaturedProducts",
    components: {
    Spinner,
    },
    setup() {
    const store = useStore();
    
      // Use computed to access products from the store
    const products = computed(() => store.state.featuredProducts);

      // Use onMounted to fetch products when the component is mounted
    onMounted(() => {
        store.dispatch("getProducts");
    });

    return {
        products,
    };
    },
};
</script>

<style scoped>
    * {
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
    }
    
    html {
        padding: 0;
        margin: 0;
    }
    
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
    }
    
    .video-container {
        width: 100vw;
        height: 650px;
        position: relative;
        overflow: hidden;
    }
    .navbar-container {
        width: 100vw;
        /* position: absolute; */
        /* top: 0;
        left: 0px; */
        z-index: 1;
        margin-bottom: 50px;
    }
    
    .Video {
        object-fit: contain;
        width: 100%;
        background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0));
    }
    
    .hero-section {
        margin: 60px 0px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding-right: 150px;
    }
    
    .hero-container {
        text-decoration: none;
        color: #94ACC4;
    }
    
    .hero-section  h2 {
        color: #222222;
        font-size: 60px;
        font-weight: 500;
        width: 600px;
        margin: 0px 0px 50px;
    }
    
    .hero-section  h4 {
        color:#222222;
        font-size: 25px;
        font-weight: 500;
        width: 600px;
        margin: 0px 0px 50px;
    }
    
    button {
        border: 1px solid #222222;
        border-radius: 7px;
        width: 160px;
        height: 50px;
        background-color: transparent;
    }
    
    button:hover {
        border: 1px solid #94ACC4;
        background-color:#94ACC4;
    }
    
    button a {
        font-weight: 600;
        color:#222222;
        font-size: 16px;
        text-decoration: none;
        
    }
    
    .featured-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        width: 100%;
    }
    
    .feature-header {
        display: flex;
        gap: 630px;
        width: 90%;
        margin-bottom: 30px;
    }
    
    .feature-header h2 {
        font-size: 30px;
        font-weight: 400;
    
    }
    
    .featured-products {
        width: 90%;
        display: block;
        justify-content: center;
        align-items:center;
    }
    
    .hero-bg {
        position: relative;
        width: 45%;
        height: 100%;
    }
    
    .hero-bg-info {
        width: 100%;
        height: 80%;
        position: absolute;
        top: 0%;
        text-align: center;
        left: 0%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .hero-bg-info h2 {
        color: black;
        font-weight: 500;
        margin: 40px 0px 0px 0px;
    }
    
    .hero-bg-info button {
        color: black;
        text-decoration: underline;
        border:none;
        background-color: transparent;
    }
    
    .hero-bg-info a{
        font-size: 20px;
        font-weight: 200;
        color: black;
    }
    
    .hero-bg img {
        width: 100%;
        height: 90%;
        background-color:#222222b5
    }
    
    .hero-bg-2 {
        width: 100%;
        height: 100%;
        padding-left: 120px;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: start;
        position: relative;
    }
    
    .hero-bg-2 img {
        position: relative;
        top: -50px;
        width: 130%;
        height: 120%;
        
    }
    
    .hero-bg-info-2 {
        color:  #222222;
        position: relative;
        left: 0px;
        text-align: left;
    }
    
    .hero-bg-info-2 h4 {
        margin: 0px 0px 10px;
    }
    
    .img {
        padding-left: 120px;
    }
    
    .img img {
        width: 120%;
        height: 90%;
    }
    
    .section-3 {
        margin-bottom: 60px;
    }
    
    .more-info {
        display: flex;
        align-items:center;
        justify-content: center;
        gap: 190px;
        width: 100%;
        margin: 50px 0px;
    }
    
    .more-info .info {
        text-align: justify;
        border: 2px solid #222222;
        padding: 30px 15px;
        width: 440px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 20px;
        color: #222222;
    }
    
    
    .info span {
        font-size: 38px;
        color: #222222;
    }
    
    .newsletter {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin-left: 93px;
        color: #222222;
    }
    
    .call-to-action {
        width: 100%;
        text-align: justify;
    }
    
    .call-to-action h3 {
        font-size: 35px;
        font-weight: bold;
        width: 100%;
        margin: 10px;
        color: #222222;
    }
    
    .call-to-action p {
        color: #222222;
        font-size: 20px;
        font-weight: 100;
        width: 90%;
        margin-top: 5px;
    }
    
    
    .newsletter-form {
        font-size: 20px;
        font-weight: 100;
        color: #222222;
        display: flex;
        flex-direction: column;
        gap: 30px;
        text-align: justify;
        color: #222222;
    } 
    
    .newsletter-form .Get-updates-by {
        font-size: 30px !important;
        margin: 15px 0px 0px !important;
        color: #222222;
    }
    
    .checkbox-container {
        display: flex;
        align-items:center;
    }
    
    .checkbox-container label {
        font-size: 16px;
        font-weight: lighter;
    }
    
    .input-container {
        display: none;
    }
    
    .input {
        width: 300.4px;
        height: 42px;
        border-radius: 10px;
        border: 2px solid #222222;
        padding: 0px 0px 0px 16px;
        background-color: white;
        margin-top: 10px;
        outline: none; 
    }
    
    .newsletter-form input::placeholder {
        font-size: 15px;
        color: #3f3c3c;
        font-weight: lighter;
    }
    
    
    .newsletter-form button {
        font-size: 16px;
        /* background-color :  #222222; */
        text-align: center;
        border: 2px solid #222222;
        border-radius: 10px;
        height: 40px;
        width: 100px;
        color: #222222;
        font-weight: 700;
    }
    
    .newsletter-form p {
        font-size: 18px;
        margin-top: 0px;
    }
    
    .newsletter-form p > a {
        text-decoration: underline;
        color: #222222;
    } 
    
</style>
