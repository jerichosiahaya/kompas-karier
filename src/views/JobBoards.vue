<template>
  <div class="boards">
    <BannerJob />
    <div class="container titleOpening mb-4">
      <h3>Find Opening Position</h3>
    </div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div>
            <b-dropdown id="dropdown-1" text="Filter: Job Type">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <b-dropdown id="dropdown-1" text="Filter: Division">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group">
            <input
              v-model="title"
              type="text"
              class="form-control"
              placeholder="Search role..."
              aria-label="Search role..."
              aria-describedby="basic-addon1"
              v-on:keyup.enter="searchJob()"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><b-icon-search></b-icon-search
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="container">
      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="job in jobs" :key="job.id">
          <JobItem :job="job" />
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import BannerJob from "@/components/BannerJob.vue";
import JobItem from "@/components/JobItem.vue";
import axios from "axios";
export default {
  components: {
    BannerJob,
    JobItem,
  },
  data() {
    return {
      jobs: [],
      title: "",
      filter: null,
    };
  },
  methods: {
    setJobs(data) {
      this.jobs = data;
    },
    searchJob() {
      axios
        .get(
          "https://valued-stork-95.hasura.app/api/rest/jobs/title/" +
            this.title,
          {
            headers: {
              "x-hasura-admin-secret":
                "XTHiyqU7iAZzrs4yWYoSDa8w2IvAypLufr5aoBkCYJXOGYhwmOkLi45oMaEGHwRF",
            },
          }
        )
        .then((response) => this.setJobs(response.data.jobs))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("https://valued-stork-95.hasura.app/api/rest/jobs", {
        headers: {
          "x-hasura-admin-secret":
            "XTHiyqU7iAZzrs4yWYoSDa8w2IvAypLufr5aoBkCYJXOGYhwmOkLi45oMaEGHwRF",
        },
      })
      .then((response) => this.setJobs(response.data.jobs))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>
