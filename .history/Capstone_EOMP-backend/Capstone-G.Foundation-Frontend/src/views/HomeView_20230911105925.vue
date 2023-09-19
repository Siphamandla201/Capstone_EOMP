<template>
  <div class="Home">
    <div class="navbar-container">
      <NavbarComp />
    </div>
    <main>
      <div class="video-container">
        <video autoplay loop muted playsinline class="Video">
          <source src="../assets/video.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  </div>
  <body>
    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| PRODUCTS |||||||||||||||||||||||||||||||||||||||||||||| */ -->

    <h3 class="featured">Featured</h3>
    <section class="products-holder">
      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>
    </section>

    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */ -->
    
    <section>
      <div class="banner-full">
        <img
          src="https://i.postimg.cc/tgFsPpJp/64c2ed3104304ae4824b414fbc35672e.jpg"
          alt="banner"
        />
        <div class="banner-description">
          <h3>Introducing Our New Arrivals</h3>
          <p>Check out the latest styles from us.</p>
          <a href="#" class="banner-btn">SHOP NOW</a>
        </div>
      </div>
    </section>
    
    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| PRODUCTS |||||||||||||||||||||||||||||||||||||||||||||| */ -->
    
    <h3 class="featured">New Arrivals</h3>
    <section class="products-holder">
      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>

      <div class="products-card">
        <div class="product-img"></div>
        <div class="product-info">
          <h3>Brand Name</h3>
          <p>Product name / description</p>
          <h4>R Price</h4>
        </div>
      </div>
    </section>
    
    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */ -->
    
    <section>
      <div class="banner-halves">
        <div class="banner-men">
          <routerLink to="/Products">
            <img src="https://i.postimg.cc/1zh2SNgs/Men-banner.png" alt="" />
          </routerLink>
        </div>
        <div class="banner-women">
          <router-link to="/Products">
            <img src="https://i.postimg.cc/2jKBKjWz/Women-banner.png" alt="" />
          </router-link>
        </div>
      </div>
      <div class="banner-full">
        <img
          class="img"
          src="https://i.postimg.cc/L5JQM77W/Untitled.png"
          alt="banner"
        />
        <div class="banner-description">
          <h3>Collections and Styles</h3>
          <p>Find your true style with our extensive range of collections.</p>
          <a href="#" class="banner-btn">SHOP NOW</a>
        </div>
      </div>
    </section>
  </body>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
// @ is an alias to /src
import NavbarComp from "../components/NavbarComp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComp,
    Footer,
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

.video-container {
  width: 98vw;
  height: 550px;
  position: relative;
  overflow: hidden;
}
.navbar-container {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0px;
  z-index: 1;
}

.Video {
  object-fit: contain;
  width: 100%;
  background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(255, 255, 255));
}


</style>
