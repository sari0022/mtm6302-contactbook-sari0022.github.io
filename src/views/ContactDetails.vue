<template>
    <div class="container mt-4">
      <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
      <p>Email: {{ contact.email }}</p>
      <router-link :to="`/edit/${id}`" class="btn btn-warning">Edit</router-link>
      <button @click="deleteContact" class="btn btn-danger">Delete</button>
    </div>
  </template>
  
  <style>
  h1 {
    color: #333;
  }

  p {
    font-size: 18px;
    color: #555;
  }

  button {
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    background-color: #f44336;
    color: white;
    border: none;
    text-align: center;
    display: inline-block;
    font-size: 16px;
  }

  button:hover {
    background-color: #da190b;
  }
</style>

<script>
import { getContactById, deleteContact } from '../contactStorage';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contact: getContactById(this.id),
    };
  },
  beforeMount() {
    // Ensure we have the latest contact information when the component is mounted
    this.contact = getContactById(this.id);
  },
  methods: {
    deleteContact() {
      deleteContact(this.id);
      this.$router.push('/');
    },
  },
  watch: {
    // React to changes in the id prop, in case the route changes but the component remains the same
    id() {
      this.contact = getContactById(this.id);
    },
  },
};
</script>

  