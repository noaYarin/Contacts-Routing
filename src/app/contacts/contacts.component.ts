import { Component, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private ContactService: ContactService) {
    this.contacts = this.ContactService.getContacts();
  }

  ngOnInit(): void {}
}
