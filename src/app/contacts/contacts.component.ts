import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'dateOfBirth', 'isLikeCold'];
  @Input() contacts: Contact[] = [];

  constructor(
    private ContactService: ContactService,
    private route: ActivatedRoute
  ) {
    this.contacts = this.ContactService.getContacts();
  }
  contacts$: Observable<Contact> | undefined;
  selectedId: string = '1';

  ngOnInit() {
    this.contacts$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = String(params.get('id'));
        return this.ContactService.getContacts();
      })
    );
  }

  deleteContact(contactId: string) {
    this.ContactService.deleteContactById(contactId);
  }
}
