import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactList: [];

  constructor(private contact_service: ContactService) { 
    this.contact_service.getContacts().subscribe((contacts: any) => {
      this.contactList = contacts;
    });

  }

  ngOnInit() {
  }

}
