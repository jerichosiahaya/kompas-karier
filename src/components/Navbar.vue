<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">KompasKarier</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/job">Job Boards</b-nav-item>
          <b-nav-item href="#">Life at Kompas</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>