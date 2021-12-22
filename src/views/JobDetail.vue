<template>
  <div class="jobdetail">
    <BannerJob />
    <div class="container jobTitle">
      <h3>
        <b> {{ job.title }}</b>
      </h3>
      <p>{{ job.type }}</p>
      <hr />
      <p>
        Kompas is a mission-driven company dedicated to helping create a world
        where anyone can belong anywhere. It takes a unified team committed to
        our core values to achieve this goal. Airbnb's various functions embody
        the company's innovative spirit and our fast-moving team is committed to
        leading as a 21st century company.
      </p>
      <h5><b>Job Summary</b></h5>
      <p>{{ job.summary }}</p>
      <h5><b>Duties & Responsibilities</b></h5>
      <p v-html="jobDuties"></p>
      <h5><b>Requirements & Qualifications</b></h5>
      <p v-html="jobReq"></p>
      <br />
      <div class="row applyButton">
        <div class="col-md-auto mb-2">
          <b-button to="/job" variant="dark">←</b-button>
        </div>
        <div class="col-md-auto mb-2">
          <b-button :to="'/job/apply/' + jobId" variant="success"
            >Apply Manual</b-button
          >
        </div>
        <div class="col-md-auto mb-2">
          <b-button to="/jobdetail" variant="primary"
            >Apply with LinkedIn</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerJob from "@/components/BannerJob.vue";
import axios from "axios";
export default {
  components: {
    BannerJob,
  },
  data() {
    return {
      job: {},
      jobReq: null,
      jobDuties: null,
      jobId: null,
    };
  },
  methods: {
    setJobs(data) {
      (this.job = data),
        (this.jobReq = data.req),
        (this.jobDuties = data.duties_res),
        (this.jobId = data.id);
    },
  },
  mounted() {
    axios
      .get(
        "https://valued-stork-95.hasura.app/api/rest/jobs/" +
          this.$route.params.id,
        {
          headers: {
            "x-hasura-admin-secret":
              "XTHiyqU7iAZzrs4yWYoSDa8w2IvAypLufr5aoBkCYJXOGYhwmOkLi45oMaEGHwRF",
          },
        }
      )
      .then((response) => this.setJobs(response.data.jobs[0]))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
.jobTitle {
  text-align: left;
  margin-bottom: 3em;
}
</style>