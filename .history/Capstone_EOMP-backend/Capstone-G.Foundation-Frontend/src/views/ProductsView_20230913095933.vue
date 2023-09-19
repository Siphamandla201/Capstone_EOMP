<template>
  <!-- <div class="Navbar">
    <NavbarComp />
  </div> -->
  <!-- <div class="page-title">
    <h4>Shop</h4>
    <div class="sort" style="border: 10px red; display: flex">
      <span>
        <h4>Sort</h4>
        <ul class="sort-list">
          <li class="sort-options">A-B</li>
          <li class="sort-options">1-2</li>
          <li class="sort-options">B-A</li>
          <li class="sort-options">2-1</li>
        </ul>
      </span>
    </div>
  </div> -->
  <body>
    <div class="filter">
      <FilterComp style="width: 100%" />
    </div>
    <div class="Products">
      <ProductsCard />
    </div>
  </body>
  <footer>
    <Footer></Footer>
  </footer>
</template>
<script>
// import NavbarComp from "../components/NavbarComp.vue";
import ProductsCard from "@/components/ProductsCard.vue";
import FilterComp from "@/components/FilterComp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Products",
  components: {
    // NavbarComp,
    ProductsCard,
    FilterComp,
    Footer,
  },
};
</script>
<style scoped>
body {
  display: flex;
}

.Navbar {
  height: 500px;
  background-image: url("https://i.postimg.cc/4xm62szp/Moncler.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.page-title {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(140, 149, 245);
}

h4 {
  width: 150px;
  text-align: center;
}

.sort {
  width: 150px;
  text-align: center;
  /* margin-right: 50px; */
}

.sort-list {
  display: none;
  margin-top: 10px;
  padding-right: 20px;
  list-style: none;
}

.sort:hover .sort-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  color: antiquewhite;
}

.sort-options {
  border-bottom: 1.5px solid rgb(0, 0, 0);
  height: 25px;
  cursor: pointer;
  margin-right: 20px;
}

.filter {
  width: 25%;
}

.Products {
  width: 75%;
}
</style>
