<template>
  <div class="Sign-up">
    <form class="form" @submit.prevent="register">
      <div class="form-information">
        <label for="Name">First name</label>
        <input type="text" v-model="payload.Name" required />
      </div>
      <div class="form-information">
        <label for="Surname">Surname</label>
        <input type="text" v-model="payload.Surname" required />
      </div>
      <div class="form-information">
        <label for="Email">Email Address</label>
        <input type="text" v-model="payload.Email" required />
      </div>
      <div class="form-information">
        <label for="Cellphone">Cellphone number</label>
        <input type="text" v-model="payload.cellphone" required />
      </div>
      <div class="form-information">
        <label for="Password">Password</label>
        <input type="text" v-model="payload.Password" required />
      </div>
      <div class="form-information">
        <label for="Address">Address</label>
        <input type="text" v-model="payload.Address" />
      </div>
      <fieldset class="form-information">
        <legend>Gender</legend>
        <div>
          <input
            type="checkbox"
            id="Male"
            name="Male"
            checked
            v-model="payload.Gender"
          />
          <label for="Male">Male</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Female"
            name="Female"
            v-model="payload.Gender"
          />
          <label for="Female">Female</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="other"
            name="other"
            v-model="payload.Gender"
          />
          <label for="other">other</label>
        </div>
      </fieldset>
      <input
        class="submit"
        type="submit"
        value="submit"
        @submit.prevent="register"
      />
    </form>
    <div class="more-info">
      <h1>More information</h1>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "SignupForm",
  setup() {
    const payload = {
      Name: "",
      Surname: "",
      cellphone: "",
      Email: "",
      Password: "",
      Address: "",
      Gender: "",
    };
    const store = useStore();
    const register = (payload) => {
      store.dispatch("register", payload);
      store.dispatch("getUser", payload);
    };
    const msg = computed(() => store.state);
    return {
      payload,
      register,
      msg,
    };
  },
};
</script>
<style>
.Sign-up {
  margin: 50px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form,
.more-info {
  flex-basis: 50%;
  padding: 50px;
}

.form {
  text-align: justify;
  border: 2px solid black;
}

.form-information {
  margin-bottom: 15px;
}

input {
  border: none;
  border-bottom: 2px solid black;
}

fieldset {
  border: none;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0%;
  margin-left: -5px;
}

.submit {
  border: 1px solid black;
  margin: 5% 45%;
}
</style>
