<template>
  <!-- <header>
        <nav class="main-nav">
            <div class="nav-section">
                <div class="nav-logo">
                    
                </div>
                <div class="nav-actions">
                    <a href="#">Sign In</a>
                    <a href="#">Favourites</a>
                    <a href="#">Cart</a>
                </div>
            </div>
            </div>
        </nav>
        
    </header> -->
  <div class="header-body">
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
    <nav class="navbar"></nav>
  </div>
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

.header-body {
  width: 100vw;
}

.promo {
  height: 40px;
  background-color: #222222;
}

header {
  /* padding-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 25px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.header img {
    width: 200.05px; 
    height: 200.95px;
}

h2 a {
  text-decoration: none;
  color: rgb(140, 149, 245);
}

.header-links a {
  text-decoration: none;
  color: rgb(140, 149, 245);
  margin-left: 15px;
  cursor: pointer;
}

.header-links a:hover {
  color: rgba(240, 248, 255, 0.6);
}

nav {
  padding: 30px;
  margin-left: 50px;
}

nav a {
  margin-left: 10px;
  margin-top: 900px;
  font-weight: bold;
  color: rgb(2, 2, 2);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(140, 149, 245);
}

.navbar {
  padding-bottom: 150%;
  padding-right: 50%;
}
/* 

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,400;1,6..12,300&display=swap');

body {
    overflow-x: hidden;
}

header {
    position: fixed;
    background-color: #fff;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: 15;
}

.promo-header {
    background-color: #222222;
    height: 30px;
    width: 100%;
}

.main-nav {
    padding: 20px 98px 20px;
    width: 86%;
    height: 100px;
    background-color: #fff;
    color: #222222;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}


.nav-section {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0px;
}


.nav-links a {
    color:  #222222;
    text-decoration: none;
    margin: 0 0px;
}

.nav-logo 

.nav-actions a {
    color:  #222222;
    text-decoration: none;
    margin: 0 0px;
}

.nav-section .searchCon {
    display: flex;
    align-items:center;
    height: 42px;
    gap: 0px;
    border: 1px solid  #222222;
    border-radius:10px ;
}

.nav-section #search {
    width: 224.4px;
    height: 95%;
    outline: none;
    border: none;
    border-radius:10px ;
}

.nav-section #searchBtn {
    width: 44px;
    height: 95%;
    border: none;
    border-radius:10px ;
    background-color: transparent;
}

.nav-section #searchBtn span {
    color: grey;
}

.nav-section #search::placeholder {
    font-size: 15px; 
    font-weight: 100;
    color: rgb(101, 99, 99); 
}

.category-list {
    display: flex;
    list-style: none;
    padding: 0px 10px;
    gap: 15px;
}

.category-list li {
    margin-bottom: 5px;
}

.category-list a {
    text-decoration: none;
    color:  #222222;
}

a:hover {
    color: #4e4c4a;
} */

</style>
