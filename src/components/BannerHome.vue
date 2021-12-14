<template>
  <div>
    <b-carousel
      class="mb-5"
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide img-src="assets/images/banner1.jpg/">
        <div class="caption-text">
          <h2>Do what you love</h2>
          <p>Create the future you want</p>
          <b-button variant="primary" to="/job">Find Jobs</b-button>
        </div>
      </b-carousel-slide>

      <b-carousel-slide img-src="assets/images/banner2.jpg/">
        <div class="caption-text">
          <h2>Finding your passion</h2>
          <p>Believe in your dreams</p>
          <b-button variant="primary" to="/job">Explore Opportunities</b-button>
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
  height: 31rem;
  background-color: #777;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: auto;
}

.caption-text {
  text-align: left;
  position: relative;
  bottom: 8em;
}

.btn.btn-primary:hover,
.btn.btn-primary:focus,
.btn.btn-primary:active,
.btn.btn-primary.active {
  background-color: #013a66;
  border-color: #013a66;
}

.btn.btn-primary {
  color: #ffffff;
  background-color: #005596;
  border-color: #005596;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  background-color: black !important;
}
</style>