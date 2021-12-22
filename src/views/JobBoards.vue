<template>
  <div class="boards">
    <BannerJob />
    <div class="container titleOpening mb-4">
      <h3>Find Opening Position</h3>
    </div>
    <br />
    <div class="container">
      <div class="row mobile-space">
        <div class="col-md-2 mobile-space">
          <div>
            <b-form-select
              v-model="jobTypeFilter"
              :options="jobType"
            ></b-form-select>
          </div>
        </div>
        <div class="col-md-2 mobile-space">
          <div>
            <b-form-select
              v-model="divisionFilter"
              :options="divisionOpt"
            ></b-form-select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search role..."
              aria-label="Search role..."
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><b-icon-search></b-icon-search
              ></span>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <b-button @click="reloadPage">Clear Filter</b-button>
        </div>
      </div>
    </div>

    <br />

    <div class="container">
      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="job in filteredAndSorted"
          :key="job.id"
        >
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
      divisionFilter: "",
      jobTypeFilter: "",
      search: "",
      jobs: [],
      title: "",
      filter: null,
      jobType: [
        { value: "Full-Time", text: "Full-Time" },
        { value: "Intern", text: "Internship" },
      ],
      divisionOpt: [
        { value: "Information Technology", text: "Information Technology" },
        { value: "Management", text: "Management" },
        { value: "Marketing", text: "Marketing" },
      ],
    };
  },
  computed: {
    filteredAndSorted() {
      function compare(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      }
      return this.jobs
        .filter((job) => {
          let result =
            job.title.toLowerCase().includes(this.search.toLowerCase()) &&
            job.division
              .toLowerCase()
              .includes(this.divisionFilter.toLowerCase()) &&
            job.type.toLowerCase().includes(this.jobTypeFilter.toLowerCase());
          return result;
        })
        .sort(compare);
    },
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
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
