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

      <!-- sign in form starts -->
      <form
        action="#"
        :class="formActive ? 'form-isActive' : ' '"
        :style="{ transform: translateX }"
      >
     
        <h3>user login</h3>
        <i
          @click="showPassword"
          :class="eye ? 'fas fa-eye' : 'fas fa-eye-slash'"
        ></i>
        <input type="email" placeholder="email" class="box" />
        <input :type="type" placeholder="password" class="box" />
        <p>forget your password <router-link to="#">click here</router-link></p>
        <button @click.prevent="loginNow" class="btn" type="submit">
          login now
        </button>
        <p>or login with</p>
        <div class="buttons">
          <a href="#" class="btn">google</a>
          <a href="#" class="btn">facebook</a>
        </div>
        <p>
          don't have an account
          <span @click="changeForm">
            <router-link to="#">create one</router-link>
          </span>
        </p>
      </form>

      <!-- sign up form starts -->
      <form action="#" :class="formActive ? 'form-active' : 'form-isActive'">
        <span @click="changeForm" class="fas fa-arrow-right"></span>
        <h3>sign up</h3>
        <i
          @click="showPassword"
          :class="eye ? 'fas fa-eye' : 'fas fa-eye-slash'"
        ></i>
        <input type="text" placeholder="user name" class="box" />
        <input type="text" placeholder="login" class="box" />
        <input :type="type" placeholder="password" class="box" />
        <input :type="type" placeholder="confirm password" class="box" />

        <button @click.prevent="loginNow" class="btn" type="submit">
          register
        </button>
      </form>
    </div>
    <!-- login form container ends -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      closeBtn: false,
      loginForm: false,
      formActive: false,
      type: "password",
      eye: false,
      translateX: `translateX(50%)`,
    };
  },

  methods: {
    // menu-btn -> burger
    burger() {
      this.closeBtn = !this.closeBtn;
    },

    // login form functions
    changeForm() {
      this.formActive = !this.formActive;
    },
    loginBtn() {
      this.loginForm = !this.loginForm;
    },
    closeForm() {
      this.loginForm = !this.loginForm;
    },
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

  form {
    width: 40rem;
    padding: 2rem;
    margin: 2px;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    background-color: #fff;
    border: var(--border);
    text-align: center;
    position: relative;
    i {
      position: absolute;
      top: 13.2rem;
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
    .fa-arrow-right {
      position: absolute;
      top: 16px;
      right: 22px;
      font-size: 2rem;
      opacity: 0.6;
      cursor: pointer;
    }
    h3 {
      color: var(--black);
      font-size: 2.5rem;
      padding-bottom: 1rem;
      text-transform: uppercase;
    }
    .box {
      margin: 0.7rem 0;
      width: 100%;
      text-transform: none;
      color: var(--black);
      font-size: 1.6rem;
      padding: 1rem 1.2rem;
      border: var(--border);
      border-radius: 0.5rem;
      &[type="password"] {
        padding-right: 3.8rem;
      }

      &:focus {
        border-color: #ffee80;
        box-shadow: 0 0 8px 3px rgba($color: #ffee80, $alpha: 0.4);
      }
    }
    p {
      padding: 1rem 0;
      font-size: 1.5rem;
      color: var(--light-color);
      a {
        color: var(--yellow);
        text-decoration: underline;
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .btn {
      display: block;
      width: 100%;
      margin: 0.5rem 0;
    }
  }

  .form-active {
    transform: translateX(-50%);
    transition: all 0.6s linear;
  }
  .form-isActive {
    transform: translateX(280%);
    transition: all 0.6s linear;
    visibility: hidden;
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
