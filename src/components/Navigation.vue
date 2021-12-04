<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-none">
          <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav mx-auto">
                <router-link class="nav-link" to="/" exact>Home</router-link>
                <router-link class="nav-link" to="/projects"
                  >Projects</router-link
                >
                <router-link class="nav-link" to="/skills">Skills</router-link>
                <router-link class="nav-link" to="/contacts"
                  >Contacts</router-link
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar-nav a {
  font-size: 20px;
  margin-right: 4rem;
}
</style>