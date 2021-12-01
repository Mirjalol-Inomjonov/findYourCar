<template>
  <section class="services" id="services">
    <h1 class="heading">our <span>services</span></h1>
    <div class="box-container">
      <div
        v-for="(box, index) in boxes"
        :key="index"
        class="box-container__item"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <i :class="box.icon"></i>
        <h3 class="box-container__item__title">{{ box.title }}</h3>
        <p class="box-container__item__subtitle">{{ box.subtitle }}</p>
        <router-link class="btn" to="#">read more</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      boxes: [
        {
          icon: "fas fa-car",
          title: "car selling",
          subtitle:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eos.",
        },
        {
          icon: "fas fa-tools",
          title: "parts repair",
          subtitle:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eos.",
        },
        {
          icon: "fas fa-car-crash",
          title: "car incuranse",
          subtitle:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eos.",
        },
        {
          icon: "fas fa-car-battery",
          title: "battery replacement",
          subtitle:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eos.",
        },
        {
          icon: "fas fa-gas-pump",
          title: "oil change",
          subtitle:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eos.",
        },
        {
          icon: "fas fa-headset",
          title: "24/7 support",
          subtitle:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eos.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
    &__item {
      text-align: center;
      padding: 2rem;
      border-radius: 0.5rem;
      border: var(--border);
      box-shadow: var(--box-shadow);

      i {
        width: 6rem;
        height: 6rem;
        line-height: 6rem;
        font-size: 2.5rem;
        color: var(--black);
        background-color: var(--yellow);
        border-radius: 50%;
        margin-bottom: 1rem;
      }
      &__title {
        color: var(--black);
        font-size: 2.2rem;
      }
      &__subtitle {
        color: var(--light-color);
        font-size: 1.4rem;
        padding: 1rem 0;
        line-height: 1.8;
      }

      &:hover {
        background-color: var(--black);
        transition: all 0.45s linear;
        h3 {
          color: #fff;
        }
        p {
          color: #eee;
        }
      }
    }
  }
}
</style>
