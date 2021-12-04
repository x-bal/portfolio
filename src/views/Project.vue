<template>
  <div class="container">
    <div class="row text-center mt-5">
      <div class="col-md-12">
        <h1>My Projects</h1>
        <!-- <hr
                    style="width: 18rem; background-color: #100e9c; height: 5px"
                    class="mx-auto rounded"
                /> -->
      </div>
    </div>

    <div class="row my-5">
      <div
        v-for="project in projects"
        :key="project.name"
        class="col-md-4 mb-3"
      >
        <div class="card" style="height: 23rem">
          <img :src="project.thumbnail" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title" @click="redirect(project.link)">
              {{ project.name }}
            </h5>
            <p style="font-size: 14px" class="card-text text-secondary">
              {{ project.description }}
            </p>
          </div>
          <div class="card-footer bg-white border-top-0">
            <span
              style="margin-right: 7px !important"
              v-for="tag in project.tags"
              :key="tag.name"
              class="btn btn-sm btn-outline-primary"
            >
              {{ tag.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  setup() {
    return {
      projects: [],
    };
  },

  mounted() {
    this.getProjects();
  },

  methods: {
    async getProjects() {
      let { data } = await axios.get("projects");
      this.projects = data.data;
      this.$forceUpdate();
    },

    redirect(url) {
      window.location.href = "https://" + url;
    },
  },
};
</script>

<style scoped>
.card {
  min-height: 18rem;
}
.card-title:hover {
  cursor: pointer;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
  object-position: center;
}
</style>