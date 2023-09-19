<template>
  <header>
      <div class="promo"></div>
      <div class="nav-links">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Kids</a>
                </div>
      <div class="header">
        <h2>
          <router-link to="/"><img src="https://i.postimg.cc/DmkpQmGc/Black-White-Minimalist-Business-Logo.png" alt="Logo"></router-link>
        </h2>
      </div>
      <div class="header-links">
        <router-link to="/Login"><i class="fa-solid fa-user"></i></router-link>
        <router-link to="/Cart"
          ><i class="fa-solid fa-basket-shopping"></i
        ></router-link>
        <router-link to="/Cart"><i class="fa-solid fa-heart"></i></router-link>
      </div>
    </header>
</template>
<script>
export default {
  name: "NavbarComp",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}


</style>
