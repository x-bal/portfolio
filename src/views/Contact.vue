<template>
  <div class="container">
    <div class="row text-center mt-5">
      <div class="col-md-12">
        <h1>My Contacts</h1>
      </div>
    </div>

    <div class="row my-5 d-flex justify-content-center">
      <div class="col-md-5">
        <ul class="list-group text-center">
          <li
            v-for="contact in contacts"
            :key="contact.name"
            class="list-group-item border-0"
          >
            <a
              target="_blank"
              @click="redirect(contact.link)"
              style="text-decoration: none"
              class="align-items-center link"
            >
              <i :class="contact.icon" class="fa-2x text-dark"></i><br />
              <span class="">https://{{ contact.link }}</span>
            </a>
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
      contacts: [],
    };
  },

  mounted() {
    this.getContacts();
  },

  methods: {
    async getContacts() {
      let { data } = await axios.get("contacts");
      this.contacts = data.data;
      this.$forceUpdate();
    },

    redirect(url) {
      window.open("https://" + url, "_blank");
    },
  },
};
</script>

<style scoped>
.list-group-item {
  background: none;
}
.link:hover {
  cursor: pointer;
}
</style>