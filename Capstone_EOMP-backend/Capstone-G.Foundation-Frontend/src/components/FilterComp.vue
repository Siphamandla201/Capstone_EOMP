<template>
  <div class="filter">
    <h2>Filter</h2>
    <!-- <div class="sort" style="border: 10px red; display: flex">
      <h4>Sort</h4>
      <span>
        <ul class="sort-list">
          <li class="sort-options"><input type="text" value="" /></li>
          <li class="sort-options">1-2</li>
          <li class="sort-options">B-A</li>
          <li class="sort-options">2-1</li>
        </ul>
      </span>
    </div> -->
    <select>
      <option value="*">Categories</option>
      <option value="5000 - more">Men</option>
      <option value="5000 - more">Women</option>
      <option value="0-500">Clothing</option>
      <option value="500-1500">Bags</option>
      <option value="1500-5000">Accessories</option>
    </select>
    <select>
      <option value="all">Price</option>
      <option value="0-500">0 - 500</option>
      <option value="500-1500">500 - 1500</option>
      <option value="1500-5000">1500 - 5000</option>
      <option value="5000 - more">5000+</option>
    </select>
    <select>
      <option value="all">Designers</option>
      <option value="Fendi">Fendi</option>
      <option value="Cucci">Gucci</option>
      <option value="Versace">Versace</option>
    </select>
    <select>
      <option value="all">Clothing Sizes</option>
      <option value="all">UK 6 7/8</option>
      <option value="Fendi">UK 7 1/8</option>
      <option value="Cucci">UK 7 3/4</option>
      <option value="Versace">UK 7 3/8</option>
      <option value="Versace">UK 7 7/8</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "FilterComp",
};
</script>
<style scoped>
h2 {
  text-align: start;
}
.filter {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 300px;
}

select {
  height: 35px;
  width: 350px;
}

option {
  position: absolute;
}

/* h4 {
  width: 150px;
}

.sort {
  width: 150px;
  text-align: center;
   margin-right: 50px; 
}

.sort-list {
  display: none;
  margin-top: 50px;
  margin-right: 50px;
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
} */
</style>
