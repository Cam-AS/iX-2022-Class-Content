import { Component, Input, OnInit } from '@angular/core';
import { ContactForm } from 'src/app/models/contact-form';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts?: ContactForm[];

  constructor() { }

  ngOnInit(): void {
  }

}
