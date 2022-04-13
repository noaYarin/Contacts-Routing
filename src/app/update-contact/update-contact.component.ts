import { Contact } from './../classes/contact';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent implements OnInit {
  @Input() contact?: Contact;
  id?: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ContactService: ContactService
  ) {}

  ngOnInit(): void {
    let contactId = this.route.snapshot.paramMap.get('id');
    this.contact = this.ContactService.getContactById(contactId ?? '');
  }

  saveContact(
    name: HTMLInputElement,
    age: HTMLInputElement,
    dateOfBirth: HTMLInputElement,
    isLikeCold: HTMLInputElement
  ): void {
    let contactObject = new Contact(
      this.contact?.id ?? '',
      name.value,
      parseInt(age.value),
      new Date(dateOfBirth.value),
      isLikeCold.checked
    );
    this.ContactService.saveContact(contactObject);
    name.value = '';
    age.value = '';
    dateOfBirth.value = '';
    isLikeCold.checked = false;
  }

  gotoContacts() {
    this.router.navigate(['/contacts']);
  }
}
