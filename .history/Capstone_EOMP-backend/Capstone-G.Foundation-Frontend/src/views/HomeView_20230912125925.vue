<template>
  <div class="Home">
    <div class="navbar-container">
      <NavbarComp />
    </div>
    <div class="video-container">
      <video autoplay loop muted playsinline class="Video">
        <source src="../assets/video.mp4" type="video/mp4" />
      </video>
    </div>
    <main>
      <div class="hero-section">
        <a href="#" class="hero-container">
          <div class="hero-info">
            <h2>
              Off-White: a renewed energy for fall
            </h2>
            <h4>
              From relaxed cuts to reworked streetwear, the brand delivers a rich collection for the season ahead
            </h4>
            <button>
              <a href="#">SHOP NOW</a>
            </button>
          </div>
          <div class="hero-img">
            <img src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/280774/data/9cfabd67a6e2434fde1be8f9a04ad0ac/1x1_messaging-side/637/2023-09-06-mw-1-webapp-off-white-pre-fw23-ds-off-white-multicategory-img.jpeg" alt="Hero">
          </div>
        </a>
      </div>
      <div class="featured-section">
        <div class="feature-header">
          <h2>
            New in: handpicked daily from the world’s best brands and boutiques
          </h2>
          <button>
              <a href="#">SHOP NOW</a>
            </button>
        </div>
        <div class="featured-products">
          <FeaturedProducts/>
        </div>
      </div>
      <div class="hero-section">
        <a href="#" class="hero-container">
          <div class="hero-bg-2">
            <img src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/101108/data/d429e8bf0af4757c1b69f946e027a0d0/1x1_two-columns/637/2023-08-23-mw-2-web-fine-fashion-watches-wj-multibrand-fine-watches-img.jpeg" alt="">
            <div class="hero-bg-info">
              
            </div>
          </div>
          <div class="hero-bg">
            <img src="https://i.postimg.cc/jdxNd9JZ/optimize.webp" alt="">
            <div class="hero-bg-info">
                <h2>
                DOLCE & GABBANA
              </h2>
              <button>
                <a href="#">SHOP NOW</a>
              </button>
            </div>
          </div>
        </a>
      </div>
      <div class="hero-section">
        <a href="#" class="hero-container">
          <div class="hero-info">
            <h2>
              Off-White: a renewed energy for fall
            </h2>
            <h4>
              From relaxed cuts to reworked streetwear, the brand delivers a rich collection for the season ahead
            </h4>
            <button>
              <a href="#">SHOP NOW</a>
            </button>
          </div>
          <div class="hero-img">
            <img src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/280774/data/9cfabd67a6e2434fde1be8f9a04ad0ac/1x1_messaging-side/637/2023-09-06-mw-1-webapp-off-white-pre-fw23-ds-off-white-multicategory-img.jpeg" alt="Hero">
          </div>
        </a>
      </div>
    </main>
  </div>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
// @ is an alias to /src
import NavbarComp from "../components/NavbarComp.vue";
import FeaturedProducts from "../components/FeaturedProduct.vue"
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComp,
    FeaturedProducts,
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
  position: absolute;
  top: 0;
  left: 0px;
  z-index: 1;
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
  color:#000000;
  font-size: 60px;
  font-weight: 500;
  width: 600px;
  margin: 150px 0px 50px;
}

.hero-section  h4 {
  color:#222222;
  font-size: 25px;
  font-weight: 500;
  width: 600px;
  margin: 0px 0px 50px;
}

button {
  border: 1px solid #2c3e50;
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
  color:#2c3e50;
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
  font-weight: 600;
  margin: 40px 0px 0px 0px;
}

.hero-bg-info button {
  color: black;
  font-weight: 200;
  text-decoration: underline;
  border:none;
  background-color: transparent;
}

.hero-bg-info a{
  font-size: 20px;
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
}

.hero-bg-2 image {
  width: 110%;
  height: 1000%;
}
</style>
