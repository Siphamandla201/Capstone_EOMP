<template>
  <div class="promo">
  </div>
  <header>
    <div class="first-row">
      <div class="nav-links">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
      </div>
      <div class="header">
        <router-link to="/"><img src="https://i.postimg.cc/pdKNVSfs/Brand-initial-Simple-Logo-1.png" alt="Logo"></router-link>
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
      </div>
      <div class="searchCon" >
          <button id="searchBtn">
            <i class="fa-solid fa-search"></i>
          </button>
          <input type="text" id="search" placeholder="Search">
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
  padding: 5%;
  padding-top: 0%;
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
  margin-bottom: 15px;
  height: 170px;
  width: 90%;
}

.nav-links {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.nav-links a {
  text-decoration: none;
  font-size: 20px;
  color: #222222;
  
}

.nav-links a:hover {
  font-weight: bolder;
}

.header {
  height: 100%;
}

.header img {
  height: 100%;
  width: 190px;
}

.header-links {
  width: 150px;
  display: flex;
  justify-content: space-around;
}

.header-links i {
  font-size: 25px;
  color: #222222;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 0%;
}

.nav-section {
  width: 70%;
}

.category-list {
  display: flex;
  align-items: baseline;
  gap: 15px;
  width: 100%;
  padding: 0%;
  margin: 10px 0px;
}

.category-list li {
  list-style: none;
}

.category-list li a{
  text-decoration: none;
  font-size: 20px;
  font-weight: 300;
  color: #222222;
}

.searchCon {
  height: 55px;
  width: 400px;
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid #222222;
  display: flex;
  ali
}



</style>
