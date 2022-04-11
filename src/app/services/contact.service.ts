import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    {
      name: 'John',
      age: 30,
      dateOfBirth: new Date(1980, 1, 1),
      isLikeCold: true,
    },
    {
      name: 'John',
      age: 30,
      dateOfBirth: new Date(1980, 1, 1),
      isLikeCold: true,
    },
  ];
  constructor() {}
  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
}
