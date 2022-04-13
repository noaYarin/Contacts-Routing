import { Contact } from './../classes/contact';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private ContactService: ContactService
  ) {}

  ngOnInit(): void {
    let contactId = this.route.snapshot.paramMap.get('id');
    this.contact = this.ContactService.getContactById(contactId ?? '');
  }
}
