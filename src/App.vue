<template>
  <div id="app">
    <div class="loader">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },

  created() {
    window.addEventListener("DOMContentLoaded", () => {
      const loader = document.querySelector(".loader");
      setTimeout(function () {
        loader.style.opacity = "0";
        setTimeout(function () {
          loader.style.display = "none";
        }, 1500);
      }, 2000);
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Noto+Serif+Georgian:wght@100;200;300;400;600;700;800&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@100;300;400;500;600&display=swap");

// root vereables
:root {
  --yellow: #f9d806;
  --light-yellow: #ffee80;
  --black: #130f40;
  --light-color: #666;
  --border: 0.1rem solid rgba(0, 0, 0, 0.1);
  --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-padding: 7rem;
  scroll-behavior: smooth;
}

#app {
  font-family: "Poppins", sans-serif;
}

section {
  padding: 2rem 9%;
}

// heading title
.heading {
  text-align: center;
  padding-bottom: 2rem;
  font-size: 4.5rem;
  color: var(--black);
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      position: absolute;
      bottom: 1rem;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: var(--yellow);
      clip-path: polygon(0% 90%, 100% 80%, 100% 100%, 0% 100%);
    }
  }
}

.btn {
  display: inline-block;
  padding: 0.8rem 3rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  background-color: var(--light-yellow);
  color: var(--black);
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    background-color: var(--yellow);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

// loader starts
.loader {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 8%, #7979 74%);
  z-index: 99999;
  filter: blur(8px);
  -webkit-filter: blur(8px);

  .lds-spinner {
    position: absolute;
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: "lds-spinner" 1.2s linear infinite;
    z-index: 999999999999;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
// loader ends

// login and sign-up components
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

// ----- media queries -------------------------------------------------------

@media screen and (max-width: 991px) {
  html {
    font-size: 55%;
  }
  section {
    padding: 2rem;
  }
}

@media screen and (max-width: 450px) {
  html {
    font-size: 50%;
  }
  .heading {
    font-size: 3rem;
  }
}
</style>
