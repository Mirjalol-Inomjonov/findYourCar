<template>
  <section>
    <form>
      <h3>user login</h3>
      <i
        @click="showPassword"
        :class="eye ? 'fas fa-eye' : 'fas fa-eye-slash'"
      ></i>
      <input type="email" placeholder="email" class="box" />
      <input :type="type" style="padding-right: 3.8rem;" placeholder="password" class="box" />
      <p>forget your password <router-link to="#">click here</router-link></p>
      <button class="btn" type="submit">login now</button>
      <p>or login with</p>
      <div class="buttons">
        <a href="#" class="btn">google</a>
        <a href="#" class="btn">facebook</a>
      </div>
      <p>
        don't have an account
        <span @click="$emit('returnCompname', 'SignUp')">
          <router-link to="#">create one</router-link>
        </span>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      type: "password",
      eye: false,
    };
  },
  methods: {
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.eye = true;
      } else {
        this.type = "password";
        this.eye = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {

  i {
    position: absolute;
    top: 14.2rem;
    right: 3rem;
    color: var(--black);
    font-size: 1.7rem;
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.2s linear;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
