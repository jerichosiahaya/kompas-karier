<template>
  <div class="jobdetail">
    <BannerJob />
    <div class="container titleOpening mb-4">
      <h3>Application Form</h3>
    </div>
    <div class="container" style="text-align: left">
      <p>
        Applied Position: <b>{{ job.title }}</b
        >, {{ job.type }}
      </p>
      <!-- form input -->
      <b-form class="mb-3" v-on:submit.prevent>
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="applicantData.name"
            type="text"
            placeholder="Fullname"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="applicantData.age"
            placeholder="Age"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label-for="input-3">
          <b-form-textarea
            id="input-3"
            v-model="applicantData.address"
            type="text"
            placeholder="Address"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-form-group id="input-group-4" label-for="input-4">
          <b-form-file
            id="input-4"
            v-model="file"
            v-on:change="uploadFile"
            placeholder="Upload curriculum vitae or drop it here....."
            drop-placeholder="Drop CV here..."
          ></b-form-file>
        </b-form-group>

        <b-button :to="'/job/' + jobId" variant="dark" class="mr-3">←</b-button>
        <b-button
          type="submit"
          variant="success"
          class="mr-3"
          @click="appliedJob"
          >Submit</b-button
        >
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
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
      applicantData: {
        jobs_id: this.$route.params.id,
      },
      job: {},
      jobReq: null,
      jobDuties: null,
      jobId: this.$route.params.id,
      file: null,
      uploadedFile: null,
    };
  },
  methods: {
    setJobs(data) {
      (this.job = data),
        (this.jobReq = data.req),
        (this.jobDuties = data.duties_res);
    },
    setUploadedFile(data) {
      this.uploadedFile = data;
    },
    appliedJob() {
      if (this.uploadedFile != null) {
        this.applicantData.cv = this.uploadedFile.toString();
      } else {
        this.applicantData.cv = "null";
      }
      axios
        .post(
          "https://valued-stork-95.hasura.app/api/rest/applicants",
          this.applicantData,
          {
            headers: {
              "x-hasura-admin-secret":
                "XTHiyqU7iAZzrs4yWYoSDa8w2IvAypLufr5aoBkCYJXOGYhwmOkLi45oMaEGHwRF",
            },
          }
        )
        .then(() => console.log("Success"))
        .catch((error) => console.log(error));
    },
    uploadFile() {
      console.log(this.file);
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("https://store4.gofile.io/uploadFile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) =>
          this.setUploadedFile(response.data.data.downloadPage)
        )
        .catch((response) => console.log(response));
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
</style>