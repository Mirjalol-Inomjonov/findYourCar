<template>
  <section>
    <form>
      <h3>sign up</h3>
      <i
        @click="showPassword"
        :class="eye ? 'fas fa-eye' : 'fas fa-eye-slash'"
      ></i>
      <i
        @click="showPassword"
        :class="eye ? 'fas fa-eye' : 'fas fa-eye-slash'"
      ></i>
      <input type="text" placeholder="user name" class="box" />
      <input type="text" placeholder="login" class="box" />
      <input
        :type="type"
        style="padding-right: 3.8rem"
        placeholder="password"
        class="box"
      />
      <input
        :type="type"
        style="padding-right: 3.8rem"
        placeholder="confirm password"
        class="box"
      />

      <button class="btn" type="submit">register</button>
      <p class="login">
        have you registered before
        <span @click="$emit('returnCompname', 'Login')">login</span>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      type: "password",
      eye: false,
    };
  },
  methods: {
    showPassword() {
      if (this.type === "password") {
        this.eye = true;
        this.type = "text";
      } else {
        this.eye = false;
        this.type = "password";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  i {
    position: absolute;
    top: 19.5rem;
    right: 3rem;
    color: var(--black);
    font-size: 1.7rem;
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.2s linear;
    &:nth-child(2) {
      top: 24.8rem;
    }

    &:hover {
      opacity: 1;
    }
  }

  .login {
    color: var(--light-color);
    padding: 1rem 0;
    font-size: 1.5rem;
    display: inline-block;
    text-align: right !important;
    span {
      color: var(--yellow);
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
