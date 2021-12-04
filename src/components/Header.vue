<template>
  <div>
    <!-- header section starts -->
    <header class="header">
      <!-- menu btn (burger) -->
      <div
        @click="burger"
        :class="closeBtn ? 'fas fa-times' : 'fas fa-bars'"
        id="menu-btn"
      ></div>
      <!-- website logo -->
      <router-link class="logo" to="#home">
        <span>max</span>
        wheels
      </router-link>
      <!-- navbar start -->
      <nav :class="closeBtn ? 'active navbar' : 'navbar'">
        <ul class="navbar-list">
          <li class="navbar-list__item">
            <router-link to="#home">home</router-link>
          </li>
          <li class="navbar-list__item">
            <router-link to="#vehicles">vehicles</router-link>
          </li>
          <li class="navbar-list__item">
            <router-link to="#services">services</router-link>
          </li>
          <li class="navbar-list__item">
            <router-link to="#featured">featured</router-link>
          </li>
          <li class="navbar-list__item">
            <router-link to="#reviews">reviews</router-link>
          </li>
          <li class="navbar-list__item">
            <router-link to="#contact">contact</router-link>
          </li>
        </ul>
      </nav>
      <!-- navbar end -->

      <!-- login-btn -->
      <div id="login-btn" @click="loginBtn">
        <button class="btn">login</button>
        <i class="far fa-user"></i>
      </div>
    </header>
    <!-- header section ends ----------------------------------------------------------->

    <!-- login form container starts------------------------------------------------------------------->
    <div
      :class="
        loginForm ? 'login-form-container active' : 'login-form-container'
      "
    >
      <!-- close btn -->
      <span
        @click="closeForm"
        class="fas fa-times"
        id="close-login-form"
      ></span>
      <!-- form components -->
      <keep-alive>
        <component
          :is="selectedComponent"
          @returnCompname="getComponent($event)"
        ></component>
      </keep-alive>
    </div>
    <!-- login form container ends -->
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
export default {
  name: "Header",
  components: {
    Login,
    SignUp,
  },
  data() {
    return {
      closeBtn: false,
      loginForm: false,
      formActive: false,
      selectedComponent: "Login",
    };
  },

  methods: {
    getComponent(e) {
      this.selectedComponent = e;
    },
    // menu-btn -> burger
    burger() {
      this.closeBtn = !this.closeBtn;
    },

    // login form functions

    loginBtn() {
      this.loginForm = !this.loginForm;
    },
    closeForm() {
      this.loginForm = !this.loginForm;
    },
  },

  mounted() {
    window.onscroll = function () {
      if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }

      const menu = document.querySelector("#menu-btn"),
        navbar = document.querySelector(".navbar");

      menu.classList.remove("fa-times");
      menu.classList.add("fa-bars");
      navbar.classList.remove("active");
    };

    window.onload = function () {
      if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }
    };

    // function
  },
};
</script>

<style lang="scss" scoped>
// header styles starts
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 9%;
  transition: all 0.2s linear;

  &.active {
    box-shadow: var(--box-shadow);
    padding: 2rem 9%;
  }

  #menu-btn {
    font-size: 2.5rem;
    color: var(--light-color);
    cursor: pointer;
    display: none;
  }

  .logo {
    font-size: 2.5rem;
    color: var(--black);
    font-weight: bolder;
    span {
      color: var(--yellow);
    }
  }

  .navbar {
    &-list {
      list-style: none;
      &__item {
        display: inline-block;

        a {
          font-size: 1.7rem;
          color: var(--black);
          margin: 0 1rem;
          transition: all 0.2s linear;

          &:hover {
            color: var(--yellow);
          }
        }
      }
    }
  }

  #login-btn {
    .btn {
      margin-top: 0;
    }
    i {
      font-size: 2.5rem;
      color: var(--light-color);
      cursor: pointer;
      display: none;
    }
  }
}

// login form styles starts
.login-form-container {
  position: fixed;
  top: -105%;
  left: 0;
  z-index: 99999;
  height: 100%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.2s linear;
  &.active {
    top: 0;
    opacity: 1;
  }

  #close-login-form {
    position: absolute;
    top: 1.5rem;
    right: 2.5rem;
    font-size: 5rem;
    color: var(--black);
    cursor: pointer;
  }
}

// media queries styles-----------------------------------------------------------------

// max-width: 991px
@media screen and (max-width: 991px) {
  .header {
    padding: 2rem;
  }
  .header.active {
    padding: 2rem;
  }
}

// max-width: 768px
@media screen and (max-width: 768px) {
  .header {
    #menu-btn {
      display: block;
      &.fa-times {
        transition: all 0.2s linear;
        transform: rotate(180deg);
      }
    }

    #login-btn {
      .btn {
        display: none;
      }
      i {
        display: block;
      }
    }

    .navbar {
      position: absolute;
      top: 99%;
      left: 0;
      right: 0;
      background-color: #fff;
      border-top: var(--border);
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      transition: all 0.2s linear;
      &.active {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
      &-list {
        &__item {
          display: block;

          a {
            font-size: 2rem;
            margin: 2rem;
          }
        }
      }
    }
  }
}

// max-width: 450px
@media screen and (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
</style>
