<template>
  <div class="container main-body">
    <div class="row container covid-notice center-block text-center">
      <p>
        COVID-19 notice: Kompas Group continues to prioritize the health and
        safety of our candidates, employees and their families in response to
        the Coronavirus Disease (COVID-19). All of our interviews are currently
        conducted virtually, learn more on how to prepare for your virtual
        interview.
      </p>
    </div>
    <div class="row container mt-3 mb-4 programs-offer">
      <div class="col mobile-col">
        <h2><b>Internship</b> Programs</h2>
        <br />
        <p>
          We offer a variety of scholarship programs, internships and full-time
          opportunities designed to empower you. Imagine the impact you can have
          and jumpstart your career.
        </p>
        <b-button variant="primary" to="/job">Explore Opportunities</b-button>
      </div>
      <div class="col mobile-col">
        <h2><b>Experienced</b> Professionals</h2>
        <br />
        <p>
          Want to make a difference? So do we. Step in to explore the wealth of
          career opportunities and take your career to the next level.
        </p>
        <b-button variant="primary" to="/job">Find Jobs</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyHome",
};
</script>

<style>
.programs-offer {
  text-align: left;
}

.covid-notice {
  margin-bottom: 3em;
}

.main-body {
  margin-bottom: 5em;
}
</style>