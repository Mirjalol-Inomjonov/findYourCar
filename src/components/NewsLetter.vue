<template>
  <section class="newsletter">
    <h3
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="easy-in-out"
      class="newsletter__title"
    >
      subcribe for latest updates
    </h3>
    <p
      data-aos="fade-left"
      data-aos-duration="2000"
      data-aos-easing="easy-in-out"
      class="newsletter__subtitle"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, inventore!
    </p>

    <!-- form part -->
    <form
      action="#"
      class="form"
      data-aos="zoom-in"
      data-aos-duration="2500"
      data-aos-easing="easy-in-out"
    >
      <input
        class="form__email"
        type="email"
        placeholder="enter your email"
        name="email"
        id="email"
      />
      <button type="submit" class="form__subcribe" name="submit" id="submit">
        subcribe
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "NewsLetter",
};
</script>

<style lang="scss" scoped>
.newsletter {
  padding: 6rem 2rem;
  text-align: center;
  background: url("../assets/image/letter-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &__title {
    color: var(--black);
    font-size: 3rem;
  }
  &__subtitle {
    color: var(--light-color);
    font-size: 1.5rem;
    padding: 1rem 0;
  }

  .form {
    display: flex;
    height: 5rem;
    max-width: 60rem;
    margin: 1rem auto;
    overflow: hidden;
    border-radius: 5rem;
    box-shadow: var(--box-shadow);
    &__email {
      width: 100%;
      height: 100%;
      font-size: 1.6rem;
      color: var(--black);
      text-transform: none;
      padding: 0 2rem;
    }
    &__subcribe {
      height: 100%;
      width: 17rem;
      font-size: 1.7rem;
      color: var(--black);
      background-color: var(--light-yellow);
      cursor: pointer;
      &:hover {
        background-color: var(--yellow);
      }
    }
  }
}
</style>
