import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ContactList from './views/ContactList.vue';
import ContactDetails from './views/ContactDetails.vue';
import AddContact from './views/AddContact.vue';
import EditContact from './views/EditContact.vue';
import 'bootstrap/dist/css/bootstrap.min.css';


const routes = [
  { path: '/', component: ContactList, name: 'Home' }, // Adjust this as needed for your Home component
  { path: '/contacts', component: ContactList, name: 'Contacts' },
  { path: '/contact/:id', component: ContactDetails, name: 'ContactDetails', props: true },
  { path: '/add-contact', component: AddContact, name: 'AddContact' },
  { path: '/edit/:id', component: EditContact, name: 'EditContact', props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');