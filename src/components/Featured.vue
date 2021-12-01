<template>
  <section class="featured" id="featured">
    <h1 class="heading"><span>featured</span> cars</h1>
    <div class="featured-slider">
      <VueSlickCarousel v-bind="settings" id="slickCarusel">
        <div
          class="box"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-easing="liner"
          v-for="(box, index) in boxes"
          :key="index"
        >
          <img :src="box.img" :alt="box.alt" />
          <h3>{{ box.title }}</h3>
          <div class="stars">
            <star-rating
              :increment="0.01"
              :fixed-points="2"
              :star-size="25"
            ></star-rating>
          </div>
          <div class="price">{{ box.price }}</div>

          <router-link to="#" class="btn">ckeck out</router-link>
        </div>
      </VueSlickCarousel>

      <VueSlickCarousel v-bind="settings" id="slickCarusel">
        <div
          class="box"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          v-for="(box2, index) in boxes2"
          :key="index"
        >
          <img :src="box2.img" :alt="box2.alt" />
          <h3>{{ box2.title }}</h3>
          <div class="stars">
            <star-rating
              :increment="0.01"
              :fixed-points="2"
              :star-size="25"
            ></star-rating>
          </div>
          <div class="price">{{ box2.price }}</div>

          <router-link to="#" class="btn">ckeck out</router-link>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import StarRating from "vue-star-rating";

export default {
  name: "Featured",
  components: {
    VueSlickCarousel,
    StarRating,
  },

  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        // autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      boxes: [
        {
          img: require("../assets/image/car-1.png"),
          alt: "Mercedez Benz",
          title: "new model",
          price: "$55,000/-",
        },
        {
          img: require("../assets/image/car-2.png"),
          alt: "Mercedez Benz",
          title: "new model",
          price: "$95,000/-",
        },
        {
          img: require("../assets/image/car-3.png"),
          alt: "Mercedez Benz",
          title: "new model",
          price: "$107,000/-",
        },
        {
          img: require("../assets/image/car-4.png"),
          alt: "Mercedez Benz",
          title: "new model",
          price: "$47,000/-",
        },
      ],
      boxes2: [
        {
          img: require("../assets/image/car-5.png"),
          alt: "Mercedez Benz",
          title: "new model",
          price: "$77,000/-",
        },
        {
          img: require("../assets/image/car-6.png"),
          alt: "Mercedez Benz",
          title: "new model",
          price: "$103,000/-",
        },
        {
          img: require("../assets/image/car-7.png"),
          alt: "Mercedez Benz",
          title: "new model",
          price: "$220,000/-",
        },
        {
          img: require("../assets/image/car-8.png"),
          alt: "Mercedez Benz",
          title: "new model",
          price: "$999,000/-",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.featured {
  .featured-slider {
    padding: 1rem 1rem 4rem;
    .box {
      height: 376px;
      text-align: center;
      padding: 2rem;
      box-shadow: var(--box-shadow);
      border: var(--border);
      border-radius: 0.5rem;
      img {
        height: 15rem;
        width: 100%;
        transition: all .2s linear;
      }
      &:hover {
        img {
          transform: scale(0.9);
        }
      }
      h3 {
        font-size: 2.2rem;
        color: var(--black);
      }
      .stars {
        padding: 1rem 0;
        text-align: center;
        .vue-star-rating {
          display: inline-block;
        }
      }
      .price {
        font-size: 2.5rem;
        color: var(--black);
      }
    }
    .slick-dots {
      li {
        &.slick-active {
          button:before {
            color: var(--yellow);
            opacity: 1 !important;
          }
        }
        button:before {
          font-size: 10px;
          color: var(--black);
          // width: 30px !important;
          // height: 30px !important;
        }
        button:hover:before {
          color: var(--light-yellow);
          opacity: 1 !important;
        }
      }
    }
    .slick-slider {
      margin-bottom: 5rem;
      .slick-list {
        .slick-track {
          display: flex !important;
          gap: 2rem !important;
        }
      }
    }
  }
}
// slick-initialized
</style>
