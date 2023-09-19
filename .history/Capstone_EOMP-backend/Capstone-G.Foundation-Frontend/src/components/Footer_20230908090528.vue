<template>
  <div class="footer-links">
    <h3>Customer Services</h3>
    <ul>
      <li><router-link to="/Products">Products</router-link></li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/About">About</router-link></li>
      <li><router-link to="/Admin">Admin</router-link></li>
    </ul>
  </div>
  <div class="copyright">
    <p><strong>C</strong>copyright.All Rights Reserved</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer-links a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-align: justify;
  color: rgb(140, 149, 245);
  margin-left: 15px;
  cursor: pointer;
}

h3 {
  width: 250px;
  margin: 0%;
  margin-top: 50px;
  margin-left: 7px;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 10px;
}

.copyright {
  display: flex;
  align-items: baseline;
  justify-content: center;
  text-align: center;
  height: 40px;
}
</style>
