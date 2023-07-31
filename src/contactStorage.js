const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

export function addContact(contact) {
  contacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

export function editContact(id, updatedContact) {
  contacts[id] = updatedContact;
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

export function deleteContact(id) {
  contacts.splice(id, 1);
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

export function getContacts() {
  return contacts;
}

export function getContactById(id) {
  return contacts[id];
}
