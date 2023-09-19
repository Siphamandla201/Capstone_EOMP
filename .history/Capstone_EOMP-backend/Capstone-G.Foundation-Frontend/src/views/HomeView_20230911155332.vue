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
    </main>
  </div>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
// @ is an alias to /src
import NavbarComp from "../components/NavbarComp.vue";
import FeaturedProducts from "../components/FeaProduct.vue"
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
  justify-content: space-around;
  align-items: start;
}

.hero-container {
  text-decoration: none;
  color: #94ACC4;
}

.hero-section  h2 {
  color:#2c3e50;
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
  align-items:center
}
</style>
