<template>
  <section class="reviews" id="reviews">
    <h1 class="heading">client's <span>review</span></h1>
    <div class="reviews-slider">
      <VueSlickCarousel v-bind="settings" id="slickCarusel">
        <div
          class="box"
          data-aos="zoom-out"
          data-aos-duration="4000"
          v-for="(review, index) in reviews"
          :key="index"
        >
          <div class="box__img">
            <img :src="review.img" :alt="review.alt" />
          </div>
          <div class="box__content">
            <p>{{ review.subtitle }}</p>
            <h3>{{ review.fname }}</h3>
            <div class="stars">
              <star-rating
                :increment="0.01"
                :fixed-points="2"
                :star-size="25"
              ></star-rating>
            </div>
          </div>
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
  name: "Review",
  components: {
    VueSlickCarousel,
    StarRating,
  },
  data() {
    return {
      reviews: [
        {
          img: require("../assets/image/pic-1.png"),
          alt: "Jon Doe",
          subtitle:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus ullam perferendis, reiciendis possimus soluta dolore porro, quam eveniet iste qui quidem magnam maiores expedita consequatur laborum nisi veniam beatae.",
          fname: "Jon Doe",
        },
        {
          img: require("../assets/image/pic-2.png"),
          alt: "Jon Doe",
          subtitle:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus ullam perferendis, reiciendis possimus soluta dolore porro, quam eveniet iste qui quidem magnam maiores expedita consequatur laborum nisi veniam beatae.",
          fname: "Jon Doe",
        },
        {
          img: require("../assets/image/pic-3.png"),
          alt: "Jon Doe",
          subtitle:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus ullam perferendis, reiciendis possimus soluta dolore porro, quam eveniet iste qui quidem magnam maiores expedita consequatur laborum nisi veniam beatae.",
          fname: "Jon Doe",
        },
        {
          img: require("../assets/image/pic-4.png"),
          alt: "Jon Doe",
          subtitle:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus ullam perferendis, reiciendis possimus soluta dolore porro, quam eveniet iste qui quidem magnam maiores expedita consequatur laborum nisi veniam beatae.",
          fname: "Jon Doe",
        },
        {
          img: require("../assets/image/pic-5.png"),
          alt: "Jon Doe",
          subtitle:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus ullam perferendis, reiciendis possimus soluta dolore porro, quam eveniet iste qui quidem magnam maiores expedita consequatur laborum nisi veniam beatae.",
          fname: "Jon Doe",
        },
        {
          img: require("../assets/image/pic-6.png"),
          alt: "Jon Doe",
          subtitle:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus ullam perferendis, reiciendis possimus soluta dolore porro, quam eveniet iste qui quidem magnam maiores expedita consequatur laborum nisi veniam beatae.",
          fname: "Jon Doe",
        },
      ],
      settings: {
        arrows: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        centerMode: true,
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
    };
  },
};
</script>

<style lang="scss">
.reviews {
  &-slider {
    padding-bottom: 3rem;
    .box {
      padding: 2rem 1.7rem;
      margin: 2rem 0;
      text-align: center;
      opacity: 0.4;
      transform: scale(0.9);
      &__img {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        overflow: hidden;
        text-align: center;
        display: inline-block;
        img {
          width: 100%;
          object-fit: cover;
        }
      }

      &__content {
        p {
          font-size: 1.5rem;
          padding-bottom: 1rem 0;
          color: var(--light-color);
        }
        h3 {
          font-size: 2.2rem;
          color: var(--black);
        }
        .stars {
          .vue-star-rating {
            display: inline-block;
          }
        }
      }
    }

    .slick-slider {
      .slick-list {
        .slick-track {
          // display: flex;
          // gap: 2rem;
          .slick-current {
            .box {
              opacity: 1;
              transform: scale(1);
              box-shadow: var(--box-shadow);
              border: var(--border);
            }
          }
        }
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
  }
}
</style>
