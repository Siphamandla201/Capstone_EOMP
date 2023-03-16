<template>
  <div class="admin-tables">
    <h3>Products</h3>
    <div class="Products-table">
      <table class="table">
        <thead>
          <tr>
            <th>ProductId</th>
            <th>ProductImage</th>
            <th>ProductName</th>
            <th>Price</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>DayArrived</th>
            <th>Gender</th>
            <th>Designer</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.productId">
            <td>{{ product.ProductId }}</td>
            <td><img :src="product.ProductImage" /></td>
            <td>{{ product.productName }}</td>
            <td>R {{ product.Price }}</td>
            <td>{{ product.Size }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.DayArrived }}</td>
            <td>{{ product.Gender }}</td>
            <td>{{ product.Designer }}</td>
            <td>{{ product.Category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>Users</h3>
    <div class="Users-table">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Cellphone</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.username">
            <td>{{ user.UsersId }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.cellphone }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import store from "@/store";
export default {
  name: "AdminTable",
  setup() {
    const store = useStore();
    store.dispatch("getProducts");
    store.dispatch("getUsers");
    let products = computed(() => store.state.products);
    let users = computed(() => store.state.users);
    return {
      products,
      users,
    };
  },
};
</script>
<style scoped>
.admin-tables {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 9rem;
  height: 9rem;
  transition: all 2s;
  animation: awesomeAnimation 7s ease-in-out;
}

h5 {
  text-align: start !important;
}

hr {
  width: 600px;
}

td {
  padding: 10px;
  /* */
  word-break: break-all;
}
@keyframes awesomeAnimation {
  0% {
    scale: 0.25;
  }
  100% {
    scale: 1;
  }
}
</style>
