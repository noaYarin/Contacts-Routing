import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  @Input() name = '';
  @Input() age = 0;
  @Input() dateOfBirth = new Date();
  @Input() isLikeCold = false;
  constructor(private ContactService: ContactService) {}
  toggleRadioButton(): void {
    this.isLikeCold = !this.isLikeCold;
  }
  addContact(): void {
    let contactObject = new Contact(
      this.name,
      this.age,
      this.dateOfBirth,
      this.isLikeCold
    );

    this.ContactService.addContact(contactObject);
    this.clearInputs();
  }

  clearInputs(): void {
    this.name = '';
    this.age = 0;
    this.dateOfBirth = new Date();
    this.isLikeCold = false;
  }
  ngOnInit(): void {}
}
