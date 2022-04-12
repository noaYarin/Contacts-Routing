import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];
  constructor() {}
  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
}
