<template>
  <div class="jobdetail">
    <BannerJob />
    <div class="container jobTitle">
      <h3>{{ job.title }}</h3>
      <p>{{ job.type }}</p>
      <hr />
      <p>Lorem Ipsum</p>
      <h5>Job Summary</h5>
      <p>{{ job.summary }}</p>
      <h5>Duties & Responsibilities</h5>
      <p v-html="jobDuties"></p>
      <h5>Requirements & Qualifications</h5>
      <p v-html="jobReq"></p>

      <div class="row applyButton">
        <div class="col-md-auto mb-2">
          <b-button to="/job" variant="dark">←</b-button>
        </div>
        <div class="col-md-auto mb-2">
          <b-button to="/jobdetail" variant="success">Apply Manual</b-button>
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
    };
  },
  methods: {
    setJobs(data) {
      (this.job = data),
        (this.jobReq = data.req),
        (this.jobDuties = data.duties_res);
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