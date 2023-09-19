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
        <router-link to="/"><img src="https://i.postimg.cc/3wbDTp0B/Brand-initial-Simple-Logo-2-Photo-Room-1.png" alt="Logo"></router-link>
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
  color: #2c3e509a;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  position: relative;
  overflow-x: hidden;
}

header {
  width: 90%;
  padding: 5%;
  padding-top: 20px;
  position: relative;
  top: 30px;
  left: 0px;
  /* background-color: #ffffff; */
  height: 200px;
}

.promo {
  height: 30px;
  width: 100%;
  background-color:#2c3e509a;
  position: relative;
}

.first-row {
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-top: 15px;
  margin-bottom: 45px;
  height: 170px;
  width: 100%;
}

.nav-links {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.nav-links a {
  text-decoration: none;
  font-size: 20px;
  color: #2c3e509a;
  
}

.nav-links a:hover {
  font-weight: bolder;
}

.header {
  height: 100%;
}

.header img {
  height: 90%;
  width: 150px;
}

.header-links {
  width: 150px;
  display: flex;
  justify-content: space-around;
}

.header-links i {
  font-size: 25px;
  color: #2c3e509a;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  color: #2c3e509a;
}

.searchCon {
  height: 55px;
  width: 400px;
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid #2c3e509a;
  display: flex;
  align-items: center;
}

.searchCon #searchBtn {
  width: 80px;
  height: 100%;
  border: none;
  background-color: transparent;
}

#searchBtn i {
  font-size: 30px;
  color: #2c3e50;
}

.searchCon input {
  border: none;
  background-color: transparent;
  height: 100%;
}


.searchCon input::placeholder {
  font-size: 20px;
}


</style>
