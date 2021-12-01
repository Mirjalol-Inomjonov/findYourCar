<template>
  <footer class="footer">
    <div class="box-container">
      <div class="box">
        <h3>our branches</h3>
        <a href="#"><i class="fas fa-map-marker-alt"></i> uzbek </a>
        <a href="#"><i class="fas fa-map-marker-alt"></i> france </a>
        <a href="#"><i class="fas fa-map-marker-alt"></i> africa </a>
        <a href="#"><i class="fas fa-map-marker-alt"></i> australia </a>
        <a href="#"><i class="fas fa-map-marker-alt"></i> russia </a>
      </div>

      <div class="box">
        <h3>quick links</h3>
        <router-link to="#home"
          ><i class="fas fa-arrow-right"></i> home
        </router-link>
        <router-link to="#vehicles"
          ><i class="fas fa-arrow-right"></i> vehicles
        </router-link>
        <router-link to="#services"
          ><i class="fas fa-arrow-right"></i> services
        </router-link>
        <router-link to="#featured"
          ><i class="fas fa-arrow-right"></i> featured
        </router-link>
        <router-link to="#review"
          ><i class="fas fa-arrow-right"></i> review
        </router-link>
        <router-link to="#conatct"
          ><i class="fas fa-arrow-right"></i> conatct
        </router-link>
      </div>

      <div class="box">
        <h3>quick links</h3>
        <a href="tel:+998999363098"><i class="fas fa-phone"></i> +998-936-3098 </a>
        <a href="#"><i class="fas fa-phone"></i> +123-456-7890 </a>
        <a href="mailto:mirjalolinomjonov@gmail.com?subject=subject&cc=cc@example.com"><i class="fas fa-envelope"></i> mirjalol@gmail.com </a>
        <a href="#"
          ><i class="fas fa-map-marker-alt"></i> toshkent, uzbekistan - 100190
        </a>
      </div>

      <div class="box">
        <h3>quick links</h3>
        <a href="#"><i class="fab fa-facebook"></i> facebook </a>
        <a href="#"><i class="fab fa-twitter"></i> twitter </a>
        <a href="#"><i class="fab fa-instagram"></i> instagram </a>
        <a href="#"><i class="fab fa-linkedin"></i> linkedin </a>
        <a href="#"><i class="fab fa-pinterest"></i> pinterest </a>
      </div>
    </div>
    <div class="credit">create by mr. mirjalol | all rights reserved!</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 2rem 9%;
  background-color: var(--light-yellow);
  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.5rem;
    .box {
      h3 {
        color: var(--black);
        font-size: 2.2rem;
        padding: 1rem 0;
      }
      a {
        display: block;
        color: var(--black);
        font-size: 1.4rem;
        padding: 1rem 0;
        i {
          padding-right: 0.5rem;
          color: var(--black);
          transition: all .2s linear;
        }
        &:hover {
          i {
            padding-right: 1.5rem;
          }
        }
      }
    }
  }

  .credit {
    text-align: center;
    border-top: var(--border);
    padding: 1rem;
    padding-top: 1.5rem;
    margin-top: 2rem;
    font-size: 2rem;
  }
}
</style>
