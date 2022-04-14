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
  name = '';
  age = 0;
  dateOfBirth = new Date();
  isLikeCold = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ContactService: ContactService
  ) {}

  ngOnInit(): void {
    let contactId = this.route.snapshot.paramMap.get('id');
    this.contact = this.ContactService.getContactById(contactId ?? '');
    console.log(this.contact);
  }

  saveContact(): void {
    console.log(this.name);

    let contactObject = new Contact(
      this.contact?.id ?? '',
      this.name,
      this.age,
      this.dateOfBirth,
      this.isLikeCold
    );
    this.ContactService.saveContact(contactObject);
    this.name = '';
    this.age = 0;
    this.dateOfBirth = new Date();
    this.isLikeCold = false;
  }

  gotoContacts() {
    this.router.navigate(['/contacts']);
  }
}
