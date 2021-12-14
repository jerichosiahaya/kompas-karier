<template>
  <div>
    <div class="quotes">
      <div class="row">
        <div class="col justify-content-center align-self-center">
          <h3>
            <i
              >"Dengan bekerja tidak maksimal, kita sendiri mendegradasi talenta
              kemampuan."</i
            >
          </h3>
          <br />
          <p>— Jakob Oetama</p>
        </div>
        <div class="col mr-3 mobile-hidden">
          <img
            class="jakob-oetama"
            src="https://bernasnews.com/wp-content/uploads/2020/09/0909jakob-oetama.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="vision container">
      <hr />
      <br />
      <h3><b>Our Vision</b></h3>
      <br />
      <p>
        Menjadi Perusahaan yang terbesar, terbaik, terpadu, dan tersebar di Asia
        Tenggara melalui usaha berbasis pengetahuan yang menciptakan masyarakat
        terdidik, tercerahkan, menghargai kebhinekaan, dan adil sejahtera.
      </p>
    </div>
    <div class="container">
      <hr />
    </div>
    <div class="testimony mobile-hidden">
      <b-carousel
        id="carousel-no-animation"
        style="background-color: white"
        controls
        img-width="900"
        img-height="100"
      >
        <b-carousel-slide>
          <div class="caption-text">
            <div class="row">
              <div class="col">
                <img
                  class="worker-img"
                  src="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398"
                  alt=""
                />
              </div>
              <div
                class="
                  col
                  text-testimony
                  justify-content-center
                  align-self-center
                "
              >
                <p class="testy">
                  "I feel very proud to be one of the oldest employee of Kompas.
                  My career has skied with the growth of the company. The
                  extraordinary Knowledge Transfer across the different streams
                  of the project has benefitted lot of employee."
                </p>
                <p class="role">— Julie, <i> Content Manager </i></p>
              </div>
            </div>
          </div>
        </b-carousel-slide>

        <b-carousel-slide>
          <div class="caption-text">
            <div class="row">
              <div class="col">
                <img
                  class="worker-img"
                  src="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398"
                  alt=""
                />
              </div>
              <div
                class="
                  col
                  text-testimony
                  justify-content-center
                  align-self-center
                "
              >
                <p class="testy">
                  "I feel very proud to be one of the oldest employee of Kompas.
                  My career has skied with the growth of the company. The
                  extraordinary Knowledge Transfer across the different streams
                  of the project has benefitted lot of employee."
                </p>
                <p class="role">— Julie, <i> Content Manager </i></p>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuotesHome",
};
</script>

<style>
.carousel-item {
  background-color: white;
}

.quotes {
  background-color: lightgrey;
  padding-top: 2em;
  padding-bottom: 2em;
  margin-bottom: 3em;
}

.jakob-oetama {
  width: 70%;
  filter: grayscale(100%);
}

.jakob-oetama:hover {
  filter: grayscale(0);
}

.vision {
  margin-bottom: 3em;
  width: 60%;
}

.vision p {
  font-size: 16pt;
}

.worker-img {
  width: 90%;
}

.text-testimony {
  color: black;
}

.testy {
  font-size: 14pt;
}
</style>