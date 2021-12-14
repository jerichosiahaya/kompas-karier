<template>
  <div class="home">
    <BannerHome />
    <BodyHome />
    <QuotesHome />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerHome from "@/components/BannerHome.vue";
import BodyHome from "@/components/BodyHome.vue";
import QuotesHome from "@/components/QuotesHome.vue";

export default {
  name: "Home",
  components: {
    BannerHome,
    BodyHome,
    QuotesHome,
  },
};
</script>
