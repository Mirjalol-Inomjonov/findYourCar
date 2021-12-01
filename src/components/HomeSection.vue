<template>
  <section
    @mousemove="mousemove($event)"
    @mouseleave="mouseleave($event)"
    class="home-section"
    id="home"
  >
    <!--ref="parallax"-->
    <h1 class="home-parallax home-section__title" data-speed="-2">
      find your car
    </h1>
    <img
      class="home-parallax home-section__img"
      data-speed="5"
      src="../assets/image/home-img.png"
      alt="cars"
    />
    <router-link to="#" class="btn home-parallax" data-speed="7"
      >explore cars</router-link
    >
  </section>
</template>

<script>
export default {
  name: "HomeSection",
  methods: {
    // home-section mousemove starts
    mousemove(e) {
      // console.log(this.$refs.parallax);
      document.querySelectorAll(".home-parallax").forEach((elm) => {
        let speed = elm.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translate(${y}px, ${x}px) `;
      });
    },
    // home-section mouseleave starts
    mouseleave() {
      document.querySelectorAll(".home-parallax").forEach((elm) => {
        elm.style.transform = `translate(0px, 0px) `;
      });
    },
  },

  // mounted() {
  //   // home-section onmousemove starts
  //   document.querySelector(".home-section").onmousemove = (e) => {
  //     document.querySelectorAll(".home-parallax").forEach((elm) => {
  //       let speed = elm.getAttribute("data-speed");
  //       let x = (window.innerWidth - e.pageX * speed) / 90;
  //       let y = (window.innerHeight - e.pageY * speed) / 90;

  //       elm.style.transform = `translate(${y}px, ${x}px) `;
  //     });
  //   };
  //   // home-section onmouseleave starts
  //   document.querySelector(".home-section").onmouseleave = () => {
  //     document.querySelectorAll(".home-parallax").forEach((elm) => {
  //       elm.style.transform = `translate(0px, 0px) `;
  //     });
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.home-section {
  padding-top: 10rem;
  text-align: center;
  overflow-x: hidden;
  &__title {
    font-size: 7.5vw;
    text-transform: uppercase;
    color: var(--black);
    transition: all 0.15s linear;
  }
  &__img {
    width: 100%;
    margin: 1rem 0;
    transition: all 0.25s linear;
  }
}
</style>
