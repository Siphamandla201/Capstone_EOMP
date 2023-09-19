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
        <div class="hero-info">
          <h2>
            Off-White: a renewed energy for fall
          </h2>
          <h4></h4>
        </div>
        <div class="hero-img">
          <img src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/280774/data/9cfabd67a6e2434fde1be8f9a04ad0ac/1x1_messaging-side/637/2023-09-06-mw-1-webapp-off-white-pre-fw23-ds-off-white-multicategory-img.jpeg" alt="Hero">
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


</style>
