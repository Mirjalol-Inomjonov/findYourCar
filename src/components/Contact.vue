<template>
  <section class="contact" id="contact">
    <h1 class="heading"><span>contact</span> us</h1>

    <div class="row">
      <!-- google map -->
      <iframe
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="50"
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5988.107529312567!2d69.26944360000002!3d41.37291659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cc35f730131%3A0xabfc68fc1c7bbde4!2sYunusabad-7%2C%20Tashkent%20100190%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1637397616748!5m2!1sen!2s"
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      <!-- contact form -->
      <form
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="50"
        action="#"
      >
        <h3>get in touch</h3>
        <input type="text" placeholder="name" class="box" />
        <input type="email" placeholder="email" class="box" />
        <input type="number" placeholder="number" class="box" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          class="box"
          placeholder="write your message..."
        ></textarea>
        <button type="submit" class="btn">send message</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
.contact {
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    .map {
      flex: 1 1 42rem;
      width: 100%;
      padding: 2rem;
      border: var(--border);
      border-radius: 0.5rem;
      box-shadow: var(--box-shadow);
    }
    form {
      flex: 1 1 42rem;
      padding: 2rem;
      border: var(--border);
      border-radius: 0.5rem;
      box-shadow: var(--box-shadow);
      text-align: center;

      h3 {
        font-size: 3rem;
        color: var(--black);
      }
      .box {
        margin: 0.7rem 0;
        width: 100%;
        color: var(--black);
        font-size: 1.6rem;
        padding: 1rem;
        border: var(--border);
        border-radius: 0.5rem;
        text-transform: none;
        &:hover, &:focus {
          box-shadow: 0 0 5px 3px #ccc;
        }

      }
      textarea {
        height: 15rem;
        resize: none;
      }
    }
  }
}
</style>
