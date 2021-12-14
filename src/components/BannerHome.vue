<template>
  <div>
    <b-carousel
      class="mb-5"
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      indicators
      img-width="900"
      img-height="100"
    >
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
        <div class="caption-text">
          <h2>Do what you love</h2>
          <p>Create the future you want</p>
          <b-button variant="primary">Find Jobs</b-button>
        </div>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=51">
        <div class="caption-text">
          <h2>Do what you love</h2>
          <p>Create the future you want</p>
          <b-button variant="primary">Find Jobs</b-button>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "BannerHome",
};
</script>

<style>
/* Carousel base class */

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
  background-color: #777;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

.caption-text {
  text-align: left;
  position: relative;
  bottom: 8em;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  background-color: black !important;
}
</style>