<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <div class="wrapper" @mousemove="move"></div>
    <div id="pg">pageX={{ x }} pageY={{ y }} </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: null,
      y: null,
    };
  },

  methods: {
    // move(e) {
    //   console.log(e);
    //   this.x = e.pageX;
    //   this.y = e.pageY;
    // },
  },
};
</script>
<style lang="scss">
.wrapper {
  width: 450px;
  height: 450px;
  background-color: #ccc;
  cursor: pointer;
  color: #fff;
}

</style>
