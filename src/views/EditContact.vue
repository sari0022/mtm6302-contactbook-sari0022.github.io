<template>
    <form @submit.prevent="submitForm" class="container mt-4">
      <div class="mb-3">
        <label class="form-label">First Name:</label>
        <input class="form-control" v-model="contact.firstName" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Last Name:</label>
        <input class="form-control" v-model="contact.lastName" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Email:</label>
        <input type="email" class="form-control" v-model="contact.email" required />
      </div>
      <button type="submit" class="btn btn-primary">Update Contact</button>
    </form>
  </template>
  
  
  <style>
  form {
    max-width: 400px;
    margin: auto;
  }

  label {
    display: block;
    margin: 15px 0;
  }

  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    text-align: center;
    display: block;
    margin: auto;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }
</style>

  <script>
  import { getContactById, editContact } from '../contactStorage';
  
  export default {
    props: ['id'],
    data() {
      return {
        contact: getContactById(this.id),
      };
    },
    methods: {
      submitForm() {
        editContact(this.id, this.contact);
        this.$router.push(`/contact/${this.id}`);
      },
    },
  };
  </script>
  