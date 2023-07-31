<template>
    <div>
      <h1>Contact List</h1>
      <div class="container contact-list-container">
        <ul class="list-group">
          <li v-for="(contact, index) in contacts" :key="index" class="list-group-item">
            <router-link :to="`/contact/${index}`">{{ contact.lastName }}, {{ contact.firstName }}</router-link>
          </li>
        </ul>
      </div>
      <div class="text-center mt-3">
        <router-link to="/add-contact" class="btn btn-primary">Add New Contact</router-link>
      </div>
    </div>
  </template>
  
  <style>
    .list-group {
    max-width: 400px;
    margin: 0 auto;
    
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  h1 {
    color: #555;
    padding-top: 50px;
    padding-bottom: 25px;
    text-align: center;
  }
</style>

  <script>
  import { getContacts } from '../contactStorage';
  
  export default {
    data() {
      return {
        contacts: getContacts().sort((a, b) => a.lastName.localeCompare(b.lastName)),
      };
    },
  };
  </script>
  