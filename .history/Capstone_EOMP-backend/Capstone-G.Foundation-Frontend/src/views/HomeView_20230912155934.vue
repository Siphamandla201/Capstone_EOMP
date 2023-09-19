<template>
  <div class="Home">
    <div class="navbar-container">
      <NavbarComp />
    </div>
    <!-- <div class="video-container">
      <video autoplay loop muted playsinline class="Video">
        <source src="../assets/video.mp4" type="video/mp4" />
      </video>
    </div> -->
    <main>
      <!-- <section> -->
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
              <div class="hero-bg-info-2">
                <h4>
                  House signatures: the watch edit
                </h4>
                <p>
                  This way for notable details and reworked favorites
                </p>
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
        <div class="hero-section section-3">
          <a href="#" class="hero-container">
            <div class="hero-img img">
              <img src="https://c.bannerflow.net/io/api/image/optimize?u=https%3A%2F%2Fc.bannerflow.net%2Faccounts%2Ffarfetch%2F5885fca2b801c913d4b04244%2Fimages%2Fcf7bc9ba-1444-4979-94c4-99371046de3f.jpg&w=660&h=768&q=85&f=webp&rt=contain" alt="Hero">
            </div>
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
          </a>
        </div>
      <!-- </section> -->
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
  color: #000000;
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
  width: 130%;
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
  border: 2px solid #2c3e509a;
  padding: 30px 15px;
  width: 440px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
}


.info span {
  font-size: 38px;
}

.newsletter {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 93px;
}

.call-to-action {
    width: 150%;
    text-align: justify;
}

.call-to-action h3 {
    font-size: 35px;
    font-weight: bold;
    width: 100%;
    margin: 0px;
}

.call-to-action p {
    color: #222222;
    font-size: 20px;
    font-weight: 100;
    width: 90%;
    margin-top: 10px;
}


.newsletter-form {
    font-size: 20px;
    font-weight: 100;
    color: #222222;
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: justify;
} 

.newsletter-form  p {
    font-size: 30px !important;
    margin: 15px 0px 0px !important;
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
    background-color :  #222222;
    text-align: center;
    border: 2px solid #222222;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    color: white;
    font-weight: bolder;
}

.newsletter-form p {
    font-size: 16px;
    margin-top: 0px;
}

.newsletter-form p > a {
    text-decoration: underline;
    color: #222222;
} 

/* footer {
    font-family: 'Roboto', sans-serif;
    color: #222222;
    background-color: #eaeaea;
}

.footer-container {
    padding: 20px 90px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid white;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 300px;
} 

ul p {
    font-weight: bold;
}

ul li {
    list-style: none;
    color: #222222;
    font-weight: lighter;
}

ul li:hover {
    text-decoration: underline;
}

.social-links {
    display: flex;
    gap: 25px;
}

.social-links li {
    font-size: 25px;
    width: 44px;
    height: 44px;
}

.social-links a:hover {
    width: 44px;
    height: 44px;
    background-color: rgb(231, 230, 230);
    border-radius: 4px;
    color: #222222;
}

.copyright {
    display: flex;
    flex-direction: column;
}

.links {
    padding: 20px 90px;
    display: flex;
    justify-content: space-between;
    width: 40%;
    text-decoration: underline;
}

.copyright-content {
    padding: 0px 90px 20px;
    font-size: 14px;
    line-height: 5px;
} */
</style>
