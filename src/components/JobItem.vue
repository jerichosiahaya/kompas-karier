<template>
  <div>
    <b-card
      :header="jobDivision"
      header-tag="header"
      :footer="jobType"
      footer-tag="footer"
      v-bind:title="jobTitle"
    >
      <b-card-text>{{ job.quick_summary }}</b-card-text>
      <b-button :to="'/job/' + jobId" variant="success">Apply</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "JobItem",
  props: ["job"],
  data() {
    return {
      jobId: this.job.id,
      jobTitle: this.job.title,
      jobType: this.job.type,
      jobDivision: this.job.division,
    };
  },
};
</script>

<style>
.card {
  text-align: left;
}

.card-title {
  font-weight: bold;
}
</style>