<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12 text-center mt-3">
                <img
                    width="200"
                    class="img-thumbnail border-0 mb-5"
                    src="https://i.dlpng.com/static/png/5327106-businessman-icon-png-263229-free-icons-library-businessman-icon-png-512_512_preview.png"
                    alt=""
                />
                <h1 class="mb-4">{{ profile.name }}</h1>
                <h5>{{ profile.role }}</h5>
                <p class="mt-5 text-secondary">
                    {{ profile.about }}
                </p>
            </div>
        </div>

        <div class="row d-flex justify-content-center my-5">
            <div class="col-md-6 text-center">
                <ul class="list-unstyled d-flex justify-content-center">
                    <li
                        class="list-contact"
                        v-for="contact in contacts"
                        :key="contact.name"
                    >
                        <a href="">{{ contact.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    setup() {
        return {
            profile: [],
            contacts: [],
        };
    },

    mounted() {
        this.getProfile();
        this.getContact();
    },

    methods: {
        async getProfile() {
            let { data } = await axios.get("profile");
            this.profile = data.data;
            this.$forceUpdate();
        },

        async getContact() {
            let { data } = await axios.get("contacts");
            this.contacts = data.data;
            this.$forceUpdate();
        },
    },
};
</script>

<style scoped>
.list-contact {
    margin-right: 20px;
}

.list-contact a {
    text-decoration: none;
}
</style>
