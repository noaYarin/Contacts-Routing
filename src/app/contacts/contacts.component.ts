import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'dateOfBirth', 'isLikeCold'];
  @Input() contacts: Contact[] = [
    {
      name: 'John',
      age: 30,
      dateOfBirth: new Date('01/01/1980'),
      isLikeCold: true,
    },
  ];

  constructor(private ContactService: ContactService) {
    this.contacts = this.ContactService.getContacts();
  }

  ngOnInit(): void {}
}
