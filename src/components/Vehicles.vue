<template>
  <section class="vehicles" id="vehicles">
    <h1 class="heading">popular <span>vehicles</span></h1>
    <carousel-3d
      :inverse-scaling="1500"
      :space="800"
      :display="7"
      :autoplay="true"
      :autoplayTimeout="2500"
      :autoplayHoverPause="true"
    >
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <div
          class="box"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-easing="easy-in-out"
        >
          <img :src="slide.img" :alt="slide.alt" />
          <div class="content">
            <h3>{{ slide.title }}</h3>
            <div class="price"><span>price: </span> {{ slide.price }}</div>
            <p>
              new
              <span class="fas fa-circle"></span> 2021
              <span class="fas fa-circle"></span> automatic
              <span class="fas fa-circle"></span> petrol
              <span class="fas fa-circle"></span> 183mph
            </p>
            <router-link to="#" class="btn">ckeck out</router-link>
          </div>
        </div>
      </slide>
    </carousel-3d>
  </section>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "Vehicles",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: [
        {
          img: require("../assets/image/vehicle-1.png"),
          alt: "lamorhgini",
          title: "new model",
          price: " $65000/-",
        },
        {
          img: require("../assets/image/vehicle-2.png"),
          alt: "lamorhgini",
          title: "new model",
          price: " $78000/-",
        },
        {
          img: require("../assets/image/vehicle-3.png"),
          alt: "lamorhgini",
          title: "new model",
          price: " $9000/-",
        },
        {
          img: require("../assets/image/vehicle-4.png"),
          alt: "lamorhgini",
          title: "new model",
          price: " $12000/-",
        },
        {
          img: require("../assets/image/vehicle-5.png"),
          alt: "lamorhgini",
          title: "new model",
          price: " $88000/-",
        },
        {
          img: require("../assets/image/vehicle-6.png"),
          alt: "lamorhgini",
          title: "new model",
          price: " $87000/-",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.vehicles {
  padding: 5rem 5%;

  .box {
    text-align: center;

    &:hover {
      cursor: pointer;
    }
    img {
      width: 100%;
      object-fit: cover;
    }

    .content {
      padding-top: 1rem;
      h3 {
        font-size: 2.5rem;
        color: var(--black);
      }
      .price {
        font-weight: bolder;
        font-size: 2.5rem;
        color: var(--yellow);
        padding: 1rem 0;
        span {
          font-weight: normal;
          font-size: 1.7rem;
          color: var(--light-color);
        }
      }
      p {
        font-size: 1.6rem;
        padding: 1.5rem 1rem 1rem;
        border-top: var(--border);
        color: var(--light-color);
        display: flex;
        align-items: center;
        span {
          font-size: 0.8rem;
          color: var(--yellow);
          padding: 0 0.5rem;
        }
      }
    }
  }

  .carousel-3d-container {
    height: 470px !important;
    padding: 2rem 9%;
    .carousel-3d-slider {
      height: 330px !important;
    }
  }
  .carousel-3d-slide {
    background-color: #fff;
    border: none;
    height: 220px !important;
    opacity: 0.6 !important;
  }
  .current {
    overflow: inherit !important;
    opacity: 1 !important;
  }
}
</style>
