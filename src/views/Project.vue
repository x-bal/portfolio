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
                <div class="card" style="width: 20rem; height: 23rem">
                    <img
                        src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80"
                        class="card-img-top"
                        alt=""
                    />
                    <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p
                            style="font-size: 14px"
                            class="card-text text-secondary"
                        >
                            {{ project.description }}
                        </p>
                    </div>
                    <div class="card-footer bg-white border-top-0">
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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
    },
};
</script>

<style scoped>
.card {
    min-height: 18rem;
}
.card-img-top {
    height: 200px;
    object-fit: cover;
    object-position: center;
}
</style>