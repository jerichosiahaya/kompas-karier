<template>
  <div>
    <footer class="bg-light text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0" style="text-align: left">
            <h5 class="text-uppercase">Harian Kompas</h5>

            <p>
              Telp: (021) 25676000 <br />
              Email: hotline@kompas.id <br />
              Lokasi: Jl. Palmerah Selatan 26-28
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0" style="text-align: left">
            <h5 class="text-uppercase">Tentang Kami</h5>

            <p>
              Harian Kompas adalah surat kabar Indonesia yang berkantor pusat di
              Jakarta. Kompas diterbitkan oleh PT Kompas Media Nusantara yang
              merupakan bagian dari kelompok usaha Kompas Gramedia (KG), yang
              didirikan oleh P.K. Ojong (almarhum) dan Jakob Oetama (almarhum)
              sejak 28 Juni 1965.
            </p>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © {{ new Date().getFullYear() }} Copyright | Kompas Karier
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>