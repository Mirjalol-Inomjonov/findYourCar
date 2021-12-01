<template>
  <section class="icons-container">
    <div
      class="icons"
      data-aos="fade-up-right"
      data-aos-delay="100"
      data-aos-duration="1500"
    >
      <i class="fas fa-home"></i>
      <div class="icons-content">
        <h3 class="icons-content__title">150+</h3>
        <p class="icons-content__subtitle">branches</p>
      </div>
    </div>

    <div
      class="icons"
      data-aos="fade-up-right"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <i class="fas fa-car"></i>
      <div class="icons-content">
        <h3 class="icons-content__title">4770+</h3>
        <p class="icons-content__subtitle">cars sold</p>
      </div>
    </div>

    <div
      class="icons"
      data-aos="fade-up-left"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <i class="fas fa-users"></i>
      <div class="icons-content">
        <h3 class="icons-content__title">590+</h3>
        <p class="icons-content__subtitle">happy clients</p>
      </div>
    </div>

    <div
      class="icons"
      data-aos="fade-up-left"
      
      data-aos-duration="1500"
    >
      <i class="fas fa-car"></i>
      <div class="icons-content">
        <h3 class="icons-content__title">890+</h3>
        <p class="icons-content__subtitle">new cars</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Icons",
};
</script>

<style lang="scss" scoped>
.icons-container {
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.5rem;
  background-color: #eee;
  .icons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    background-color: #fff;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      transition: all .25s linear;
      background-color: var(--black);
      i {
        transition: all .2s linear;
        background-color: var(--yellow);
      }
      h3 {
        color: #fff;
      }
      p {
        color: #eee;
      }
    }

    i {
      width: 6rem;
      height: 6rem;
      line-height: 6rem;
      font-size: 2.5rem;
      border-radius: 50%;
      color: var(--black);
      background-color: #eee;
      text-align: center;
    }
    &-content {
      &__title {
        color: var(--yellow);
        font-size: 2.5rem;
      }
      &__subtitle {
        color: var(--light-color);
        font-size: 1.5rem;
      }
    }
  }
}
</style>
