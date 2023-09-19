<template>
  <header>
    <div class="promo">
    </div>
    <div class="first-row">
      <div class="nav-links">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
      </div>
      <div class="header">
        <router-link to="/"><img src="https://i.postimg.cc/DmkpQmGc/Black-White-Minimalist-Business-Logo.png" alt="Logo"></router-link>
      </div>
      <div class="header-links">
        <router-link to="/Login"><i class="fa-solid fa-user"></i></router-link>
        <router-link to="/Cart"><i class="fa-solid fa-basket-shopping"></i></router-link>
        <router-link to="/Cart"><i class="fa-solid fa-heart"></i></router-link>
      </div>
    </div>
      <nav class="navbar">
      <div class="nav-section">
                <ul class="category-list">
                    <li><a href="#">Extra 20% off</a></li>
                    <li><a href="#">New in</a></li>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Trainers</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Watches</a></li>
                    <li><a href="#">Homeware</a></li>
                    <li><a href="#">Sale</a></li>
                </ul>
                <div class="searchCon" >
                    <button id="searchBtn">
                      <i class="fa-solid fa-search"></i>
                    </button>
                    <input type="text" id="search" placeholder="Search">
                </div>
              </div>
    </nav>
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

header {
  width: 100%;
  
}

.promo {
  height: 30px;
  width: 100%;
  background-color:#2c3e50;
}

.first-row {
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-top: 15px;
  height: 150px;
  width: 90%;
}

</style>
