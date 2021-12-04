<template>
  <div class="container">
    <div class="row text-center mt-5">
      <div class="col-md-12">
        <h1>My Skills</h1>
        <!-- <hr
                    style="width: 18rem; background-color: #100e9c; height: 5px"
                    class="mx-auto rounded"
                /> -->
      </div>
    </div>

    <div class="row my-5">
      <div v-for="skill in skills" :key="skill.name" class="col-md-4 mb-3">
        <div class="card mb-3 p-3" style="">
          <div class="row">
            <div class="col-md-4">
              <img :src="skill.logo" class="img-fluid rounded" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ skill.name }}</h5>
                <p class="card-text" style="font-size: 14px">
                  {{ skill.experience }}
                </p>
              </div>
            </div>
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
      skills: [],
    };
  },

  mounted() {
    this.getSkills();
  },

  methods: {
    async getSkills() {
      let { data } = await axios.get("skills");
      this.skills = data.data;
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.card {
  min-height: 2rem;
}
.img-fluid {
  width: 100px;
}
</style>