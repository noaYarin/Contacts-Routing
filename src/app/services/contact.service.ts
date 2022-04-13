import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];
  constructor() {
    this.contacts = [];
  }
  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
  getContactById(contactId: string) {
    return this.contacts.find((contact) => contact.id === contactId);
  }
  saveContact(contact: Contact) {
    const index = this.contacts.findIndex(
      (contact) => contact.id === contact.id
    );
    this.contacts[index] = contact;
  }
  deleteContactById(contactId: string) {
    let idx = this.contacts.findIndex((contact) => contact.id === contactId);
    this.contacts.splice(idx, 1);
  }
}
