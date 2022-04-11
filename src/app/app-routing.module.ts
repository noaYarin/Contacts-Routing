import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'addContact', component: AddContactComponent },
  { path: 'updateContact', component: UpdateContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
