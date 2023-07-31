<template>
  <div class="d-flex flex-column vh-100">
    <div class="flex-grow-1">
      <router-view />
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Contacts App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/contacts" class="nav-link">Contact List</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add-contact" class="nav-link">Add New Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<style>
.vh-100 {
  height: 100vh;
}

nav {
  background-color: #f0f0f0;
  padding: 1rem;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

nav ul li {
  display: inline-block;
}

router-link {
  text-decoration: none;
  color: #007bff;
}

router-link.exact-active {
  font-weight: bold;
  color: #0056b3;
}
</style>


<style>
nav {
  background-color: #f0f0f0;
  padding: 1rem;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

nav ul li {
  display: inline-block;
}

router-link {
  text-decoration: none;
  color: #007bff;
}

router-link.exact-active {
  font-weight: bold;
  color: #0056b3;
}
</style>


<script>
export default {
  name: 'App',
};
</script>
