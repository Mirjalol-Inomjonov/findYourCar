<template>
  <div class="home">
    <Home-section />
    <Icons />
    <Vehicles />
    <Services />
    <Featured />
    <NewsLetter />
    <Review />
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Contact from '../components/Contact.vue';
import Featured from "../components/Featured.vue";
import Footer from '../components/Footer.vue';
import HomeSection from "../components/HomeSection.vue";
import Icons from "../components/Icons.vue";
import NewsLetter from "../components/NewsLetter";
import Review from "../components/Review.vue";
import Services from "../components/Services.vue";
import Vehicles from "../components/Vehicles.vue";

export default {
  name: "Home",
  components: {
    HomeSection,
    Icons,
    Vehicles,
    Services,
    Featured,
    NewsLetter,
    Review,
    Contact,
    Footer
  },
};
</script>
