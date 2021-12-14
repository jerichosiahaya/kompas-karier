<template>
  <div class="bannerjob">
    <b-carousel
      class="mb-5"
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 10px #000"
      no-animation
      img-width="900"
      img-height="100"
    >
      <b-carousel-slide img-src="assets/images/banner3.jpg/">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "BannerJob",
};
</script>

<style>
.bannerjob .carousel-item {
  height: 15rem;
  background-color: #777;
}
</style>